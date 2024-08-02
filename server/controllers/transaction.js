const express = require('express');
const router = express.Router();
const { Transaction } = require('../models');
const { Product } = require('../models');

router.route('/')
  .get(async (req, res) => {
    try {
      const transactions = await Transaction.findAll();
      res.status(200).json(transactions);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { product_ID } = req.body;
      const product = await Product.findByPk(product_ID);
      if(product) {
        const newTransaction = await Transaction.create(req.body);
        res.status(201).json(newTransaction);
      } else {
        res.status(404).json({message: "product does not exist"});
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  })

router.route('/:id')
    .get(async (req, res) => {
        try {
            const {id} = req.params;
            const transaction = await Transaction.findByPk(id);
            res.status(202).json(transaction);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    })
    .put(async (req, res) => {
        try {
            const {id} = req.params;
            const transaction = await Transaction.findByPk(id);
            if (transaction) {
                const { product_ID } = req.body;
                const product = await Product.findByPk(product_ID);
                if(product) {
                    await transaction.update(req.body);
                    res.status(200).json(transaction);
                } else {
                    res.status(404).json({message: "product does not exist"});
                }
            } else {
                res.status(404).json({ error: 'Transaction not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    })
    .delete(async (req, res) => {
        try {
            const {id} = req.params;
            const transaction = await Transaction.findByPk(id);
            if (transaction) {
                await transaction.destroy(req.body);
                res.status(200).json({ message: 'Transaction deleted successfully' });
            } else {
                res.status(404).json({ error: 'Transaction not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    })


module.exports = router;