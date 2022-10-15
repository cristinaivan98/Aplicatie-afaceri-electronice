
import mongoose from 'mongoose';
const produseSchema=mongoose.Schema({
    denumire:String,
    descriere:String,
    cantitate:Number,
    categorie:String,
    taguri:Array,
    imagine:String,
    stoc:Number
     
})
const comenziSchema=mongoose.Schema({
    dataCrearii:String,
    total:String,
    status:String,
    idClient:String,
    produse:[{type: produseSchema}],
    nrProduse:Number,
    total:Number,

     
})
var Comenzi=mongoose.model('Comenzi', comenziSchema)
export default Comenzi;