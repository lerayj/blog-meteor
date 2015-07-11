Template._article.helpers({
	createdAt: function () {
		var formatedDate = this.createdAt.getDate() + " - " +  this.createdAt.getMonth() + " - " + this.createdAt.getFullYear();
		return formatedDate;
	}
});