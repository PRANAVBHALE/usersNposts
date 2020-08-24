import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import routes from './utils/routes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserList } from './actions/userActions';
import { getPostList } from './actions/postActions';
import PropTypes from 'prop-types';

const App = ({ getUserList, getPostList }) => {

  useEffect(() => {

    getUserList()
    getPostList()

  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <Route exact={true} key={i} {...route} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

App.propTypes = {
  getUserList: PropTypes.func.isRequired,
  getPostList: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getUserList,
    getPostList
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
