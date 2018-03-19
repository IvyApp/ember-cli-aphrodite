import Component from '@ember/component';
import { StyleSheet } from 'aphrodite';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  layout: hbs`
    <p class="{{css styles.red}}">
      This is red.
    </p>

    <p class="{{css styles.hover}}">
      This turns red on hover.
    </p>

    <p class="{{css styles.small}}">
      This turns red when the browser is less than 600px wide.
    </p>

    <p class="{{css styles.red styles.blue}}">
      This is blue.
    </p>

    <p class="{{css styles.blue styles.small}}">
      This is blue and turns red with the browser is less than 600px wide.
    </p>
  `,

  styles: StyleSheet.create({
    red: {
      backgroundColor: 'red'
    },

    blue: {
      backgroundColor: 'blue'
    },

    hover: {
      ':hover': {
        backgroundColor: 'red'
      }
    },

    small: {
      '@media (max-width: 600px)': {
        backgroundColor: 'red'
      }
    }
  })
});
