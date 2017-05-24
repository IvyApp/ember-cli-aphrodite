/* eslint-env node */
'use strict';

const mergeTrees = require('broccoli-merge-trees');
const path = require('path');
const WebpackWriter = require('broccoli-webpack');

module.exports = {
  name: 'ember-cli-aphrodite',

  included() {
    this._super.included.apply(this, arguments);

    this.import('vendor/aphrodite.amd.js');
  },

  treeForVendor(tree) {
    const aphroditePath = path.dirname(require.resolve('aphrodite'));
    const aphroditeTree = new WebpackWriter([aphroditePath], {
      entry: './index.js',
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
  }
};
