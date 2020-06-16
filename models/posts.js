const   mongoose = require('mongoose');

let PostSchema = new mongoose.Schema({
    author_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    category: String,
    image: String,
    content: String,
    date: Date,
    comments: 
    [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    tags:[],
    views:
    [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    length_price:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cost'
        },
    province: String,
    googlemap: String,
    openandclose: [],
    
})

module.exports = mongoose.model('Post', PostSchema);