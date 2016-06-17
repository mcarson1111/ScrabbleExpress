// function Controller() {
//   function index(req, res, next) {
//     res.render('index', { title: 'Bella' });
//   };
// };
var IndexController = {
  index: function(req, res, next) {
    res.render('index', { title: 'Bella' });
  }
};
module.exports = IndexController
