import { Template } from 'meteor/templating';
import { Lero } from '/collections/leros.js';

import './lero-list.html';

Template.leroList.onCreated(() => {
    Meteor.subscribe('leros');
});

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
            autor: Meteor.userId(),
            texto: target.texto.value,
            comentarios: []
        };

        Meteor.call('createLero', lero);
        
        target.texto.value = '';
    }
});