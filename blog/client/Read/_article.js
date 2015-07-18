Template._article.helpers({
	createdAt: function () {
		var formatedDate = this.createdAt.getDate() + " - " +  this.createdAt.getMonth() + " - " + this.createdAt.getFullYear();
		return formatedDate;
	},
	content: function(){
		var content = this.content;
		var maxLength = 50;
		var trimmedContent = content.substr(0, maxLength);
		trimmedContent = trimmedContent.substr(0, Math.min(trimmedContent.length, trimmedContent.lastIndexOf(" ")));
		return trimmedContent;
	}

});