require('dotenv').config();
const wokaList = require('../resources/wokaList.json');

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
        return ((token == "Bearer " + adminPW) || (token == adminPW));
    }

    return false;
}

module.exports = {
    getAllTextures,
    isAuthenticated
}