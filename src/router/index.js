import { Router } from "express"
const router= Router()

router.get('/', (req, res) => {
    // Array de imágenes
    const images = [
        { src: 'img/image1.png', alt: 'Imagen 1' },
        { src: 'img/image2.png', alt: 'Imagen 2' },
        { src: 'img/image3.png', alt: 'Imagen 3' }
    ];

    // Renderizamos la vista y enviamos las imágenes
    res.render('index', {
        title: 'Computer Gamer',
        images: images
    });
})

router.get('/about', (req, res) => res.render('about',{title:'Sobre Nosotros'}))
router.get('/contact', (req, res) => res.render('contact',{title: 'Contáctanos'}))
router.get('/catalogo',(req,res)=>res.render('catalogo',{title: 'Catalogo'}))

export default router