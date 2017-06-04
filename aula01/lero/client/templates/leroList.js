import { Template } from 'meteor/templating';
import { Lero } from '/collections/leros.js';

import './lero-list.html';

Template.leroList.helpers({
    leros() {
        return Lero.find({});
    }
});

Template.leroList.events({
    'submit #cadLeros'(ev) {
        ev.preventDefault();

        let target = ev.target;

        let lero = {
            autor: target.autor.value,
            texto: target.texto.value,
            comentarios: []
        };

        Lero.insert(lero);

        target.autor.value = '';
        target.texto.value = '';
    }
});