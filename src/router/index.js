import { Router } from "express"
const router= Router()

router.get('/', (req, res) => res.render('index',{title: 'Mi primer proyecto en NodeJS'}))
router.get('/about', (req, res) => res.render('about',{title:'Sobre Nosotros'}))
router.get('/contact', (req, res) => res.render('contact',{title: 'Contáctanos'}))
router.get('/catalogo',(req,res)=>res.render('catalogo',{title: 'Este es mi catalogo'}))

export default router