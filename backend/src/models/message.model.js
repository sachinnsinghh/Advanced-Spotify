import mongoose, { mongo } from "mongoose";

const messageSchmea =  new mongoose.Schema({
    senderId:{
        type: String,
        required: true
    }, // CLERK USER ID
    receiveRId: {
        type: String,
        required: true
    },
    content : {
        type: String,
        required: true
    }
},{
    timestamps: true
})

export const Message = mongoose.model("Message", messageSchmea)