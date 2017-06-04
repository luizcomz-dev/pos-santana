import { Template } from 'meteor/templating';

import './main.html';

Template.body.helpers({
  saudacao(nome, sobrenome) {
    return 'Olá, ' + nome + ' ' + sobrenome;
  }
});

