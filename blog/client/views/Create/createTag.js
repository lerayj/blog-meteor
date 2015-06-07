if (Meteor.isClient){
Template.createTag.helpers({
	'tagsList': function(){
		return Tags.find({});
	}
});

  Template.createTag.events({
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

