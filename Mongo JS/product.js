const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/product_db')
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


const ProduvtSchema = mongoose.Schema({
		name: {
            type: String,
            required: true
        },
		brand: {
            type: String,
            required: true
        },
		price: {
            type: Number,
            required: true,
            min:0
        },
		color: {
            type: String,
            required: true
        },
		size: [{
            type: String,
            required: true
        }],
		description: {
            type: String,
            required: true,
            maxLength: 150
        },
		condition: {
            type: String,
            enum: ['baru' , 'bekas'],
            default: 'baru'
        },
		stock: {
            type: Number,
            required: true,
            min: 0
            
        },
		"availability": {
			online: {
                type: Boolean,
                required: true
            },
            offline: {
                type: Boolean,
                required: true
            }
        }
})

const Product = mongoose.model('Product', ProduvtSchema)

const tshirt = new Product({
		"name": "Kemeja Flanel",
		"brand": "Hollister",
		"price": 750000,
		"color": "biru muda",
		"size": ["S", "M", "L"],
		"description": "Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
		"condition": "baru",
		"stock": 25,
		"availability": {
			"online": true,
			"offline": true
		}   
})

tshirt.save().then(data => console.log(data)).catch(err => console.log(err))