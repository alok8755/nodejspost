var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
const { stringify } = require('querystring');
var UserSchema = new mongoose.Schema({
 username: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
 
 password:{type:any, lowercase:true,uppercase:true, required:[true,"cant be blank"], match:[/^[a-zA-Z0-9]+$/, true],index:true},
 email: {type:String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
 image: {type:any, title:true, description:true , required: [true, "can't be blank"]}
}, 
{timestamps: true});
UserSchema.methods.validPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
     var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
     return this.hash === hash;
}

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});
module.exports = mongoose.model('User', userSchema);