import {Mongo} from 'meteor/mongo';
import {ownsDocument} from '../../permissions'

export let MapTextures = new Mongo.Collection('mapTextures');

MapTextures.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});
