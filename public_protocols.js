// public_protocols.js
// Read the Protocols CSV file
fetch('public_protocols.csv') // Read Protocols file
  .then(response => response.text())
  .then(data => {
    const lines = data.split('\n');
    const protocolList = document.getElementById('protocolList');

    // Skip the header row 
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      const cells = line.split(',');

      const url = cells[0].trim();
      const sentence = cells[1].trim();

      // Create the hyperlink element from Protocol URLs with Sentence being description
      const link = document.createElement('a');
      link.href = url;
      link.textContent = sentence;

      // Create the list item element and append the hyperlink
      const listItem = document.createElement('li');
      listItem.appendChild(link);

      // Append the list item to the protocolList
      protocolList.appendChild(listItem);
    }
  })
  .catch(error => {
    console.error('Error loading protocol data:', error);
  });
