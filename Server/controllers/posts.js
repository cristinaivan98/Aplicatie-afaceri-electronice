import express from 'express'
import Clienti from '../models/clienti.js';
import Produse from '../models/produse.js';
const router=express.Router();
export const editClientProdus2 = async (req, res) => {
  try {
      const client = await Clienti.findById({ _id: req.params.client })
      const prod = await Produse.findById({ _id: req.params.prod })
      if(client){
        if(prod){
          client.cosCumparaturi.pop(prod)
          await client.save();
          res.json(client)
        }
      }
          
      
  } catch (error) {
      res.status(409).json({ message: error.message })
  }
}
export const getClient= (async (req, res) => {
  try {
      const client= await Clienti.findOne({_id: req.params.id })
      res.send({ data: client})
  } catch (err) {
      console.log(err)
  }



})
export const editClientProdus = async (req, res) => {
  try {
      const client = await Clienti.findById({ _id: req.params.client })
      const prod = await Produse.findById({ _id: req.params.prod })
      if(client){
        if(prod){
          client.cosCumparaturi.push(prod)
          await client.save();
          res.json(client)
        }
      }
          
      
  } catch (error) {
      res.status(409).json({ message: error.message })
  }
}
export const getProduseDupaCateg = async (req, res) => {
  try {
      let produs = await Produse.find({ 'categorie': req.params.categorie });
      res.status(200).json(produs);

  } catch (err) {
      res.status(500).json({ message: "server error" })
  }
}
export const getProdusDupaDenumire= async (req, res) => {
  try {
      const userRegex = new RegExp(req.params.denumire, 'i')
      let produse = await Produse.find({ denumire: userRegex});
      res.status(200).json(produse);

  } catch (err) {
      res.status(500).json({ message: "server error" })
  }
}
export const deleteProdus= async (req, res) => {
  try {
      let prod= await Produse.deleteOne( { _id: req.params.id } )
      res.status(200).json(prod)

  } catch (err) {
      res.status(500).json({ message: "server error" })
  }
}
export const editProdus = async (req, res) => {
  try {
      const prod = await Produse.findById({ _id: req.params.id })
      if (prod) {
          prod.denumire = req.body.denumire;
          prod.descriere = req.body.descriere ;
          prod.autor=req.body.autor
          prod.categorie=req.body.categorie
          prod.stoc=req.body.stoc
          prod.pret=req.body.pret
          prod.editura=req.body.editura
          await prod.save();
          res.json(prod)
      }
  } catch (error) {
      res.status(409).json({ message: error.message })
  }
}
export const getProdusId= (async (req, res) => {
  try {
      const produs = await Produse.findOne({_id: req.params.id })
      res.send({ data: produs})
  } catch (err) {
      console.log(err)
  }



})
export const getProduse = async (req,res)=>{
  try{
    const produse= await Produse.find();
    res.status(200).json(produse)
  }
  catch(err){
    res.status(409).json({message:err.message})
  }
  

}
export const postClient= async (req,res)=>{

  try{
    await  Clienti.create({ nume:req.body.nume,
      prenume:req.body.prenume,
      email:req.body.email,
      telefon:req.body.telefon,
      parola:req.body.parola,
      adresa:req.body.adresa
    }
      
      )
    
         res.status(201).json("s a creat clientul cu succes")

  }catch(err){
          res.status(409).json({message:err.message})
  }
};
export const postProdus= async (req,res)=>{

  try{
    await  Produse.create({ 
      denumire:req.body.denumire,
    descriere:req.body.descriere,
    cantitate:req.body.cantitate,
    categorie:req.body.categorie,
    imagine:req.body.imagine,
    stoc:req.body.stoc,
    editura:req.body.editura,
    autor:req.body.autor,
    pret:req.body.pret
    }
      
      )
    
         res.status(201).json("s a produsul cu succes")

  }catch(err){
          res.status(409).json({message:err.message})
  }
};

export const loginStudent = async (req,res)=> {
    try {
        const client=await Clienti.findOne({email: req.body.email,parola:req.body.parola})
        if(client){
          res.status(201).json(client);
        }
        else{
          res.status(404).json({message:"Clientul nu a fost gasit"})
        }
    }catch(err){
      res.status(409).json({message:err.message})
    }
};

