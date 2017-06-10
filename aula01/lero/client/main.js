import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import './main.html';

FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', { main: "leroList" });
    }
});

FlowRouter.route('/lero/:id', {
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', { main: "lero" });
    }
});

Template.body.helpers({
  saudacao() {
    let user = Meteor.user();
    let email = user.emails[0].address;
    return user ? 'Olá, ' + (user.username ? user.username : email) : '';
  }
});

Template.mainLayout.events({
  'click #logout'() {
    Meteor.logout();
  }
});

