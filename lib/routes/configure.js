/**
 * Created by CristoH on 08/04/2016.
 */

Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    waitOn: function(){
        return Meteor.subscribe('counters')
    }
});

