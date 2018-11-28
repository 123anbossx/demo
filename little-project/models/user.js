var mongoose=require('mongoose');
var Schema= mongoose.Schema;
var userSchema=new Schema({
    username:{
        type:'string',
        unique:true
    },
    password:{
        type:'string'
    }
});
module.exports=mongoose.model('user',userSchema);