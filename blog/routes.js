Router.configure({
  layoutTemplate: 'defaultLayout',
  notFoundTemplate: '404'
});


//public
Router.route('/', function () {
	this.layout('homeLayout');
	this.render('Articles');
},
{name: 'home'});

Router.route('/:categoryName/article/:_id',function(){
   this.render('fullArticle',{
   data : function(){
     return Articles.findOne({_id: this.params._id });
    } 
   });
});

Router.route('/:category/articles',function(){
  this.render('categArticles',{
    data : function(){
      return {'type': "categSort", "categ": this.params.category, "listArticles" : Articles.find({nameCateg: this.params.category})};
    }
  });
});

Router.route('/:category/:tag/articles', function(){
  this.render('categArticles',{
    data : function(){
      return {'type': "tagSort",'tag': this.params.tag, "listArticles": Articles.find({"tags.label" : this.params.tag})};
    }
  });
});

Router.route('/aboutMe', function () {
  this.layout('aboutMeLayout');
  this.render('aboutMe');
});


Router.route('/register');

//admin
Router.route('/article/create',{
    onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            console.log("Je suis la");
            this.next();
        } else {
            Router.go('home');
        }
    }
});

Router.route('/category/create',{
    onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            Router.go('home');
        }
    }
});

Router.route('/tag/create',{
    onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            Router.go('home');
        }
    }
});
