Template.homeLayout.helpers({
	categories: function () {
		return Categories.find({}, {sort: {createdAt: -1}});
	}
});

Template.defaultLayout.helpers({
	categories: function () {
		return Categories.find({}, {sort: {createdAt: -1}});
	}
});