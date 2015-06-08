Router.configure({
  layoutTemplate: 'defaultLayout'
});

//public
Router.route('/', function () {
	this.layout('homeLayout');
	this.render('Articles');
});

Router.route('/tech',function(){
	this.render('readArticles');
});

Router.route('/perso',function(){
	this.render('readArticles');
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