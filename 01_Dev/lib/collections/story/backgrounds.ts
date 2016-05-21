import {Mongo} from 'meteor/mongo';
import {ownsDocument} from '../../permissions'

export let Background = new Mongo.Collection('backgrounds');

Background.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});
