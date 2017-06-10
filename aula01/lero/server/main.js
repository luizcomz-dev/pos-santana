import { Meteor } from 'meteor/meteor';

import { Lero } from '/collections/leros.js';

Meteor.startup(() => {
  Meteor.publish('leros', function () {
      return Lero.find({
          autor: this.userId
      });
  });

  Meteor.publish('lero', function (id) {
      return Lero.findOne({
          _id: id
      });
  });

  Meteor.methods({
      'createLero': function(lero) {
          Lero.insert(lero);
      },
      'removeLero': function (id) {
          Lero.remove({
              _id: id
          });
      }
  });
});