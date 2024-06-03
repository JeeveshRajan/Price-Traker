import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
    url:{type: 'string', required: true},
    currency:{type: 'string', required: true},
    image:{type: 'string', required: true},
    title:{type: 'string', required: true},
    currentPrice:{type: 'Number', required: true},
    originalPrice:{type: 'Number', required: true},
    priceHistory:[
        {
        price:{type: 'number', required: true},
        date:{type:'Date', default:Date.now()}
    }
    
],
lowestPrice:{type:'number'},
highestPrice:{type:'number'},
averagePrice:{type:'number'},
discountRate:{type:'number'},
category: {type:'string'},
review:{type:'number'},
isOutOfStock:{type:'boolean', default:false},
users:[
    {
        email:{type: 'string', required: true}
    }
],default:[],
},{timestamps:true});

const Product= mongoose.models.Product || mongoose.model('Product',productSchema);
export default Product;