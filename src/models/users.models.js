import { Schema, model } from "mongoose"
import  paginate  from "mongoose-paginate-v2"

const userSchema = Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
        index: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        default: 'user'
    }
})

userSchema.plugin(paginate)

export const userModel = model('users', userSchema)