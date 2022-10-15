
import mongoose from 'mongoose';
const produseSchema=mongoose.Schema({
    denumire:String,
    descriere:String,
    categorie:String,
    imagine:String,
    editura:String,
    autor:String,
    stoc:Number,
    pret:Number
     
})
var Produse=mongoose.model('Produse', produseSchema)
export default Produse;
