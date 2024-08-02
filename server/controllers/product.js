const express = require('express');
const router = express.Router();
const { Product } = require('../models');

router.route('/')
  .get(async (req, res) => {
    try {
      const products = await Product.findAll();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  })
  .post(async (req, res) => {
    try {
      const newProduct = await Product.create(req.body);
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  })

router.route('/:id')
    .get(async (req, res) => {
        try {
            const {id} = req.params;
            const product = await Product.findByPk(id);
            res.status(202).json(product);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    })
    .put(async (req, res) => {
        try {
            const {id} = req.params;
            const product = await Product.findByPk(id);
            if (product) {
                await product.update(req.body);
                res.status(200).json(product);
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    })
    .delete(async (req, res) => {
        try {
            const {id} = req.params;
            const product = await Product.findByPk(id);
            if (product) {
                await product.destroy(req.body);
                res.status(200).json({ message: 'Product deleted successfully' });
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    })


module.exports = router;
