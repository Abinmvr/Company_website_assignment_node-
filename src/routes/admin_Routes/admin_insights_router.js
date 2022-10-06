const express = require('express');
const router = express.Router();
const { get_insight_Controller,
        delete_insights_Controller,
        add_insights_Controller,
        get_insights_controller_ById,
        update_insights_Controller} =require('../../controllers/adminControllers/admin_insights_controller');

router.post("/addInsights",add_insights_Controller);
router.get("/insight",get_insight_Controller);
router.delete("/deleteinsights",delete_insights_Controller);
router.get("/getinsightsbyid", get_insights_controller_ById);
router.post("/editinsights",update_insights_Controller );

module.exports = router;