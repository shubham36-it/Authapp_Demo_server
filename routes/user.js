const express = require("express");
const router = express.Router();

const User = require("../models/User");

const {login, signup} = require("../Controllers/Auth");
const {auth, isStudent,isAdmin} = require("../middleware/auth");

router.post("/login", login);
router.post("/signup", signup);
//testing protected Routes for single middleware 

router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected routes for the student",
    });
});

// Protected rouutes 
router.get("/student",auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected routes for the student",
    });

});

router.get("/admin",auth,isAdmin,(req,res)=>
{
    res.json({
        success:true,
        message:"Welcome to the protected routes for the admin",
    });
});

// router.get("/getEmail" , auth, async (req,res) => {

//     try{
//         const id = req.user.id;
//         console.log("ID:" , id);
//         const user = await User.findById(id);

//         res.status(200).json({
//             success:true,
//             user:user,
//             message:'Welcome to the email route',
//         })
//     }
//     catch(error) {
//         res.status(500).json({
//             success:false,
//             error:error.message,
//             message:'Fatt gya code',
//         })
//     }

// });




module.exports = router;