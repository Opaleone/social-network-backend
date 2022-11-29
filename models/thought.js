const { ObjectId } = require('bson')
const { Schema, model } = require('mongoose')

const date = new Date().toLocaleDateString()

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
      type: String,
      default: date,
      get: (date) => timeSince(date)
    },
  }
)

const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true },
    createdAt: {
      type: String,
      default: date,
      get: (date) => timeSince(date)
    },
    user: { 
      type: Schema.Types.ObjectId,
      required: true,
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true,
    }
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