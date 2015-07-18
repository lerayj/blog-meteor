if (Meteor.isClient){
Template.tagCreate.helpers({
	'tagsList': function(){
		return Tags.find({});
	}
});

  Template.tagCreate.events({
  "submit .new-tag": function(event){
    var label = event.target.label.value;
    
    Meteor.call("addTag", label);
    event.target.title.value = "";
    return false;
    },
    "click [data-action=delete]" : function(event){
    	Meteor.call('rmTag', this._id);
    }
  });
}

