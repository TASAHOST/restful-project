const User = require('../models/user')

const Usercontroller = {

register: async (req, res) =>{
  try {
    const{name,email,password}= req.body;
    if (!(name&&email&&password)) {
        res.status(400).send("All input is required");
    }
    const oldUser = await User.findOne({ email });

    if (oldUser) {
        return res.status(409).send("User already exist. Please Login")
    }

    const user = await User.create({
        name,
        email,
        password
    });
    res.json(user);
  }catch (err){
    console.log(err);
  }
}


}

module.exports = Usercontroller;