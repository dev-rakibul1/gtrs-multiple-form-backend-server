// multerConfig.ts

import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Define the destination folder for storing uploaded files
    cb(null, './uploads/'); // You should create an 'uploads' folder in your project directory
  },
  filename: (req, file, cb) => {
    // Define the file name for the uploaded file
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

// eslint-disable-next-line object-shorthand
const upload = multer({ storage: storage });

export default upload;

// upload.fields([
//   { name: 'nameCard', maxCount: 12 },
//   { name: 'nationalID', maxCount: 12 },
//   { name: 'registrationDocs', maxCount: 12 },
//   { name: 'travelAgentLicense', maxCount: 12 },
// ])

//  // Access uploaded files from the 'files' object
//  const files = req.files as Record<string, Express.Multer.File[]>;

//  // Access uploaded files from the 'files' object
//  const nameCard = files['nameCard'] ? files['nameCard'][0] : '';
//  const nationalID = files['nationalID'] ? files['nationalID'][0] : '';
//  const registrationDocs = files['registrationDocs']
//    ? files['registrationDocs'][0]
//    : '';
//  const travelAgentLicense = files['travelAgentLicense']
//    ? files['travelAgentLicense'][0]
//    : '';

//  const formData = req.body;

//  // Combine form data and uploaded file data
//  const userData: IMultipleForm = {
//    ...formData,
//    nameCard,
//    nationalID,
//    registrationDocs,
//    travelAgentLicense,
//  };
