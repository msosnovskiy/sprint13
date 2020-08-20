const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /(^https?:\/\/)?[a-z0-9~_\-\.]{2,}\.[a-z]{1,9}[aA-zZ0-9~_\-\./?=&]+/.test(v);
      },
      message: (props) => `${props.value} некорректная ссылка`,
    },
  },
});

module.exports = mongoose.model('user', userSchema);
