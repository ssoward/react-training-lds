import React from 'react';
import 'normalize.css';
import styles from './style.css';
import Greeting from '../../components/Greeting';
import BookSearch from '../../components/BookSearch';


export default (
  {
    welcomeText = "There was no user provided.",
    inputText = "Add book by Title or ISBN:",
    onCloseGreeting,
    isGreetingVisible = true,
    onChangeSaveInputValue,
    onClickBookAdd
  }
) => (

  <div className={styles.app}>
    
    {isGreetingVisible && <Greeting message={welcomeText} onClose={onCloseGreeting} />}
    
    <BookSearch message={inputText} 
                onChangeSaveInputValue={onChangeSaveInputValue} 
                onClickBookSearch={onClickBookAdd} />
  </div>
);
