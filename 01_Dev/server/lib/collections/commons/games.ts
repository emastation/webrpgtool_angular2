import { Meteor } from 'meteor/meteor';
import { Games } from '../../../../lib/collections/commons/games';
import * as _ from 'lodash';

declare var check:Function;

Meteor.methods({
  createGame: function (gameAttributes):Object {
    check(Meteor.userId(), String);
    check(gameAttributes, {
      title: String,
      identifier: String
    });

    var gameWithSameIdentifier:Game = <Game>Games.findOne({title: gameAttributes.title});
    if (gameWithSameIdentifier) {
      return {
        exists: true,
        _id: gameWithSameIdentifier._id
      };
    }

    var user = Meteor.user();
    var game = _.extend(gameAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    var gameId = Games.insert(game);

    return {
      _id: gameId
    };
  },
  deleteGame: function(idToDelete):Object {
    check(Meteor.userId(), String);
    check(idToDelete, String);

    var game:Game = <Game>Games.findOne({_id: idToDelete});
    if (game) {
      if (game.author === Meteor.user().username) {
        let id = Games.remove(idToDelete);
        return {
          _id: id
        };
      } else {
        return {
          wrongUser: true
        };
      }
    } else {
      return {
        notFound: true
      };
    }
  }
});
