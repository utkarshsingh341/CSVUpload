# CSV_Upload
CSV_Upload is a user-friendly web application designed for uploading and parsing CSV files. Developed using Node.js and Express, it offers a straightforward interface to facilitate seamless management of CSV data.

- Git Repository link: https://github.com/utkarshsingh341/CSVUpload
- Video link: https://youtu.be/7wZOtAADtw0
- Hosted URL: https://csv-upload-d92y.onrender.com/

## Installation
To install CSV_Upload, please follow these steps:

Clone this repository using the following command:
```
$ git clone (https://github.com/utkarshsingh341/CSVUpload.git)
```
Install the required dependencies using the following command:
```
$ npm install 
```
Start the application using the following command:
```
$ npm start 
```
Open the application in your web browser by visiting the following URL:
```
$ http://localhost:8000 
```

## Features
* CSV file upload: Users can upload CSV files with a simple web form.
* CSV parsing: The application parses the CSV data and displays it in a table.
* Searching: Users can search data in the table.

## Folder Structure
```
CSV_Upload/
|── |assets/
│   |      ├── css/
│   │      |     ├── styles.css
│   |      ├── js/
│   |            ├── script.js
│   ├── uploads/
│   ├── index.html
|   |
├── routes/
│   ├── csvRoutes.js
|   |
├── controllers/
│   ├── csvController.js
|   |
├── models/
│   ├── csvModel.js
|   |
├── .gitignore
├── package.json
├── README.md

