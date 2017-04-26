'use strict'

const express = require('express')
const router = express.Router()
const sessionRouting = require('./routingFunctions.js')


////////// Main Routes //////////
router.get('/', sessionRouting.showLogin)
// router.post('/', checkPostSource(),sessionRouting.authenticateUser)
router.post('/', sessionRouting.authenticateUser())
router.delete('/', sessionRouting.endSession)


function checkPostSource(source){
  return (req,res,next) => {
    if(source === 'login'){
      next('login')
    }
    next('register')
  }
}


module.exports = router
