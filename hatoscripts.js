fetch('scripts.csv')
  .then(response => response.text())
  .then(data => {
    const lines = data.split('\n').slice(1); // Remove header line
    lines.forEach(line => {
      const [url, listNo, program, name] = line.split(',');

      if (listNo.trim() === 'hatoscripts') {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = url.trim();
        a.textContent = name.trim();
        li.appendChild(a);

        if (program.trim().toLowerCase() === 'bash') {
          document.querySelector('#bashColumn ul').appendChild(li);
        } else if (program.trim().toLowerCase() === 'r') {
          document.querySelector('#rColumn ul').appendChild(li);
        } else if (programLower === 'python') {  // New check for Python
          document.querySelector('#pythonColumn ul').appendChild(li);
        } else {
          document.querySelector('#otherColumn ul').appendChild(li);
        }
      }
    });
  })
  .catch(error => console.error('Error fetching or parsing CSV:', error));
