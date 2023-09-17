// const {users, messages} = require("./data.js
let {transactions} = require("./data.js")

const express = require('express');
const app = express();
const port = 9000;

app.use(express.json())
 
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

// route: transactions
app.get('/transactions', (req,res) => {
    return res.json(Object.values(transactions))
})

app.get('/transaction/:transactionId', (req,res) => {
    return res.json(transactions.filter(transaction => transaction.id === parseInt(req.params.transactionId)))
})

app.post('/transactions', (req,res) => {
    const newId = transactions.reduce((acc,item,id)=> (item.id > acc)? item.id: acc ,0)
    const {type, category, amount} = req.body
    const newTransaction = {id:newId + 1, type, category, amount}
    transactions.push(newTransaction)
    console.log(newTransaction)

    // console.log(req.body)
    return res.send('created')
})

app.put('/users/:userId', (req,res) => {
    return res.send(`PUT HTTP method on user /${req.params.userId} resource`)
})

app.delete('/transaction/:transactionId', (req,res) => {
    transactions = 
        transactions.filter(transaction => transaction.id !== parseInt(req.params.transactionId))

    return res.send(`DELETED transaction with Id : ${req.params.transactionId}`)
})

// // route : messages
// app.get('/messages', (req, res) => {
//     return res.send(Object.values(messages))
// })

// app.get('/messages/:messageId', (req, res) => {
//     return res.send(messages[req.params.messageId])
// })

const handleHello = (req,res) => {
  res.send('hello world')
}

app.get('/hello', handleHello)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});