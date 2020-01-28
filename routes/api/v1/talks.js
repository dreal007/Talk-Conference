'use strict'

const express = require('express');
const router = express.Router();

const Controller = require('../../../controllers/talks');
const { checkSchema } = require('express-validator');
const { createTalkSchema, updateTalkSchema, deleteTalkSchema, getAllTalkSchema,getTalkSchema } = require('../../../middlewares/validators/talk')

router.post('/', checkSchema(createTalkSchema), Controller.createTalk);
router.delete('/:id', checkSchema(deleteTalkSchema), Controller.deleteOne);
router.get('/', checkSchema(getAllTalkSchema), Controller.getAllTalks)

module.exports = router;
