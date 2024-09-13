const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/create-file', (req, res) => {
  // Define the folder where the file will be created
  const folderPath = path.join(__dirname, 'files');

  // Ensure the folder exists
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  // Generate the filename with the current date-time
  const currentDatetime = new Date();
  const filename = currentDatetime.toISOString().replace(/[-:.T]/g, '_') + '.txt';
  const filePath = path.join(folderPath, filename);

  // Get the current timestamp as content
  const content = currentDatetime.toISOString();

  // Create and write to the file
  fs.writeFileSync(filePath, content);

  // Return a response
  res.json({
    message: 'File created successfully',
    file_path: filePath
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
