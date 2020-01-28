const express = require('express');
const router = express.Router();
const v1 = require('./v1')
const cors = require('cors')


router.use(cors({
  origin : '*',
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mylaw Confrence Talk APIs' });
});

router.use('/v1', v1);

module.exports = router;
