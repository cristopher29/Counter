/**
 * Created by CristoH on 08/04/2016.
 */

Router.route('/', {
    name: 'countersList',
    waitOn: function(){
        if(Meteor.user()){
            Meteor.subscribe('admin',Meteor.userId())
        }
    }
});

Router.route('/admin', {
    name: 'admin'
});