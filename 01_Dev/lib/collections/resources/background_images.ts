import {Mongo} from 'meteor/mongo';
import {ownsDocument} from '../../permissions'

export let BackgroundImages = new Mongo.Collection('backgroundImages');

BackgroundImages.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});
