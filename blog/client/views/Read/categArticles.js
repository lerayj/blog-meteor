Template.categArticles.helpers({
	articles: function(){
		return this.listArticles;
	},
	categ: function(){
		return this.categ;
	},
	tagSort: function(){
		return this.type === "tagSort";
	},
	categSort: function(){
		return this.type === "categSort";
	}
});
		