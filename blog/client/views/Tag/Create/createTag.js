if (Meteor.isClient){
  Template.createTag.events({
  "submit .new-tag": function(event){
    var label = event.target.label.value;
    
    Meteor.call("addTag", label);
    event.target.title.value = "";
    return false;
    }
  });
}

