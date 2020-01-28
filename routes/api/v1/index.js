const express = require('express');
const router = express.Router();
const TalkRoutes = require('./talks');
const cors = require('cors');


router.use(cors({
  origin: '*',
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mylaw Confrence Talk System APIs Version 1' });
});

router.use('/talks', TalkRoutes);

module.exports = router;
