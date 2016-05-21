import {Mongo} from 'meteor/mongo';
import {ownsDocument} from '../../permissions'

export let StoryItems = new Mongo.Collection('storyItems');
StoryItems['sortingScope'] = 'sceneId';

StoryItems.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});
