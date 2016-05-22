import {Mongo} from 'meteor/mongo';
import {ownsDocument} from '../../permissions'

export let UiScreens = new Mongo.Collection('uiScreens');

UiScreens.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});
