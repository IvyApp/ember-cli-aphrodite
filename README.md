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

## Demo

Basic example from the [Aphrodite README](https://github.com/Khan/aphrodite#api): https://ember-twiddle.com/81701ffed95b8ee19930b287fbefcca8

[aphrodite]: https://github.com/Khan/aphrodite
