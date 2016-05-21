import {Mongo} from 'meteor/mongo';
import {ownsDocument} from '../../permissions'

export let Stories = new Mongo.Collection('stories');

Stories.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});
