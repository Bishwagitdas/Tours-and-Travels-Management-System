import express from "express"
import { 
    createTour,
    updateTour,
    deleteTour,
   

 } from "./../controllers/tourController.js"



const router = express.Router();

//create new tour
router.post("/", createTour);
//update tour
router.put("/:id", updateTour);
//delete tour
router.delete("/:id", deleteTour);
// //getSingle tour
// router.get("/:id", geSingleTour);
// //getAll tour
// router.get("/", getAllTour);

export default router;