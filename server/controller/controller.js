let datas = require("../model/model");


exports.create= (req,res)=>{
    const chk=new datas({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone

    });
    chk.save().then(doc=>{
        console.log(doc)
        res.redirect("/form");
    })
}