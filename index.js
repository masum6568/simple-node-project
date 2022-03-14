// setup 1
const express = require('express')
const cors = require('cors')
// const express= require('express')
// setup 2
const app = express();
app.use(cors())
app.use(express.json());
// const app= express();
// setup 3
// const port = process.env.PORT || 5000;
const port = process.env.PORT || 5000;

// setup 4
app.get('/', (req, res) => {
    res.send('Wow. I am Excited to learn node and express with nodemon. automatic restart');
})
const users = [
    { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '01788888888' },
    { id: 1, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Soniya', email: 'Soniya@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Susmita', email: 'Susmita@gmail.com', phone: '01788888888' },

]

app.get('/users', (req, res) => {
    const search = req.query.search;
    /* use query parameter */
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else {

        res.send(users);
    }
})

/* app.Method */
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})
/* dynamic api */
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
    // console.log(req.params.id);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'apple'])
})




app.get('/fruits/mangos/fazli', (req, res) => {
    res.send('Yummy Yummy mojar but tok marka fazli')
})

// setup 5
app.listen(port, () => {
    console.log('Listening to port', port);
})

