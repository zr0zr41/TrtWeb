"const mongoose = require('mongoose');\n\nconst UserSchema = new mongoose.Schema({\n    username: String,\n    password: String\n});\n\nmodule.exports = mongoose.model('User', UserSchema);" 
