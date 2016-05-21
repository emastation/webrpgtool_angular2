import {Mongo} from 'meteor/mongo';
import {ownsDocument} from '../../permissions'

export let Sentences = new Mongo.Collection('sentences');

Sentences.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});
