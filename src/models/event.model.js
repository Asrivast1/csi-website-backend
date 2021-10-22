import { model, Schema, Document, Types } from 'mongoose';

const mongoose = require("mongoose")

const photoschema = mongoose.Schema(
    {
        name: String,
        desc: String,
        img:{
            data:Buffer,
            contentType:String,
        }
    });

const Status = Object.freeze(
    {
        Active: "live",
        Other : "completed"
    });

const eventSchema = mongoose.Schema({
    user:[{
        type: ObjectId,
        ref: "User",
        unique:true,
    }],
    name:[{
        type: String,
        required:true,
        trim:true,
        maxlength:50,
    }],
    registration:[{
        type: Date,
        required : true,
    }],
    registrationEnd:[{
        type: Date,
        required : true,
    }],
    banner :[{
        type: String,
        required :true,
    }],
    description :[{
        type : String,
        required :true,
        default : "Event Conducted by CSI DYPIEMR",
        maxlength: 1000,
    }],
    formlink: [{
        type : String,
    }],
    photo : [photoschema],
    status:{
        type: String,
        required:true,
        enum: Object.values(Status),
    },
});

Object.assign(eventSchema.statics, {
    Status,
});

const Event = mongoose.model('Events', eventSchema);

module.exports = Events;