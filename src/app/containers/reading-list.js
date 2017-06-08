import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setPageMeta } from '../actions/page-meta';
import LandingView from '../views/LandingView';

const pageMeta = {
  title: "...",
  tags: [
      {"name": "description", "content": "A React Starter"},
      {"property": "og:type", "content": "article"}
  ]
};

// takes values from the redux store and maps them to props
const mapStateToProps = state => ({
  //propName: state.data.specificData
});

// binds the result of action creators to redux dispatch, wrapped in callable functions
const bindActionsToDispatch = dispatch => ({
  setPageMeta: (meta) => { dispatch(setPageMeta(meta)) }
});

// takes the result of mapStateToProps as store, and bindActionsToDispatch as actions
// returns the final resulting props which will be passed to the component
const mergeAllProps = (store, actions) => ({
  ...store,
  init: () => actions.setPageMeta(pageMeta),
  //propName:data
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
    return <LandingView {...this.props} />
  }

}

export default storeConnector(ReadingList);
