const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'это поле является обязательным для заполения'],
    minlength: [2, 'минимальное количество символов - 2'],
    maxlength: [30, 'максимальное количество символов - 30'],
  },
  link: {
    type: String,
    required: [true, 'это поле является обязательным для заполения'],
    validate: {
      validator(v) {
        return /(^https?:\/\/)?[a-z0-9~_\-.]{2,}\.[a-z]{1,9}[aA-zZ0-9~_\-./?=&]+/.test(v);
      },
      message: 'передана некорректная ссылка',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'это поле является обязательным для заполения'],
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    default: [],
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
