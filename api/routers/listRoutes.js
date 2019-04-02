const express = require('express');
const router = express.Router();
const List = require('../models/listModel');

router.post('/', (req, res)=>{
    const list = new List({
        board_list:req.body.board_list
    })
    list.save().then(result=>{
        console.log('submit data', result)
    }).catch(err=>{
        console.log(err)
    })
    res.status(201).json({
        message:'success',
        data:list
    })
})

router.get('/', (req, res)=>{
    List.find().exec().then(data=>{
        console.log('fetched data', data)
        res.status(200).json(data)
    }).catch(err=>{
        console.log(err)
    })
})

// router.delete('/:productID', (req, res, next)=> {
//     const product_id = req.params.productID;
//     Board.remove({_id:product_id}).exec().then(doc =>{
//         console.log('doc', doc);
//         res.status(200).json({doc})
//     }).catch(error =>{
//         console.log('error', error);
//         res.status(505).json({error:error})
//     })
    
// })

// router.get('/:productID', (req, res, next)=> {
//     const product_id = req.params.productID;
//     Board.findById(product_id).exec().then(doc =>{
//         console.log('doc', doc);
//         res.status(200).json({doc})
//     }).catch(error =>{
//         console.log('error', error);
//         res.status(505).json({error:error})
//     }) 
// })

module.exports = router;