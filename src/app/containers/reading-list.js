import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setPageMeta } from '../actions/page-meta';
import ListView from '../views/ListView';
import {init as setUserInfo} from '../actions/user';
import {toggleGreeting} from '../actions/settings';
import {onChangeSaveInputValue} from '../actions/book-save-input';

const pageMeta = {
  title: "...",
  tags: [
    {"name": "description", "content": "A React Starter"},
    {"property": "og:type", "content": "article"}
  ]
};

// takes values from the redux store and maps them to props
const mapStateToProps = state => ({
  name: state.user.name,
  isGreetingVisible: state.settings.greetingVisible, 
  bookSearch: state.inputBookSearchVal
});

// binds the result of action creators to redux dispatch, wrapped in callable functions
const bindActionsToDispatch = dispatch => ({
  setPageMeta: (meta) => { dispatch(setPageMeta(meta)) },
  setUserInfo: (meta) => { dispatch(setUserInfo(meta)) },
  toggleGreeting: () => { dispatch(toggleGreeting()) },
  onChangeSaveInputValue: (e) => { dispatch(onChangeSaveInputValue(e)) }
});

// takes the result of mapStateToProps as store, and bindActionsToDispatch as actions
// returns the final resulting props which will be passed to the component
const mergeAllProps = (store, actions) => ({
  ...store,
  init: () => {
    actions.setPageMeta(pageMeta);
    actions.setUserInfo();
    //todo set fetched book actions.onChangeSaveInputValue();
  },
  onCloseGreeting: actions.toggleGreeting,
  onChangeSaveInputValue: actions.onChangeSaveInputValue,
  welcomeText: `welcome from container123,  ${store.name}`
});

const storeConnector = connect(
  mapStateToProps,
  bindActionsToDispatch,
  mergeAllProps
);

class ReadingList extends Component {

  static onServer(props, store) {
    return store.dispatch(setPageMeta(pageMeta))
  }

  componentDidMount() {
    this.props.init();
  }

  render() {
    return <ListView {...this.props} />
  }
}

export default storeConnector(ReadingList);
