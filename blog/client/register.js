Template.register.events({
	'submit .register': function(event){
console.log("test");
	event.preventDefault();
	var email = $('[name=email]').val();
	var pass = $('[name=pass]').val();

	Accounts.createUser({
		email: email,
		password: pass
	}, function(error){
		if(error){
			console.log(error.reason);
		} else{
			Router.go('home');
		}
	});
	Router.go('home');
	Meteor.users.find().fetch();
	},
	'click [data-type=logout]': function(event){
		event.preventDefault();
		Meteor.logout();
	}

});

	
Template.login.events({
	'submit .login': function(event){
		event.preventDefault();
 	   var email = $('[name=emailLogin]').val();
    	var password = $('[name=passLogin]').val();
    	console.log(email + " " + password);
    	Meteor.loginWithPassword(email, password, function(error){
    		if(error){
    			console.log(error.reason);
    		} else{
    			Router.go("home");
    		}
    	});

	}
});