"use strict"
var express = require('express')
var router = express.Router()
var hotels = require('../public/data/data')

router
.get('/', (req, res, next) => {
	res.status(200)
		.json({hotels:hotels})
})

.get('/id/:id', (req, res, next) => {
	if(!req.params.id){
		res.status(403)
			.json({
				error: true,
				message: 'Params empty'
			})
	}

	let _id = req.params.id.toString()
	let hotel = hotels.find((obj) =>{
		return obj.id === _id
	})

	res.status(200)
		.json({hotel:hotel})
})

.get('/filter', (req, res, next) => {
	let filteredHotels = hotels
	if(req.query.name){
		let _name = req.query.name
		filteredHotels = filteredHotels.filter(obj => {
			return obj.name.toLowerCase().includes(_name)
		})
	}

	if(req.query.stars){
		let _stars = req.query.stars
		if(_stars !== 'all'){
			filteredHotels = filteredHotels.filter(obj => {
				return obj.stars == _stars
			})
		}
	}
	
	res.status(200)
		.json({hotels:filteredHotels})

})

module.exports = router
