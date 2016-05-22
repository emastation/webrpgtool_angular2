import {Mongo} from 'meteor/mongo';
import {ownsDocument} from '../../permissions'

export let Characters = new Mongo.Collection('characters');

Characters.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});
