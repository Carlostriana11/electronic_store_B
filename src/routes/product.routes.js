const { Router } = require( 'express' ); //importamos el router de express 
const { createProduct, getProducts, updateProductByid, deleteProductByid, getProductById } = require('../controllers/product.controller');
const { verifyToken, isAdmin, isModerator } = require('../middlewares');




const router = Router();                 //imvocamos el router de express

// definir las rutas para la entidad 'product'

//C: Create ->http://locahost:3000/apis/product/
router.post('/', [verifyToken, isModerator], createProduct)
//R: Read ->http://locahost:3000/apis/product/


router.get('/', getProducts);
router.get('/:id', getProductById);


//U: Update ->http://locahost:3000/apis/product/<espera-por-ID>
// router.put('/:id',updateProductByid)


router.patch('/:id', verifyToken, updateProductByid)
//D: Delete ->http://locahost:3000/apis/product/<espera-por-ID>
router.delete('/:id',[verifyToken, isAdmin], deleteProductByid)


module.exports = router;    //exportar todas las rutas disponibles para toda la aplicacion