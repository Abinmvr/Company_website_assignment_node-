const multer  = require('multer');
const path =require('path');
console.log('mugg');
const storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, 'Resumes/pdf')
  },
  filename:(req, file, cb) =>{
    console.log('org',file.originalname)
    cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})
const upload = multer({storage: storage});

 
module.exports={upload};