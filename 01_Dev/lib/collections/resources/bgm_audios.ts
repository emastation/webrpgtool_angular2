import {Mongo} from 'meteor/mongo';
import {ownsDocument} from '../../permissions'

export let BgmAudios = new Mongo.Collection('bgmAudios');

BgmAudios.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});
