import {Mongo} from 'meteor/mongo';
import {ownsDocument} from '../../permissions'

export let SoundEffects = new Mongo.Collection('soundEffects');

SoundEffects.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});
