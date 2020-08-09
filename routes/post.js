//demo file to try protected routing

const router = require('express').Router()
const verify = require('./verifyToken')

router.get('/', async (req, res) => {
    try {
        res.json({
            posts: {
                title: 'my first post ',
                description: 'hhelloo new'
            }
        })
    } catch (err) {
        console.log(err)
        res.status(400).send({ error: err })
    }

})

module.exports = router