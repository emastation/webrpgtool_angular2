import {Mongo} from 'meteor/mongo';
import {ownsDocument} from '../../permissions'
import * as _ from 'lodash';

export let Codes = new Mongo.Collection('codes');

Codes.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});

Codes.deny({
  update: function(userId, post, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'title', 'javascript').length > 0);
  }
});

