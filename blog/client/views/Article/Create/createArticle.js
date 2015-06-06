if (Meteor.isClient){
  Template.createArticle.events({
  "submit .new-article": function(event){
    var title = event.target.title.value;
    var content = event.target.content.value;
    
    Meteor.call("addArticle", title, content);
    event.target.title.value = "";
    event.target.content.value = "";
    return false;
    }
  });
}

