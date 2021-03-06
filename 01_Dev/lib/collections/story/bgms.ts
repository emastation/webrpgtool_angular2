import {Mongo} from 'meteor/mongo';
import {ownsDocument} from '../../permissions'

export let Bgms = new Mongo.Collection('bgms');

Bgms.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});
