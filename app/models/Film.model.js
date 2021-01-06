let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let FilmSchema = new Schema({
    // _id:String,
    id:Number,
    name: String,
    link: String,
    author:String,
    show:Boolean,
    hl: Boolean
})

module.exports = mongoose.model('Task', FilmSchema);