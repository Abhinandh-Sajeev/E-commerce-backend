const env = require('dotenv')
const express = require ('express');
const app = express();
const db = require ('./DBconnect/DBconnect');
// const cookieParser = require('cookie-parser');
const router = require('./Router/authentication')
const forget = require('./Router/forget')
const reset = require('./Router/reset')
const product = require('./Router/product');
const viewuser = require('./Router/admin-usermanagement');
const userproduct = require('./Router/userside-product')
const category = require('./Router/category')
const profile = require('./Router/profile')
const wishlist = require('./Router/wishlist')
const cart = require('./Router/cart')

db()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(cookieParser)
app.use(router)
app.use(forget)
app.use(reset)
app.use(product)
app.use(viewuser)
app.use(userproduct)
app.use(category)
app.use(profile)
app.use(wishlist)
app.use(cart)

env.config()
const PORT = process.env.port

app.listen(PORT,()=>{
    console.log("running");
    
})   