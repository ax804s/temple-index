const fs = require("fs");
const path = require("path");

const inputFile = path.join(__dirname, "../data/temples.json");
const outputFile = path.join(
  __dirname,
  "../data/generated/temple-index.json"
);

// Read temples.json
const data = JSON.parse(fs.readFileSync(inputFile, "utf8"));

const index = {};

// Traverse the JSON structure
data.continents.forEach((continent) => {

  continent.countries.forEach((country) => {

    country.regions.forEach((region) => {

      region.temples.forEach((temple) => {

        index[temple.id] = {
          name: temple.name,
          continent: continent.name,
          country: country.name,
          region: region.name,
          path: `/temples/${temple.id}`
        };

      });

    });

  });

});


// Write generated file
fs.writeFileSync(
  outputFile,
  JSON.stringify(index, null, 2)
);

console.log("Temple index generated successfully.");
