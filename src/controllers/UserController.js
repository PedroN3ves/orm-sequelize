const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.findAll({ raw: true });

    return res.json(users);
  },

  async store(req, res) {
    const { name, email } = req.body;

    const user = await User.create({ name, email });
    return res.json(user);
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await User.update({ name, email }, { where: { id } });

    return res.json(user);
  },
};
