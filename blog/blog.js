Articles = new Mongo.Collection("articles");

if (Meteor.isClient){
  
  Template.body.helpers({
    articles: function(){
      return Articles.find({}, {sort: {createdAt: -1}});
    }
  });
  
  Template.body.events({
  "submit .new-article": function(event){
    console.log("test");
    var title = event.target.title.value;
    var content = event.target.content.value;
    
    Articles.insert({
      title: title,
      content: content,
      createdAt: new Date()
    });
    event.target.title.value = "";
    event.target.content.value = "";
    return false;
    },

    "click .delete": function(){
      Articles.remove(this._id);
    }
  });
}