function dataBank() {
  this.data = {};
  this.criancas = JSON.parse(localStorage.getItem('crianca'));
  this.minhasCriancas = [];
}

dataBank.prototype.getCrianca = function (id) {
  var result = this.criancas.filter(function (o) {
    return o.id == id;
  });
  var resultM = this.criancas.filter(function (o) {
    return o.id == id;
  });
  if (result) {
    if (resultM) {
      return resultM[0];
    } else {
      return result[0];
    }
  } else {
    return null;
  }
}

dataBank.prototype.addCrianca = function (id, cb) {
  var result = this.criancas.filter(function (o) {
    return o.id == id;
  });
  result[0].added = true;
  this.minhasCriancas.push(result[0]);
  cb();
}


/**
 * Criação de crianças imaginárias.

function generateChList() {
  /*for (var i = 0; i < n; i++) {
    var gen = (i % 2 === 0) ? 'M' : 'F';
    ret.push({
      id: i,
      nome: randomName(gen),
      nascimento: randomDate(),
      genero: gen,
      nomemae: randomName('F'),
      nomepai: randomName('M'),
      cpf: Math.floor(Math.random() * 999999999) + '-' + ('0' + Math.floor(Math.random() * 99)).slice(-2),
      instituicao: 'Creche das Crianças imaginárias',
      added: false
    })
  }
  var ret = JSON.parse(localStorage.getItem('crianca'));
  return ret
}*/

function randomDate() {
  var start = new Date(2013, 0, 1);
  var end = new Date(18, 11, 31);
  var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return d.getFullYear() + '-' + ('0' + d.getMonth()).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
}

function randomName(s) {
  var MaleFNames = [
    'Micheal',
    'Alphonso',
    'Leonardo',
    'Shaun',
    'Hiram',
    'Maurice',
    'Gerry',
    'Ellsworth',
    'Nestor',
    'Jarrett',
    'Houston',
    'Jerold',
    'Gene',
    'Jack',
    'Renaldo',
    'Herman',
    'Charlie',
    'Jackie',
    'Avery',
    'Tomas',
    'Eldon'
  ];
  var FemaleFNames = [
    'Sigrid',
    'Reginia',
    'Dorethea',
    'Barbara',
    'Briana',
    'Hisako',
    'Jerri',
    'Apryl',
    'Sherril',
    'Kecia',
    'Clarice',
    'Joi',
    'Tommye',
    'Tomiko',
    'Shirl',
    'Arnette',
    'Maryanna',
    'Chaya',
    'Carley',
    'Camila'
  ];
  var sNames = [
    'Mangual',
    'Fuso',
    'Nuzzo',
    'Deblois',
    'Lebron',
    'Linzey',
    'Moynihan',
    'Leitz',
    'Estepp',
    'Kouba',
    'Crader',
    'Raab',
    'Sprinkle',
    'Weis',
    'Vuong',
    'Crippen',
    'Mellen',
    'Ridings',
    'Daughtridge',
    'Cho',
    'Chumley',
    'Jayne',
    'Lenhardt',
    'Hannold',
    'Valerio',
    'England',
    'Draeger',
    'Richardson',
    'Thorington',
    'Olmedo',
    'Tomasini',
    'Jeffcoat'
  ];
  if (s === 'M') {
    return MaleFNames[Math.floor(Math.random() * MaleFNames.length)] + ' ' + sNames[Math.floor(Math.random() * sNames.length)] + ' ' + sNames[Math.floor(Math.random() * sNames.length)];
  } else {
    return FemaleFNames[Math.floor(Math.random() * FemaleFNames.length)] + ' ' + sNames[Math.floor(Math.random() * sNames.length)] + ' ' + sNames[Math.floor(Math.random() * sNames.length)];
  }
}
