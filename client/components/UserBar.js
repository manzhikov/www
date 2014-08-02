/** @jsx m */

"use strict";
require("./UserBar.scss");

var _ = require("underscore");

var OnUnload = require("../utils/OnUnload.js");
var Dropdown = require("./Dropdown.js");

var UserBar = {};

UserBar.controller = function(options) {
  OnUnload(this);
  this.user = options.user;

  if (this.user) {
    this.controllers.dropdown = new Dropdown.controller({
      className: "user",
      label: <img src={this.user.get("gravatarUrl")} />
    });
  }
};

UserBar.view = function(ctrl) {
  var user = ctrl.user;
  if (!user) {
    return <ul className="UserBar"/>;
  }

  if (user.canEdit()) {
    var extras = [
      <li className="separator"></li>,
      routeLi("/articles/new", "Add an article")
    ];

    if (user.get("admin")) {
      extras = extras.concat([
        <li className="separator"></li>,
        routeLi("/admin", "Admin")
      ]);
    }
  }

  var dropdownContent = (
    <ul>
      {routeLi("/profile", "Profile")}
      {routeLi("/bookmarks", "Bookmarks")}
      {routeLi("/logout", "Log out")}
      {extras}
    </ul>
  );

  return (
    <ul className="UserBar">
      <li>{new Dropdown.view(ctrl.controllers.dropdown, dropdownContent)}</li>
    </ul>
  );
};

function routeLi(path, name) {
  return <li onclick={route(path)} className={m.route() === path ? "selected" : ""}>{name}</li>;
};

function route(path) {
  return function(e) {
    return m.route(path);
  };
};

module.exports = UserBar;
