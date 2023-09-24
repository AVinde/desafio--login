import { Schema, model } from "mongoose"

const msgsSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    postTime: {
        type: Date,
        default: Date.now
    }
})

export const msgsModel = model('message', msgsSchema)