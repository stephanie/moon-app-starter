/*eslint no-invalid-this: "error"*/
/*eslint-env es6*/
import React, { PropTypes, Component } from 'react';
import {connect} from 'react-redux';
import toastr from 'toastr';

export default function (ComposedComponent, isVisibleLoggedIn=true) {

  class Authentication extends Component {
    constructor() {
      super();
      this.hideComponent = false;
    }

    componentWillMount() {
      if (!this.props.authenticated && isVisibleLoggedIn ||this.props.authenticated && !isVisibleLoggedIn) {
        this.hideComponent = true;
      }
    }

    componentWillUpdate(nextProps) {
      if (!this.props.authenticated && isVisibleLoggedIn ||this.props.authenticated && !isVisibleLoggedIn) {
        this.hideComponent = true;
      }
    }

    render() {
      return (
        <div>
          {!this.hideComponent && 
            <ComposedComponent {...this.props}/>
          }
        </div>
      );
    }
  }

  Authentication.contextTypes = {
    router : PropTypes.object
  };
  
  Authentication.propTypes  = {
    authenticated : PropTypes.bool
  };
  
  const mapStateToProps = (state) => ({
    authenticated : state.auth.isLogged
  });
  
  return connect(mapStateToProps)(Authentication);
}
