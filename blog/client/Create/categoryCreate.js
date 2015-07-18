if (Meteor.isClient){

  Template.categoryCreate.helpers({
    categories: function(){
      return Categories.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.categoryCreate.events({
  "submit .new-category": function(event){
    
    var categ = event.target.label.value;
    Meteor.call("addCategory", categ);
    event.target.label.value = "";
    return false;
    }
  });

  Template.category.events({
    "click .delete": function(event){
      console.log('clicked');
      Meteor.call("rmCategory", this._id);
    }
  })
}

