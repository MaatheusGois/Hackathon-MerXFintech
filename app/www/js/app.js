var $ = Dom7;

var DB = new dataBank();

// Init App
var app = new Framework7({
  name: 'App',
  id: 'br.mackenzie.lfs.App',
  root: '#app',
  theme: 'md',
  swipePanel: 'left',
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
    path: '/perfil/',
    componentUrl: './pages/perfil.html'
  }, {
    path: '/esqueciSenha/',
    componentUrl: './pages/esqueciSenha.html'
  }, {
    path: '/99/',
    componentUrl: './pages/99.html'
  }, {
    path: '/bilheteUnico/',
    componentUrl: './pages/bilheteUnico.html'
  }, {
    path: '/yellow/',
    componentUrl: './pages/yellow.html'
  }, {
    path: '/historico/',
    componentUrl: './pages/historico.html'
  },
  {
    path: '/left-panel/',
    panel: {
      content: `
        <div class="panel panel-left panel-cover">
          <div class="view">
            <div class="page">
              <h1>EIIIIII</h1>
            </div>
          </div>
        </div>
      `
    }
  },

]
});

var mainView = app.views.create('.view-main');
