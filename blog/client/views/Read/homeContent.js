if (Meteor.isClient){

  Template.articles.helpers({
    articles: function(){
      return Articles.find({}, {sort: {createdAt: -1}});
    }
  });

  Template._article.events({
    "click .delete": function(){
     Meteor.call("rmArticle", this._id);
    }
  });
}
