import express from 'express';
import ProductsController from './controllers/productController';
import UserController from './controllers/userController';
import OrderController from './controllers/orderController';
import LoginController from './controllers/loginController';
import loginMiddleware from './middlewares/loginMiddleware';
import ValidateJWT from './middlewares/authMiddleware';

const app = express();

const productController = new ProductsController();
const userController = new UserController();
const orderController = new OrderController();
const loginController = new LoginController();

app.use(express.json());

app.post('/products', productController.addProduct);
app.get('/products', productController.getAll);
app.post('/users', userController.addUser);
app.get('/orders', orderController.getAll);
app.post('/orders', ValidateJWT, orderController.addOrder);
app.post('/login', loginMiddleware, loginController.login);

export default app;