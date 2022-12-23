const express = require('express');
const cors = require('cors');
const config = require('../config');
const { cookieGen } = require('./assets/Cookie');
const app = express();

async function Server(){
let i = 0;

app.use(cors());
app.use(express.json());

const PORT = config.PORT || 8080;

app.post('/datadome', async (req, res) => {
    let data = req.body;
    if (data.domain) {
        let domain = data.domain;
        try{
        let cookie = await cookieGen(domain)
        res.status(200).send(cookie);
        i++
        console.log(`[${i}] Generated cookie for ${domain}`);
        } catch (err) {
            console.log(err);
            res.status(400).send('Failed To Generate Cookie For ' + domain);
        }
    } else {
        res.status(400).send('Bad Request - Missing Parameters');
    }
});
app.listen(PORT, () => console.log(`Datadome API running @ http://127.0.0.1:${PORT}/datadome !`))
}
module.exports = Server;