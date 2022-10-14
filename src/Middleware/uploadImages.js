const multer  = require('multer');
const path =require('path');
const maxSize = 1*1024*1024;
const storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, 'Images')
  },
  filename:(req, file, cb) =>{
    // console.log('file3',file);
    cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})
const uploadImages = multer({storage: storage,limits:{fileSize: maxSize}});

 
module.exports={uploadImages};