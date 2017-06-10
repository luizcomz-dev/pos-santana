import { Template } from 'meteor/templating';

import './login.html';

Template.login.events({
    'submit #loginForm' (event) {

        event.preventDefault();

        let email = event.target.login.value;
        let pass = event.target.senha.value;

        Meteor.loginWithPassword(email, pass);
    }
});