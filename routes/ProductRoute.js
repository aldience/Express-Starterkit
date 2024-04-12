import express from 'express'
import { getProducts, getProductsById, creteProducts, updateProducts, deleteProducts } from '../controller/Product.js'
import { verifyuser } from '../middleware/AuthUser.js'

const ProductRouter = express.Router()
ProductRouter.get('/produk', verifyuser, getProducts)
ProductRouter.get('/produk/:id', verifyuser, getProductsById)
ProductRouter.post('/produk', verifyuser, creteProducts)
ProductRouter.patch('/produk/:id', verifyuser, updateProducts)
ProductRouter.delete('/produk/:id', verifyuser, deleteProducts)

export default ProductRouter
