const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')
const express = require('express');

const app = express();
app.set('views' , path.join(__dirname , 'views'));
app.set('view engine' , 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const comments = [
    {
        id: uuidv4() ,
        username: 'john',
        text: "hey how are you today" 
    },
    {
        id: uuidv4() ,
        username: 'susan',
        text: "i have a question" 
    },
    {
        id: uuidv4() ,
        username: 'anna',
        text: "but i am not sure"
    },
    {
        id: uuidv4() ,
        username: 'ica',
        text: "why not sure"
    },
    {
        id: uuidv4() ,
        username: 'susan',
        text: "who knows what to do with you today"
    }
]

app.get('/comments' , (req , res) => {
    res.render('comments/index', {comments});
})

app.get('/comments/create', (req , res) => {
    res.render('comments/create');
})

app.post('/comments' , (req , res) => {
    const {username , text} = req.body
    comments.push({username , text , id: uuidv4()});
    res.redirect('/comments');
})

app.get('/comments/:id' , (req , res) => {
    const {id} = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/show' , {comment});
})

app.patch('/comments/:id' , (req , res) => {
    const {id} = req.params
    const newcomment = req.body.text
    const formcomment = comments.find(c => c.id === id)
    formcomment.text = newcomment
    res.redirect('/comments');
})

app.get('/comments/:id/edit' , (req , res) => {
    const {id} = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit' , {comment});
})

app.delete('/comments/:id' , (req , res) => {
    const {id} = req.params
    comments = comments.filter(c => c.id !== id)
    res.redirect('/comments');
})

app.get('/user' , (req , res) => {
    res.send('response get from express server');
})

app.post('/user' , (req , res) => {
    const {name, qty } = req.body
    res.send(`response post name :${name} , qty : ${qty}` );
})

app.listen(8080 , () => console.log('listening on port http://localhost:8080'));