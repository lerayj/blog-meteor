Router.configure({
  layoutTemplate: 'AppLayout'
});

Router.route('/', function () {
	this.render('Articles');
});

Router.route('/article/create', function () {
	this.render('createArticle');
});

Router.route('/category/create', function(){
	this.render('createCategory');
});

Router.route('/tag/create', function(){
	this.render('createTag');
});