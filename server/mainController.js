var data = require('./data')

var userInfo = data.userInfo
//home page
exports.home = (req, res) => {

    var projectz = data.projects;
      
    res.render('home',{title:"Richard Mlimila he is the web developer. design and create high functional website within yor budget"});
               
}






