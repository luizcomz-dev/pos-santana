import { Template } from 'meteor/templating';
import { Lero } from '/collections/leros.js';

import './lero.html';

Template.lero.onCreated(() => {
    Meteor.subscribe('lero');
});

Template.lero.helpers({
    lero() {
        let id = FlowRouter.getParam('id');

        return Lero.findOne({
            _id: id
        });
    }
});

Template.lero.events({
    'click .remove'() {        
        Meteor.call('removeLero', this._id);
    },
    'click .save'(ev) {
        ev.preventDefault();

        let comentario = { texto: $('#comentario').val()};

        this.comentarios.push(comentario);

        Lero.update({
            _id: this._id
            }, {
                $set: {
                    comentarios: this.comentarios
                }
            });
    }
});