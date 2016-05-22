import {Mongo} from 'meteor/mongo';
import {ownsDocument} from '../../permissions'

export let CharacterImages = new Mongo.Collection('characterImages');

CharacterImages.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});
