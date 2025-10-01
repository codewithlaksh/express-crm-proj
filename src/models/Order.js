import mongoose, {Schema} from "mongoose";

const OrderSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    },
    status: {
        type: String,
        enum: ['Pending', 'Out for delivery', 'Delivered']
    },
    total: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

export const OrderModel = mongoose.model('Order', OrderSchema);
