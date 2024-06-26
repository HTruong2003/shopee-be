const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema(
    {
        categoryName: {
            type: String,
            require: true,
            unique: true,
        },
        slug: {
            type: String,
        },
        thumbnail: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Category', CategorySchema)
