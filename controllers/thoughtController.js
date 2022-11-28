const Thought = require('../models/thought')
const { ObjectId } = require('mongoose').Types;

const getThoughts = async (req, res) => {
  try {
    const allThoughts = await Thought.find()

    if (!allThoughts) {
      res.status(404).json({ message: `No thoughts found` })
    }

    res.status(200).json(allThoughts)
  } catch (err) {
    res.status(500).json(err)
  }
}

const getSingleThought = async (req, res) => {
  try {
    const singleThought = await Thought.findOne({ _id: req.params.id })

    if (!singleThought) {
      res.status(404).json({ message: `Cannot find thought by id: ${req.params.id}` })
    }

    res.status(200).json(singleThought)
  } catch (err) {
    res.status(500).json(err)
  }
}

const createThought = async (req, res) => {
  try {
    const newThought = await Thought.create(req.body)

    if (!req.body) {
      res.status(404).json({ message: 'Must include data for thought creation!'})
    }

    res.status(201).json(newThought)
  } catch (err) {
    res.status(500).json(err)
  }
}

const updateThought = async (req, res) => {
  try {
    const thoughtUpdate = await Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )

    if (!thoughtUpdate) {
      res.status(404).json({ message: 'Must include data for thought update'})
    }

    res.status(200).json({ message: `${req.params.id} updated!` })
  } catch (err) {
    res.status(500).json(err)
  }
}

const deleteThought = async (req, res) => {
  try {
    const deleteThought = await Thought.findOneAndDelete({ _id: req.params.id})

    if (!req.params.id) {
      res.status(404),json({ message: 'Must include id for thought selection!' })
    }

    res.status(200).json({ message: `${req.params.id} deleted!` })
  } catch (err) {
    res.status(500).json(err)
  }
}

const createReaction = async (req, res) => {
  try {
    const newReaction = await Thought.findOneAndUpdate({ _id: req.params.id }, { $push: { reactions: req.body } }, { new: true })

    if (!newReaction) {
      res.status(404).json({ message: 'Must include a body to update' })
    }

    res.status(201).json(newReaction)
  } catch (err) {
    res.status(500).json(err)
  }
}

const deleteReaction = async (req, res) => {
  try {
    const reactionDelete = await Thought.findOneAndUpdate({ _id: req.params.id }, { $pull: { reactions: { reactionId: ObjectId(req.params.id) } } }, { new: true })

    res.status(200).json({ message: `${req.params.id}`})
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = { getThoughts, getSingleThought, createThought, updateThought, deleteThought, createReaction, deleteReaction }