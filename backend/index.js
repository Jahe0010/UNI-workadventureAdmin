const dbInsert = require("./db/dbInsert.js");
const dbSelection = require("./db/dbSelection.js");
const dbDelete = require("./db/dbDelete.js");

const express = require("express")
const bodyParser = require("body-parser");
const app = express();
require('dotenv').config();
const wokaList = require('./resources/wokaList.json');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Extract textures from the woka list
function getAllTextures() {
    let wokas = []
    Object.keys(wokaList).forEach(groupName => {
        let group = wokaList[groupName]
        group.collections.forEach(collection => {
            collection.textures.forEach(texture => {
                wokas.push({
                    id: texture.id,
                    url: texture.url,
                    layer: groupName
                })
            })
        })
    })
    return wokas
}

// check if the incoming pw matches the example pw
function isAuthenticated(token) {
    const adminPW = process.env.AdminPassword;

    if(token) {
        return token === adminPW;
    }

    return false;
}

//returns the map object. this includes the url of the map that has to be loaded
app.get("/admin/api/map", (req, res) => {
    if (isAuthenticated(req.query.token)) {
        res.send(JSON.stringify({
            mapUrl : "https://play.hs-kl.de/maps/" + req.query.playUri.split("maps/")[1],
            policy_type: 1,
            tags: [],
            authenticationMandatory: false,
            roomSlug: null,
            contactPage: null,
            group: "wa",
            iframeAuthentication: null,
            miniLogo: null,
            loadingLogo: null,
            loginSceneLogo: null,
            showPoweredBy: true,
            loadingCowebsiteLogo: null

        }
        ))
    }
    res.sendStatus(401)
})

//returns a list of all available wokas
app.get("/admin/api/woka/list", (req, res) => {
    // You receive the userId
    if (isAuthenticated(req.query.token)) {
        res.send(wokaList)
    }
    res.sendStatus(401)
})

// returns the information about a user and his rights when he tries to access a room
app.get("/admin/api/room/access", (req, res) => {
    if (isAuthenticated(req.query.token)) {
        console.debug("Receive access request with identifier:", req.query.userIdentifier)
        let characterLayers = req.query.characterLayers || []

        // Notice that we filter the textures based on the user selection (given on characterLayers)
        let textures = getAllTextures().filter(woka => characterLayers.indexOf(woka.id) !== -1)

        // make sure to preserve the texture order (given on characterLayers)
        textures.sort( (t1, t2) => characterLayers.indexOf(t1.id) - characterLayers.indexOf(t2.id) )

        let user_tag = dbSelection.isAdmin(req.query.userIdentifier) ? "admin" : "user"
        res.send(
            JSON.stringify({
                email: "test@test",
                userUuid: req.query.userIdentifier,
                tags: [user_tag],
                visitCardUrl: null,
                textures: textures,
                messages: [],
                anonymous: true    
            })
        ) 
    }
    res.sendStatus(401)
})

/**
 * Tags a Player as an admin
 * Requires playerUuid
 * 200 ok - if successfull
 * 500 bad request - on an error -> check logs!
 */
app.post('/admin/api/setAdmin', (req,res) => {
    if (isAuthenticated(req.query.token)) {
        let playerUUID = req.body.playerUUID
        if(dbInsert.setAdmin(playerUUID)) {
            res.sendStatus(200)
        } else {
            res.sendStatus(500)
        }
    }
    res.sendStatus(401)
})

/**
 * Remove a Player as an admin
 * Requires playerUuid
 * 200 ok - if successfull
 * 500 bad request - on an error -> check logs!
 */
app.post('/admin/api/removeAdmin', (req,res) => {
    if (isAuthenticated(req.query.token)) {
        let playerUUID = req.body.playerUUID
        if(dbDelete.removeAdmin(playerUUID)) {
            res.sendStatus(200)
        } else {
            res.sendStatus(500)
        }
    }
    res.sendStatus(401)
})

// port to start the app on
app.listen(80)