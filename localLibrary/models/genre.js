var mongoose = require('mongoose');

var Schema = mongoose.Schema;

genreSchema = Schema({
    name: {type: String, min: 3, max: 100, required: true},    
});

// Virtual for genre's URL
genreSchema.virtual('url').get(function (){
    return '/catalog/genre/' + this._id;
});

// Export Model
module.exports = mongoose.model('Genre', genreSchema);