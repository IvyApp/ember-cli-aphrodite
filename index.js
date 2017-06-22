/* eslint-env node */
'use strict';

const WebpackWriter = require('broccoli-webpack');
const mergeTrees = require('broccoli-merge-trees');
const path = require('path');

module.exports = {
  name: 'ember-cli-aphrodite',

  defaultOptions: {
    important: true
  },

  included() {
    const target = this._findHost();

    this.addonOptions = Object.assign({}, this.defaultOptions, target.options && target.options[this.name]);

    this._super.included.apply(this, arguments);

    target.import('vendor/aphrodite.amd.js');
  },

  treeForVendor(tree) {
    const aphroditePath = path.dirname(require.resolve('aphrodite'));
    const aphroditeTree = new WebpackWriter([aphroditePath], {
      entry: this.addonOptions.important ? './index.js' : './no-important.js',

      output: {
        filename: 'aphrodite.amd.js',
        library: 'aphrodite',
        libraryTarget: 'amd'
      }
    });

    if (!tree) {
      return this._super.treeForVendor.call(this, aphroditeTree);
    }

    const trees = mergeTrees([aphroditeTree, tree], {
      overwrite: true
    });

    return this._super.treeForVendor.call(this, trees);
  },

  _findHost: function() {
    let current = this;
    let app;

    do {
      app = current.app || app;
    } while (current.parent.parent && (current = current.parent));

    return app;
  }
};
