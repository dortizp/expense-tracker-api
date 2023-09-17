const {users, messages} = require("./data.js")

const express = require('express');
const app = express();
const port = 3000;
 
  // route: root
app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method')
});

app.post('/', (req, res) => {
    return res.send('Received a POST HTTP method')
});

app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method')
});

app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method')
});

// route: users
app.get('/users', (req,res) => {
    return res.send(Object.values(users))
})

app.get('/users/:userId', (req,res) => {
    return res.send(users[req.params.userId])
})

app.post('/users', (req,res) => {
    return res.send('POST HTTP method on user resource') })

app.put('/users/:userId', (req,res) => {
    return res.send(`PUT HTTP method on user /${req.params.userId} resource`)
})

app.delete('/users/:userId', (req,res) => {
    return res.send(`DELETE HTTP method on user /${req.params.userId} resource`)
})

// route : messages
app.get('/messages', (req, res) => {
    return res.send(Object.values(messages))
})

app.get('/messages/:messageId', (req, res) => {
    return res.send(messages[req.params.messageId])
})

const handleHello = (req,res) => {
  res.send('hello world')
}

app.get('/hello', handleHello)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});