var $ = Dom7;


// Init App
var app = new Framework7({
  name: 'App',
  id: 'br.mackenzie.lfs.App',
  root: '#app',
  theme: 'md',


  routes: [
    {
      path: '/about/',
      url: './pages/about.html',
    }, {
      path: '/menu/',
      componentUrl: './pages/menu.html'
    }, {
      path: '/grupo/',
      componentUrl: './pages/grupo.html'
    }
  ]
});

var mainView = app.views.create('.view-main');
