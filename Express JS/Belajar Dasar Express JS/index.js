const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})


app.get('/cats', (req, res) => {
    res.send('This is a list of cats')

})

app.get('/blog/:judul' , (req, res) => {
    res.send('Blog ' + req.params.judul)
})

app.get('/search', (req, res) => {
    // console.log(req.query)
    const {q} = req.query;
    if(!q) {
        res.send('Tidak ada query')
    }
    res.send('Hasil pencarian ' + q)
})

app.get('*', (req, res) => {
    res.send('Halaman Tidak ditemukan')
})

app.listen(8080, () => {
    console.log('Server running on port http://localhost:8080')
})