import {Mongo} from 'meteor/mongo';
import {ownsDocument} from '../../permissions'

export let Games = new Mongo.Collection('games');

Games.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});
