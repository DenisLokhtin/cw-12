const express = require('express');
const Image = require('../models/image');
const multer = require('multer');
const config = require('../config');
const {nanoid} = require('nanoid');
const path = require('path');
const auth = require('../middleware/auth');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const images = await Image.find().populate('author');
    res.send(images);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get('/author', auth, async (req, res) => {
  try {
    const images = await Image.find({author: req.user._id}).populate('author');
    res.send(images);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get('/author', auth, async (req, res) => {
  try {
    const images = await Image.find({author: req.params.id}).populate('author');
    res.send(images);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

const upload = multer({storage});

router.post('/', auth, upload.single('image'), async (req, res) => {
  console.log(req.body);
  const body = {
    title: req.body.title,
    author: req.user._id,
  };

  if (req.file) {
    body.image = 'uploads/' + req.file.filename;
  }

  const images = new Image(body);

  try {
    await images.save();
    res.send(images);
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
});

module.exports = router;