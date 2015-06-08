Articles = new Mongo.Collection("articles");
Tags = new Mongo.Collection("tags");
Categories = new Mongo.Collection("categories");

Meteor.methods({
  addArticle: function(title, content, idCateg, nameCateg, tagList){
    Articles.insert({
      title: title,
      content: content,
      createdAt: new Date(),
      idCateg: idCateg,
      nameCateg: nameCateg,
      tags: tagList
    });  
  },
  rmArticle: function(id){
    Articles.remove(id);
  },
  addTag: function(label){
    Tags.insert({
      label: label
    });
  },
  rmTag: function(id){
    Tags.remove(id);
  },
  addCategory: function(name){
    Categories.insert({name: name});
  },
  rmCategory: function(id){
    Categories.remove(id);
  }
});

if (Meteor.isClient){
  Meteor.subscribe("categories");
  Meteor.subscribe("tags");
  Meteor.subscribe("articles");
}

if (Meteor.isServer){
  Meteor.publish('categories', function(){
      return Categories.find({});
  });

  Meteor.publish('tags', function(){
    return Tags.find({});
  });

 Meteor.publish("articles", function(){
    return Articles.find({}, {sort: {createdAt: -1}});
  });
}