const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    //   res.send('Hello World!')
    res.render('states')
})

app.get('/:state_id', (req, res) => {
    // res.send('Hello World!' + req.params.state_id)
    res.render('districts', { state_id: req.params.state_id })
})

app.get('/:state_id/:district_id', (req, res) => {

    res.render('slots', { district_id: req.params.district_id, state_id: req.params.state_id })
})




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})