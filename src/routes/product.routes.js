const { Router } = require( 'express' ); //importamos el router de express 
const { createProduct, getProducts, updateProductByid, deleteProductByid, getProductById } = require('../controllers/product.controller');





const router = Router();                 //imvocamos el router de express

// definir las rutas para la entidad 'product'

//C: Create ->http://locahost:3000/apis/product/
router.post('/products/', createProduct) // [verifyToken, isModerator ]
//R: Read ->http://locahost:3000/apis/product/


router.get('/products/', getProducts);
router.get('/products/:id', getProductById);


//U: Update ->http://locahost:3000/apis/product/<espera-por-ID>
// router.put('/:id',updateProductByid)


router.patch('/products/:id',  updateProductByid) //verifyToken,
//D: Delete ->http://locahost:3000/apis/product/<espera-por-ID>
router.delete('/products/:id',deleteProductByid)//[verifyToken, isAdmin], 


module.exports = router;    //exportar todas las rutas disponibles para toda la aplicacion