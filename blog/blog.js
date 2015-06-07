if (Meteor.isClient){
  Meteor.subscribe("articles");
  Template.articles.helpers({
    articles: function(){
      return Articles.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.article.events({
    "click .delete": function(){
     Meteor.call("rmArticle", this._id);
    }
  });
}

if (Meteor.isServer){
  Meteor.publish("articles", function(){
    return Articles.find({}, {sort: {createdAt: -1}});
  });
}