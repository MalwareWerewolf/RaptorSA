'use strict';

const {google} = require('googleapis');
const customsearch = google.customsearch('v1');
const fs = require("fs");

var jsonSaveCS = __dirname + '/../jsonFiles/customSearch.json';
var googleFile = __dirname + '/../jsonFiles/googleResults.json';
var googleFileChangeVal = require(googleFile);

async function runSample (options) {
    const res = await customsearch.cse.list({
        cx: options.cx,
        q: options.q,
        auth: options.apiKey,
        num: 3
    });

    fs.writeFileSync(jsonSaveCS, JSON.stringify(res.data, null, 2));
    fs.readFile(jsonSaveCS, (err, data) => {  
        if (err) throw err;
        let searchQuery = JSON.parse(data);

        var nameToInsert = " ";
        var descriptionToInsert = " ";

        for (var i in searchQuery.items) {
            for(var j in searchQuery.items[i].pagemap.website){
                nameToInsert = searchQuery.items[i].pagemap.website[j].name;
                descriptionToInsert = searchQuery.items[i].pagemap.website[j].description;
                for(var k in googleFileChangeVal.items){    
                    googleFileChangeVal.items[k].urlTopic = nameToInsert;
                    googleFileChangeVal.items[k].urlDescription = descriptionToInsert;                          
                    fs.writeFile(googleFile, JSON.stringify(googleFileChangeVal, null, 2), function (err) {
                        if (err) return console.log(err);                       
                    });
                }
            }
        }
    });
}

module.exports = {
    runSample
};