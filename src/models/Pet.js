import { Schema, model } from "mongoose";

const petSchema = new Schema({
    googleId: { 
        type: String,
        required: true
    },
    displayName: { 
        type: String,
        required: true
    },
    firstName: { 
        type: String,
        required: true
    },
    lastName: { 
        type: String,
        required: true
    },
    image: { 
        type: String,
    },
    createdAt: { 
        type: Date,
        default: Date.now
    }
})

const Pet = model("Pet", petSchema)

export default Pet