 const { default: mongoose } = require('mongoose');
const DB =process.env.DATABASE
mongoose.set('strictQuery', true);

 mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
 }).then(()=> console.log('DataBase connected')).catch((err)=>{
    console.log(err);
 })