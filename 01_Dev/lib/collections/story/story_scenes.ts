import {Mongo} from 'meteor/mongo';
import {ownsDocument} from '../../permissions'

export let StoryScenes = new Mongo.Collection('storyScenes');
StoryScenes['sortingScope'] = 'storyId';

StoryScenes.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});
