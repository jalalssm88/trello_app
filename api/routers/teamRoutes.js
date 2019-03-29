const express = require('express');
const router = express.Router();
const Team = require('../models/teamModel');

router.post('/', (req, res)=>{
    const teams = new Team({
        team:req.body.team
    })
    teams.save().then(result=>{
        console.log('submit data', result)
    }).catch(err=>{
        console.log(err)
    })
    res.status(201).json({
        message:'success',
        data:teams
    })
})


router.get('/', (req, res)=>{
    Team.find().exec().then(data=>{
        console.log('fetched data', data)
        res.status(200).json(data)
    }).catch(err=>{
        console.log(err)
    })
})

router.get('/:productID', (req, res, next)=> {
    const product_id = req.params.productID;
    Team.findById(product_id).exec().then(doc =>{
        console.log('doc', doc);
        res.status(200).json({doc})
    }).catch(error =>{
        console.log('error', error);
        res.status(505).json({error:error})
    }) 
})

module.exports = router;