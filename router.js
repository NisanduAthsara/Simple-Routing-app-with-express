const express = require('express')
const router = express.Router()
let accounts = require('./database')

//GET
router.get('/accounts', (req, res) => {
    res.json({ userData: accounts })
})

//POST
router.post('/accounts', (req, res) => {
    const incomingAcc = req.body
    accounts.push(incomingAcc)
    res.send(accounts)
})

router.get('/accounts/:id', (req, res) => {
    const accId = Number(req.params.id)
    const getAccount = accounts.find((account) => account.id === accId)

    if (getAccount) {
        res.json({ userData: getAccount })
    } else {
        res.status(500).send('User Not Found')
    }
})

//PUT
router.put('/accounts/:id', (req, res) => {
    const accountId = Number(req.params.id)
    const body = req.body
    const account = accounts.find((account) => account.id === accountId)
    const index = accounts.indexOf(account)

    if (!account) {
        res.status(500).send('Account Not Found...!')
    } else {
        const UpdatedAcc = { ...account, ...body }     //for combine these two objects
        accounts[index] = UpdatedAcc
        res.json(UpdatedAcc)
    }
})

//DELETE
router.delete('/accounts/:id', (req, res) => {
    const accountId = Number(req.params.id)
    const newAccount = accounts.filter((account) => account.id != accountId)    //for get the accounts which id's are not equal to request id

    if (!newAccount) {
        res.send('Account Not Found').status(500)
    } else {
        accounts = newAccount
        res.send(accounts)
    }
})

module.exports = router