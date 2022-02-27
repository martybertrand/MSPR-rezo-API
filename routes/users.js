const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers')
const client = require('../config');

router.get('/', function (req, res) { userController.get(req, client, res)});

router.get('/:id', function (req, res) { userController.getId(req, client, res)});

router.post('/', function (req, res) { userController.insert(req, client, res)});

router.put('/:id', function (req, res) {userController.update(req, client, res)});

router.delete('/:id', function (req, res) {userController.remove(req, client, res)});

module.exports = router