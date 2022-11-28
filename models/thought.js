const { ObjectId } = require('bson')
const { Schema, model } = require('mongoose')

const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true },
    createdAt: {
      date: Date,
      default: Date.now,
      get: (date) => timeSince(date)
    },
    user: { 
      _id: ObjectId,
      required: true 
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true,
    }
  }
)

const reactionSchema = new Schema(
  {
    reactionId: { 
      type: Schema.Types.ObjectId,
      default: ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      date: Date,
      default: Date.now,
      get: (date) => timeSince(date)
    },
  }
)

thoughtSchema.virtual('reactionCount')
  .get(function() {
    if (this.reactions) {
      return this.reactions.length
    }
  })

const Thought = model('thought', thoughtSchema)

module.exports = Thought