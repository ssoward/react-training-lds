import {storiesOf, action} from '@kadira/storybook';
import Greeting from './Greeting';

storiesOf ('Greeting', module)
  .add ('default', () => <Greeting />)
  .add ('with message', () => <Greeting message="Hello from default"/>)
  .add ('with message and action', () => 
    <Greeting 
      message="Hello Action & Message"
      onClose={action("close button clicked")}
    />)
