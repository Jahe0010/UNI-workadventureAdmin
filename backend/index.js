const express = require("express")
const bodyParser = require("body-parser");

const wokaList = require('./resources/wokaList.json');
const dbInsert = require("./db/dbInsert.js");
const dbSelection = require("./db/dbSelection.js");
const dbDelete = require("./db/dbDelete.js");
const utils = require("./shared/utils.js");

// initialize express app
const app = express();

// make use of bodyParser Plugin to parse incoming bodys
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * 401 - unauthorized
 * 200 - returns the map object (standard endpoint read more about it on workadventure)
 */
app.get("/admin/api/map", (req, res) => {
    if (utils.isAuthenticated(req.header('authorization'))) {
        // we extract the map url based on the incoming playUri
        return res.send(JSON.stringify({
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
    return res.sendStatus(401)
})

/**
 * 401 - unauthorized
 * 200 - returns a list of all available wokas (standard endpoint read more about it on workadventure)
 */
app.get("/admin/api/woka/list", (req, res) => {
    // You receive the userId
    if (utils.isAuthenticated(req.header('authorization'))) {
        return res.send(wokaList)
    }
    return res.sendStatus(401)
})

/**
 * 401 - unauthorized
 * 200 - returns all information about a user who wants to access a room(standard endpoint read more about it on workadventure)
 */
app.get("/admin/api/room/access", async function(req, res) {
    if (utils.isAuthenticated(req.header('authorization'))){
        console.debug("Receive access request with identifier:", req.query.userIdentifier)
        let characterLayers = req.query.characterLayers || []

        // Notice that we filter the textures based on the user selection (given on characterLayers)
        let textures = utils.getAllTextures(wokaList).filter(woka => characterLayers.indexOf(woka.id) !== -1)

        // make sure to preserve the texture order (given on characterLayers)
        textures.sort( (t1, t2) => characterLayers.indexOf(t1.id) - characterLayers.indexOf(t2.id) )

        // we check if a incoming user is an admin
        let isAdmin = await dbSelection.isAdmin(req.query.userIdentifier);
        let user_tag = isAdmin ? "admin" : "user"

        return res.send(
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
    return res.sendStatus(401)
})

/**
 * Tags a Player as an admin
 * Requires playerUuid
 * 200 ok and an optional additional success message - if successfull
 * 500 bad request - on an error -> check logs!
 * 401 unauthorized 
 */
app.post('/admin/api/setAdmin', async (req,res) => {
    if (utils.isAuthenticated(req.header('authorization'))){
        let playerUUID = req.body.playerUUID;
        let isAdmin = await dbSelection.isAdmin(playerUUID);
        if(isAdmin) {
            return res.send("Player has already the admin tag.");
        }

        let insertResponse = await dbInsert.setAdmin(playerUUID);

        if(insertResponse) {
            return res.sendStatus(200)
        } else {
            return res.sendStatus(500)
        }
    }
    return res.sendStatus(401)
})

/**
 * Remove a Player as an admin
 * Requires playerUuid
 * 200 ok - if successfull
 * 500 bad request - on an error -> check logs!
 * 401 unauthorized 
 */
app.delete('/admin/api/removeAdmin', async (req,res) => {
    if (utils.isAuthenticated(req.header('authorization'))){
        let playerUUID = req.body.playerUUID;
        let deleteResponse = await dbDelete.removeAdmin(playerUUID);

        if(deleteResponse) {
            return res.sendStatus(200)
        } else {
            return res.sendStatus(500)
        }
    }
    return res.sendStatus(401)
})

// port to start the app on
app.listen(80)