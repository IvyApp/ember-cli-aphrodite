# ember-cli-aphrodite

[![Build Status](https://travis-ci.org/IvyApp/ember-cli-aphrodite.svg?branch=master)](https://travis-ci.org/IvyApp/ember-cli-aphrodite)

Co-locate your styles with your Ember components, using [aphrodite][].

## Installation

```sh
ember install ember-cli-aphrodite
```

## Usage

In your component, define styles in a `StyleSheet`, and then reference them in your template via the provided `{{css}}` helper:

```js
import Component from 'ember-component';
import { StyleSheet } from 'aphrodite';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  layout: hbs`
    <span class="{{css styles.red}}">
      This is red.
    </span>
  `,

  styles: StyleSheet.create({
    red: {
      backgroundColor: 'red'
    }
  })
});
```

To learn more about `aphrodite` and how to use it, visit the [aphrodite][] GitHub page.

For Sass-style helpers, take a look at [ember-cli-polished-shim](https://github.com/IvyApp/ember-cli-polished-shim).

### Disabling `!important`

By default, Aphrodite will append `!important` to all generated styles, which is intended to make integrating with a pre-existing codebase easier. You can opt out of this behavior by modifying your `ember-cli-build.js` file like so:

```js
  var app = new EmberAddon(defaults, {
    'ember-cli-aphrodite': {
      // Prevent Aphrodite from appending all styles with !important
      important: false
    }
  });
```

Note that while the Aphrodite README [instructs you to import from `aphrodite/no-important`](https://github.com/Khan/aphrodite#disabling-important), this addon simply changes which version of the Aphrodite library is exposed to your app, so you'll always import from `aphrodite`.

## Demo

Basic example from the [Aphrodite README](https://github.com/Khan/aphrodite#api): https://ember-twiddle.com/81701ffed95b8ee19930b287fbefcca8

[aphrodite]: https://github.com/Khan/aphrodite
