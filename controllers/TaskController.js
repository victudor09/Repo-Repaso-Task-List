const Task = require('../models/Task')
require('dotenv').config()


const TaskController = {
    async create(req, res) {
        try {
            const task = await Task.create(req.body)
            res.status(201).send(task)
        } catch (error) {
            res.status(400).send({ message: 'error al enviar la task', error})
        }
        
    },

    async getAll(req, res) {
        try {
            const tasks = await Task.find()
            res.status(200).send(tasks)
        } catch (error) {
            res.status(500).send({ message: 'error al enviar la task', error})
        }
    },

    async getById(req, res){
        try {
            const task = await Task.findById(req.params._id)
            res.send(task)
        } catch (error){
            console.error(error)

        }
    },

    async update (req, res){
        try {
            //const updateCompleted = { ...req.body.completed }
            
            //PARA QUE CAMBIE TRUE FALSE CADA VEZ QUE MANDE EL SEND EN POSTMAN
            const paramsId = req.params._id
            const taskUpdated = await Task.findById(paramsId)

            const task = await Task.findByIdAndUpdate(
                paramsId,
                {completed: !taskUpdated.completed},
                { new: true }
            )
            if (!task) {
                return res
                .status(400)
                .send( {message: 'Task no encontrada con ese id'} )
            }
            res.status(200).send({ message: 'Task completada', task })
        } catch (error){  res.status(500).send({ message: 'error al completar la task', error}) }
    },

    async updateTitle(req, res) {
        try {
            const taskTitle = await Task.findByIdAndUpdate(
                req.params._id,
                {title: req.body.title}, //HAY QUE PASARLO COMO OBJETO
                {new: true}
            )
            res.send({message: 'task title actualizado correctamente', taskTitle})
        } catch (error) {
            res.send({message: 'error al actualizar el título'})
        }
    },

    async delete(req, res){
        try {
            const task = await 
            Task.findByIdAndDelete(req.params._id)
            res.status(204).send({ task, message: 'Task eliminada' })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'problema al intentar eliminar task' })
        }
    }

}   

module.exports = TaskController