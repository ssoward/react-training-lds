import {storiesOf, action} from '@kadira/storybook';
import ListView from './ListView';
import React from 'react';

storiesOf ('ListView', module)
  .add ('default', () => <ListView />)
  .add ('with message', () => 
    <ListView 
      welcomeText = "Some Message from list view story"
      onCloseGreeting={action('greeting action button clicked')}
    />)
