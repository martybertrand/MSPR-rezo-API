const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login.controllers')
const client = require('../config');

router.get('/', function (req, res) { loginController.get(req, client, res)});

router.get('/:id', function (req, res) { loginController.getId(req, client, res)});

router.post('/', function (req, res) { loginController.insert(req, client, res)});

router.put('/:id', function (req, res) {loginController.update(req, client, res)});

router.delete('/:id', function (req, res) { loginController.remove(req, client, res)});

module.exports = router