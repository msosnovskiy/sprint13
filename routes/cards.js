const router = require('express').Router();
// const promisesFs = require('fs').promises;
// const path = require('path');

const { getCards, createCard, removeCard } = require('../controllers/cards');

// router.get('/', (req, res) => {
//   promisesFs.readFile((path.join(__dirname, '../data/cards.json')), { encoding: 'utf-8' })
//     .then((data) => {
//       const cards = JSON.parse(data);
//       if (!cards) {
//         res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
//         return;
//       }
//       res.send(cards);
//     })
//     .catch(() => {
//       res.status(500).send({ message: 'Запрашиваемый ресурс не найден' });
//     });
// });

router.get('/', getCards);

router.post('/', createCard);

router.delete('/:cardId', removeCard);

module.exports = router;
