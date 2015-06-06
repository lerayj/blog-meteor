Articles = new Mongo.Collection("articles");
Tags = new Mongo.Collection("tags");
Categories = new Mongo.Collection("categories");

Meteor.methods({
  addArticle: function(title, content, idCateg, nameCateg){
    Articles.insert({
      title: title,
      content: content,
      createdAt: new Date(),
      idCateg: idCateg,
      nameCateg: nameCateg
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
  addCategory: function(name){
    Categories.insert({name: name});
  }
});