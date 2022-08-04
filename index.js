const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 1000;

//image pload
//app.use(fileUpload());
//parsing middleware
app.use(bodyParser.urlencoded({extended:true}))

//parse application.json
app.use(bodyParser.json());


//declare static file
app.use(express.static('public'));

//templating engine
const handlebars = exphbs.create({ extname: '.hbs', 
    helpers:{
        substr: function(len, context) {
            if ( context.length > len ) {
             return context.substring(0, len) + "...";
            } else {
             return context;
            }
        }
    }
});
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');


//routers
const routes = require('./server/routers')
app.use('/', routes)
///check if page not exist
app.use(function(req, res, next) {
    res.status(404);
    // respond with html page
    if (req.accepts('html')) {
      res.render('404', { url: req.url });
      return;
    }
  });

app.listen(port, () => console.log(`listening on port ${port}`));
//app.listen();