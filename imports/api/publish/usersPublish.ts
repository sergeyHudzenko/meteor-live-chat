import { Meteor } from "meteor/meteor";

Meteor.publish("usersAll", () => Meteor.users.find());
