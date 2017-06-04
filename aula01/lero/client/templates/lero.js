import { Template } from 'meteor/templating';
import { Lero } from '/collections/leros.js';

import './lero.html';

Template.lero.events({
    'click .remove'() {        
        Lero.remove({
            _id: this._id
        });
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