const User = require('../models/user')


//register test
app.post("/register",async(req, res)=>{
      try {
        const{name,email,password}= req.bod;
        if (!(name&&email&&password)) {
            res.status(400).send("All input is required");
        }
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.status(409).send("User already exist. Please Login")
        }
        encryptedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email:email.toLowerCase(),
            password:encryptedPassword
        })
      }catch (err){
        console.log(err);
      }
})
