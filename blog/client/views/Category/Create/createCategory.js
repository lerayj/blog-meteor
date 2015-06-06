if (Meteor.isClient){

  Template.categories.helpers({
    categories: function(){
      return Categories.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.createCategory.events({
  "submit .new-category": function(event){
    var categ = event.target.category.value;
    
    Meteor.call("addCategory", categ);
    event.target.category.value = "";
    return false;
    }
  });
}