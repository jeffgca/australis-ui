var tabs = require('sdk/tabs');

function pageAlert(message) {
  tabs.activeTab.attach({
    contentScript: 'alert("'+message+'")'
  });
}

// Action Button
// see: https://developer.mozilla.org/en-US/Add-ons/SDK/Low-Level_APIs/ui_button_action
var { ActionButton } = require("sdk/ui/button/action");

var action_button = ActionButton({
  id: "my-button",
  label: "my button",
  icon: {
    "16": "./comment.png"
  },
  onClick: function(state) {
    pageAlert('Clicked the action button!');
  }
});

// Toggle Button
// see: https://developer.mozilla.org/en-US/Add-ons/SDK/Low-Level_APIs/ui_button_toggle
var { ToggleButton } = require("sdk/ui/button/toggle");

var toggle_button = ToggleButton({
  id: "my-toggle",
  label: "Toggle Button",
  icon: {
    "16": "./check_mark.png"
  },
  onClick: function(state) {
    pageAlert('Clicked the toggle button: '+state.checked);
  }
});

// Toolbar Implementation
// https://developer.mozilla.org/en-US/Add-ons/SDK/Low-Level_APIs/ui_toolbar
var { Frame } = require("sdk/ui/frame");
var { Toolbar } = require("sdk/ui/toolbar");

var toolbar_button = ActionButton({
  id: "toolbar-button",
  label: "Show Toolbar",
  icon: "./check_mark.png",
  onClick: function(state) {
    pageAlert('Clicked the toolbar button!');
  }
});

var frame = new Frame({
  url: "./frame.html"
});

var toolbar = Toolbar({
  title: "Test-addon",
  items: [toolbar_button, frame]
});
