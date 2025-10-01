import mongoose, {Schema} from "mongoose";

const TagSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export const TagModel = mongoose.model('Tag', TagSchema);
