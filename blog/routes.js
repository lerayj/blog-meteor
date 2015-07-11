Router.configure({
  layoutTemplate: 'defaultLayout'
});

//public
Router.route('/', function () {
	this.layout('homeLayout');
	this.render('Articles');
});

Router.route(':categoryName/article/:_id',function(){
   this.render('fullArticle',{
   data : function(){
     return Articles.findOne({_id: this.params._id });
    } 
   });
});

Router.route(':category/articles',function(){
  this.render('categArticles',{
    data : function(){
      return {'type': "categSort", "categ": this.params.category, "listArticles" : Articles.find({nameCateg: this.params.category})};
    }
  });
});

Router.route(':category/:tag/articles', function(){
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

//admin
Router.route('/article/create', function () {
	this.render('createArticle');
});

Router.route('/category/create', function(){
	this.render('createCategory');
});

Router.route('/tag/create', function(){
	this.render('createTag');
});

