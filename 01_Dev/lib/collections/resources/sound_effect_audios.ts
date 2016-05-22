import {Mongo} from 'meteor/mongo';
import {ownsDocument} from '../../permissions'

export let SoundEffectAudios = new Mongo.Collection('soundEffectAudios');

SoundEffectAudios.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});
