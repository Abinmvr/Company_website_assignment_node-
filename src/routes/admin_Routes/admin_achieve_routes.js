const express = require('express');
const router = express.Router();
const { get_achievements_Controller,
        add_achieve_Controller,
        delete_achieve_Controller,
        get_achievements_controller_ById,
        update_achieve_Controller } = require('../../controllers/adminControllers/admin_achieve_controller');

router.get("/achieve", get_achievements_Controller);
router.get("/getachievebyid", get_achievements_controller_ById);
router.post("/addachieve",add_achieve_Controller);
router.delete("/deleteachieve", delete_achieve_Controller);
router.post("/editachieve",update_achieve_Controller );
module.exports = router;