const express = require("express");
const ExcelJS = require("exceljs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle user registration
app.post("/register", (req, res) => {
  const { email, password } = req.body;

  // Create or update the Excel file
  const workbook = new ExcelJS.Workbook();
  const filePath = "./record.xlsx";

  // Check if the file exists
  workbook.xlsx
    .readFile(filePath)
    .then(() => {
      // File exists, append data
      const worksheet = workbook.getWorksheet("Users");
      worksheet.addRow([worksheet.rowCount, email, password]);
      return workbook.xlsx.writeFile(filePath);
    })
    .catch(() => {
      // File does not exist, create a new one
      const worksheet = workbook.addWorksheet("Users");
      worksheet.addRow(["No", "Email", "Password"]);
      worksheet.addRow([1, email, password]);
      return workbook.xlsx.writeFile(filePath);
    })
    .then(() => {
      res.status(200).json({ message: "User registered successfully!" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Failed to register user" });
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});