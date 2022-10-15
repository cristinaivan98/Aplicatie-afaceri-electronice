import mongoose from 'mongoose';
const produseSchema=mongoose.Schema({
    denumire:String,
    descriere:String,
    categorie:String,
    imagine:String,
    editura:String,
    autor:String,
    pret:Number
     
})
var Schema =mongoose.Schema;
const clientiSchema=mongoose.Schema({
    nume:{
        type:String,
        minLength:2
    },
    prenume:{
        type:String,
        minLength:2
    },
    email:{type:String,
        $regex: '/@/' },
    telefon:{
        type:String,
        minLength:6
        },
    adresa:String,
    parola:{
        type:String,
        minLength:2
    },
    cosCumparaturi:[{type: produseSchema}],
})
var Clienti=mongoose.model('Clienti', clientiSchema)
export default Clienti;