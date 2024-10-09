import { Router } from "express"
const router= Router()

router.get('/', (req, res) => res.render('index',{title: 'Computer Gamer'}))
router.get('/about', (req, res) => res.render('about',{title:'Sobre Nosotros'}))
router.get('/contact', (req, res) => res.render('contact',{title: 'Contáctanos'}))
router.get('/catalogo',(req,res)=>res.render('catalogo',{title: 'Catalogo'}))

export default router