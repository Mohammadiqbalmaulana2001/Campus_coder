const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/person_db')
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

const personScema = new mongoose.Schema({
    firstName: String,
    lastName: String,
})

personScema.virtual('fullName').get(function(){
    return `${this.firstName} ${this.lastName}`
})

personScema.pre('save', async function(){
    console.log('persiapan menyimpan data')
})

personScema.post('save', async function(){
    console.log('data berhasil di simpan')
})

const Person = mongoose.model('Person', personScema)

const person = new Person({
    firstName: 'Nohammad Iqbal',
    lastName: 'Maulana',
})

// console.log(person.fullName)

person.save().then(data => console.log(data)).catch(err => console.log(err))