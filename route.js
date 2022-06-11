var express=require('express');
var router=express.Router();
var Movie=require('./Model/Movies');


//fetching data


router.get('/movies',async(req,res)=>
{
    const iMovie=await Movie.find();
    res.send(iMovie);
})

router.post('/movies',async(req,res)=>{
    const iMovie=new Movie({
        name:req.body.name,
        rating:req.body.rating
    })
    console.log(body.name);
    await iMovie.save((err,msg)=>
    {
        if(err)
        {
            res.send(500).json({
                "error":err
            });
        }
        else{
            res.send(200).json({
                "msg":msg
            });
        }
    });
})
module.exports=router;