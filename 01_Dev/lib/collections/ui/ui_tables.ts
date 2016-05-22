import {Mongo} from 'meteor/mongo';
import {ownsDocument} from '../../permissions'

export let UiTables = new Mongo.Collection('uiTables');

UiTables.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});
