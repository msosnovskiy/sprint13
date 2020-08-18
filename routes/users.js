const router = require('express').Router();
const promisesFs = require('fs').promises;
const path = require('path');

const usersDirectory = path.join(__dirname, '../data/users.json');

router.get('/', (req, res) => {
  promisesFs.readFile(usersDirectory, { encoding: 'utf-8' })
    .then((data) => {
      const users = JSON.parse(data);
      if (!users) {
        res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
      }
      res.send(users);
    })
    .catch(() => {
      res.status(500).send({ message: 'Запрашиваемый ресурс не найден' });
    });
});

router.get('/:id', (req, res) => {
  promisesFs.readFile(usersDirectory, { encoding: 'utf-8' })
    .then((data) => {
      const users = JSON.parse(data);
      const currentUser = users.find((item) => item._id === req.params.id);
      if (!currentUser) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      res.send(currentUser);
    })
    .catch(() => {
      res.status(500).send({ message: 'Запрашиваемый ресурс не найден' });
    });
});

module.exports = router;
