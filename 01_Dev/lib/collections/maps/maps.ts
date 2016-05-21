import _ from 'lodash';
import {Mongo} from 'meteor/mongo';
import {ownsDocument} from '../../permissions'

export let Maps = new Mongo.Collection('maps');

Maps.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});

Maps.deny({
  update: function(userId, post, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'title', 'width', 'height', 'type_array', 'height_array', 'script_array', 'game_id').length > 0);
  }
});
