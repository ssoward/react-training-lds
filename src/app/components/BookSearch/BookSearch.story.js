import {storiesOf, action} from '@kadira/storybook';
import BookSearch from './BookSearch';
import React, {Component} from 'react';

storiesOf ('BookSearch', module)
  .add ('default', () => 
    <BookSearch
      message="Hello Action & Message"
      onClickBookAdd={action("add button clicked")}
      onChangeSaveInputValue={action("input entered")}
    />);
