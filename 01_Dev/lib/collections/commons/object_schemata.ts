import {Mongo} from 'meteor/mongo';
import {ownsDocument} from '../../permissions'

export let ObjectSchemata = new Mongo.Collection('objectSchemata');

ObjectSchemata.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});
