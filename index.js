const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const folderPath = path.join(__dirname, "textdir");

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

app.post("/make-file", (req, res) => {
  const timestamp = new Date().toISOString();
  const filename = `${timestamp.replace(/:/g, "-")}.txt`;
  const content = timestamp;

  fs.writeFile(path.join(folderPath, filename), content, (err) => {
    if (err) {
      return res.status(500).send("Error writing file");
    }
    res.send(`File ${filename} created successfully`);
  });
});

app.get("/list-files", (req, res) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      return res.status(500).send("Error reading files");
    }

    const fileContents = files.map((file) => {
      const filePath = path.join(folderPath, file);
      const content = fs.readFileSync(filePath, "utf8");
      return { fileName: file, content: content };
    });

    res.send(fileContents);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
