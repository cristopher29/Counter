/**
 * Created by CristoH on 08/04/2016.
 */


Template.admin.events({
    'submit .form': function(e,t){
        e.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        Meteor.loginWithPassword(username,password, function(error){
            if(error){
                alert(error.reason);
            }else {
                Router.go('countersList');
            }
        });
    }
});