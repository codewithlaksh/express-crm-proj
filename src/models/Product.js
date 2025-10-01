import mongoose, {Schema} from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ['Indoor', 'Outdoor']
    },
    description: {
        type: String,
        required: true
    },
    tags: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Tag'
        }
    ] 
}, {
    timestamps: true
});

export const ProductModel = mongoose.model('Product', ProductSchema);
