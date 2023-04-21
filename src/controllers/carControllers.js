// external dependencies

const boom = require('boom');

// get data models

const Car = require('../models/Car');

// get all cars
exports.getCars = async (req, reply) => {
    try {
        const cars = await Car.find()
        return cars 
    } catch (err) {
        throw boom.boomify(err)
    }
};

// get single car by ID
exports.getSingleCar = async (req, reply) => {
    try {
        const id = req.params.id
        const car = await Car.findById(id)
        return car
    } catch (err) {
        throw boom.boomify(err)
    }
}

// add a new car
exports.addCar = async (req, reply) => {
    try {
        const car = new Car(req.body)
        return car.save()
    } catch (err) {
        throw boom.boomify(err)
    }
}

// update existing car
exports.updateCar = async (req, reply) => {
    try {
        const id = req.params.id
        const car = req.body
        const { ...updateData } = car
        const update = await Car.findByIdAndUpdate(id, updateData, { new: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}

// delete car
exports.deleteCar = async (req, reply) => {
    try {
        const id = req.params.id
        const car = Car.findByIdAndDelete(id)
        return car
    } catch (err) {
        throw boom.boomify(err)
    }
}