import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    idProduct: {
        type: String,
        required: true,
        unique: true
    },
    productName:{
        type: String,
        required: true,
    },
    unitPrice: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
}, {
    versionKey: false 
});

module.exports = mongoose.model('products', productSchema);