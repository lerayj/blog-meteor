Router.configure({
  layoutTemplate: 'defaultLayout',
  notFoundTemplate: '404',
  loadingTemplate: 'loading'
});


//public
Router.route('/',{
  layoutTemplate: 'homeLayout',
  name: 'home',
  waitOn: function(){
    return Meteor.subscribe('articles');    
  },
  action: function(){
    this.render('Articles');
  }
});

Router.route('/:categoryName/article/:_id',{
   data : function(){
     return Articles.findOne({_id: this.params._id });
    },
    waitOn: function(){
      var currentArticle = this.params._id;
      return Meteor.subscribe('oneArticle', currentArticle);
    },
    action: function(){
      this.render('fullArticle');
    }
});

Router.route('/:category/articles',{
    data : function(){
      return {'type': "categSort", "categ": this.params.category, "listArticles" : Articles.find({nameCateg: this.params.category})};
    },
    waitOn : function(){
      return Meteor.subscribe('categArticles', this.params.category);
    },
    action: function(){
      this.render('categArticles');
    }
});

Router.route('/:category/:tag/articles',{
  data : function(){
    return {'type': "tagSort",'tag': this.params.tag, "listArticles": Articles.find({"tags.label" : this.params.tag})};
  },
  waitOn: function(){
    return Meteor.subscribe("tagArticles", this.params.tag);
  },
  action: function(){
     this.render('categArticles');
  }
});

Router.route('/aboutMe',{
  layoutTemplate: 'aboutMeLayout', 
  action: function(){
    this.render('aboutMe');
  }
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

Router.route('/article/update/:id',{
  name: 'article.update',
  data: function(){
    var articleId = this.params.id;
    return {"article" : Articles.findOne({ _id: articleId })};
  },
  onBeforeAction: function(){
    var currentUser = Meteor.userId();
    if(currentUser){
        this.next();
    } else {
        Router.go('home');
    }
  },
  action: function(){
    this.render('articleCreate');
  }
});
