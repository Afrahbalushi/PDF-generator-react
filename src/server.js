const express = require('express');
const PDFDocument = require('pdfkit');

const app = express();
app.use(express.json());

app.post('/generate-pdf', (req, res) => {
  const { content } = req.body;
  const doc = new PDFDocument();
  doc.pipe(res);
  doc.fontSize(12).text(content);
  doc.end();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
