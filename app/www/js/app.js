var $ = Dom7;

var DB = new dataBank();

// Init App
var app = new Framework7({
  name: 'App',
  id: 'br.mackenzie.lfs.App',
  root: '#app',
  theme: 'auto',
  routes: [{
    path: '/about/',
    url: './pages/about.html',
  }, {
    path: '/login/',
    componentUrl: './pages/login.html',
  }, {
    path: '/menu/',
    componentUrl: './pages/menu.html'
  }, {
    path: '/index/',
    url: './index.html',
  }, {
    path: '/profile/',
    componentUrl: './pages/profile.html'
  }]
});

var mainView = app.views.create('.view-main');
