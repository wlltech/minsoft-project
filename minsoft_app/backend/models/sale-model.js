import mongoose from 'mongoose';
const { Schema } = mongoose;   
   
const saleSchema = new Schema({
    sellerId: {
        type: String,
        required: true,
    },
    sellerName: {
        type: String,
        required: true,
    },
    saleDate: {
        type: String,
        required: true,
    },
    clientId: {
        type: String,
        required: true,
    },
    clientName: {
        type: String,
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    saleStatus: {
        type: String,
        required: true,
    },
    unitPrice:{
        type: Number,
        required: true,
        },
    totalPrice:{
        type: Number,
        required: true,
    }
    }
, {
    versionKey: false
});

module.exports = mongoose.model('sales', saleSchema);

