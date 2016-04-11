/**
 * Created by CristoH on 08/04/2016.
 */

Meteor.methods({

    add: function(counterId){
        var counter = Counter.findOne({_id: counterId});
        if(counter && counter.value < 999) {
            Counter.update(counterId,{$inc:{value: 1}});
        }else{
            Counter.update(counterId,{$set:{value: 0}});
        }
    },
    decrease: function(counterId){
        var counter = Counter.findOne({_id: counterId});
        if(counter && counter.value < 1) {
            Counter.update(counterId,{$set:{value: 999}});
        }else {
            Counter.update(counterId,{$inc:{value: -1}});
        }
    },
    reset: function(counterId){
        Counter.update(counterId,{$set:{value: 0}});
    }

});