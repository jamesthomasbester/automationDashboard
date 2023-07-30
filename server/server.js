const express = require('express')
const fs = require('fs')
const cors = require('cors')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
    origin: '*'
}))

app.get('/api', (req, res) => {
    const read = fs.readFileSync('./dataStore/dump.json')
    const response = JSON.parse(read);
    res.send(response)
})

setInterval(() => {
    const read = fs.readFileSync('./dataStore/dump.json')
    fetch("http://192.168.0.15/api").then(res => {
        return res.json()
    }).then((json) => {
        const date = new Date()
        json.time = date
        const ReturnData = JSON.parse(read)
        ReturnData["HistoricalData"].push(json)
        fs.writeFile("./dataStore/dump.json", JSON.stringify(ReturnData), (err) => {
            if(err){
                console.log(err)
            }
            console.log(fs.readFileSync('./dataStore/dump.json', 'utf-8'))
        })
    })

}, 60000)

app.listen(5000, () => {
    console.log(`server running on http://localhost:5000`)
})