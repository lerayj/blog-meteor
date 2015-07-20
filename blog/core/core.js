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
  updateArticle: function(id, title, content, idCateg, nameCateg, tagList){
    Articles.update({_id: id},{
      $set: {
        title: title,
        content: content,
        createdAt: new Date(),
        idCateg: idCateg,
        nameCateg: nameCateg,
        tags: tagList
      }
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

  Meteor.publish("oneArticle", function(id){
    return Articles.find({_id: id});
  });

  Meteor.publish("categArticles", function(categName){
      return Articles.find({nameCateg: categName});
    }); 

  Meteor.publish("tagArticles", function(tagName){
      return Articles.find({"tags.label": tagName});
    });   
}