module.exports = {
  index: function(req, res) {
    res.render('home/index');
  },
  cards: function(req, res) {
    res.render('home/cards');
  },
  blank: function(req, res) {
    res.render('home/blank');
  },
  login: function(req, res) {
    res.render('home/login');
  },
}