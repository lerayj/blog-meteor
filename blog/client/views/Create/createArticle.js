if (Meteor.isClient){
  Template.createArticle.helpers({
    "categories": function(){
      return Categories.find({});
    },
    "tags": function(){
      return Tags.find({});
    }
  });

  Template.createArticle.events({
  "submit .new-article": function(event){
    var title = event.target.title.value;
    var content = event.target.content.value;
    var categName = event.target.categ.value;
    var select = event.target.categ;
    var categId = select.options[select.selectedIndex].getAttribute('data-id');

    var selectedTags = event.target.querySelectorAll('[data-selected=true]');
    var tagList = {};
    for (var i = 0; i < selectedTags.length; i++){
      var item = selectedTags[i];
      tagList[item.getAttribute('data-id')] = item.value;
      item.className = "button round";
      item.setAttribute('data-selected','false'); 
    }
    //console.log(tagList); 
    Meteor.call("addArticle", title, content, categId, categName, tagList);
    event.target.title.value = "";
    event.target.content.value = "";
    event.target.categ.value = "";
    return false;
    },
    "click [data-type=tag]": function(event){
      if (event.target.getAttribute('data-selected') == 'true'){
        event.target.className = "button round";
        event.target.setAttribute('data-selected','false');        
      }
      else{
        event.target.className = "button round alert";
        event.target.setAttribute('data-selected','true');        
      }
    },
    "click #categ-list": function(event){
    }
  });
}
