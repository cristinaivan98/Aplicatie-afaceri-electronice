import express from 'express'
import { loginStudent,postClient,postProdus,getProduse,getProdusId,
 editProdus, deleteProdus,getProdusDupaDenumire,getProduseDupaCateg,editClientProdus,getClient} from '../controllers/posts.js'
const router=express.Router();
router.get('/getProduseCateg/:categorie',getProduseDupaCateg);
router.patch('/editProdus/:id',editProdus);
router.patch('/editClientProdus/:client&:prod',editClientProdus);
router.patch('/editClientProdus2/:client&:prod',editClientProdus);
router.get('/getProdusId/:id',getProdusId);
router.get('/getClient/:id',getClient);
router.get('/getProduseDenumire/:denumire',getProdusDupaDenumire);
router.delete('/deleteProdus/:id',deleteProdus);
router.get('/getProduse',getProduse);
router.post('/postClient',postClient);
router.post('/postProdus',postProdus);
router.post('/loginStudent',loginStudent);

export default router;