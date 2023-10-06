const fs = require('fs');
const path = require('path');

const dataDirectory = 'data/';
const trackConfig = [];

// Read files in the data directory
fs.readdirSync(dataDirectory).forEach(file => {
  // Check if the file is a BigWig file
  if (file.endsWith('.bw')) {
    // Construct the full path to the file
    const filePath = path.join(dataDirectory, file);

    // Extract the file name without extension as the track name
    const trackName = path.basename(file, path.extname(file));

    // Add the track to the configuration
    trackConfig.push({
      name: trackName,
      url: filePath
    });
  }
});

// Output the generated track configuration
console.log(JSON.stringify(trackConfig, null, 2));

