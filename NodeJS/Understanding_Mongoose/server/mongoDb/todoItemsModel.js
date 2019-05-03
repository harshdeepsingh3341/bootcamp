module.exports = (mongoose) => {
    return new mongoose.Schema({
        todo_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        todo: {
            type: String,
            required: true
        },
        isChecked: {
            type: Boolean,
            required: true,
            default: false
        }
    })
};