import {Mongo} from 'meteor/mongo';
import {ownsDocument} from '../../permissions'

export let MapTileType = new Mongo.Collection('mapTileType');

MapTileType.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});
