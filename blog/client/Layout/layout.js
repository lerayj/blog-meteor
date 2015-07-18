Template.navbar.helpers({
	categories: function () {
		return Categories.find({}, {sort: {createdAt: -1}});
	}
});

Template.navbar.helpers({
	categories: function () {
		return Categories.find({}, {sort: {createdAt: -1}});
	}
});


Template.homeLayout.events({

    "click .scrollBtn" : function(event){
    	console.log('OK');
		$('html, body').animate({
	    scrollTop: $(".content").offset().top
		}, 1000);
    }
});

