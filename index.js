const express = require('express'),
          app = express(),
     template = require('./views/template')
         path = require('path');


// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
//app.use('/media', express.static(path.resolve(__dirname, 'media')));

// start the server
app.listen(process.env.PORT || 3000);


let initialState = {
  count:0
}

//SSR function import
const ssr = require('./views/server');

// server rendered home page
app.get('/', (req, res) => {
  const { preloadedState, content}  = ssr(initialState)
  const response = template("Server Rendered Page", preloadedState, content)
  // res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});