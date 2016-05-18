import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Tasks = new Meteor.Collection('tasks');

if(Meteor.isClient)
{
	Template.tasks.helpers({
		tasks: function(){
			return Tasks.find({}, {sort: {createdAt: -1}});
		}
	});

	Template.tasks.events({
		"submit .add-task" : function(event){
		var name = event.target.name.value;
		
		Tasks._collection.insert({
			name: name,
			createdAt: new Date()
		});

		event.target.name.value = ' ';
		
		return false;
		}
	});
}
if(Meteor.isServer)
{
	
}