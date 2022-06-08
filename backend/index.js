const express = require("express")
const app = express()
const wokaList = require('./resources/wokaList.json')

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

//returns the map object. this includes the url of the map that has to be loaded
app.get("/admin/api/map", (req, res) => {
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
})

//returns a list of all available wokas
app.get("/admin/api/woka/list", (req, res) => {
    // You receive the userId 
    res.send(wokaList)
})

// returns the information about a user and his rights when he tries to access a room
app.get("/admin/api/room/access", (req, res) => {
    console.debug("Receive access request with parameters:", req.query)
    let characterLayers = req.query.characterLayers || []

    // Notice that we filter the textures based on the user selection (given on characterLayers)
    let textures = getAllTextures().filter(woka => characterLayers.indexOf(woka.id) !== -1)

    // make sure to preserve the texture order (given on characterLayers)
    textures.sort( (t1, t2) => characterLayers.indexOf(t1.id) - characterLayers.indexOf(t2.id) )

    let user_tag = "user"
    res.send(
        JSON.stringify({
            email: "user@user",
            userUuid: req.query.userIdentifier,
            tags: [user_tag],
            visitCardUrl: null,
            textures: textures,
            messages: [],
            anonymous: true    
        })
    )
})


app.get("/admin/*", (req, res) => {
    console.debug("Request not handled:", req.url)
    console.debug(req.method)
    console.debug(req.query)
    res.send("{}")
})

// port to start the app on
app.listen(80)