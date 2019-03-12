import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { openDrawer, closeDrawer } from "../../actions/types";
import store from "../../store";

export class ProfilePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: null,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      if (this.state.isOpen !== null) {
        if (window.innerWidth > 615) {
          this.setState({ isOpen: null });
        }
      }
    });
  }

  onOpen = () => {
    this.setState({ isOpen: true });
    store.dispatch(openDrawer());
  };

  onClose = () => {
    this.setState({ isOpen: false });
    store.dispatch(closeDrawer());
  };

  render() {
    const { auth } = this.props;
    const { isOpen } = this.state;
    return (
      <div className="sub-menu-container">
        <div className="active-user">
          <i className="fas fa-user-circle mr-2" />
          <span id="profile">{auth.user.fullname}</span>
        </div>
        <div className={isOpen ? "close" : "toggle-open"} onClick={this.onOpen}>
          <i className="fas fa-bars" />
        </div>
        <div className={isOpen ? "toggle-close open" : "toggle-close"} onClick={this.onClose}>
          <i className="fas fa-window-close" />
        </div>
      </div>
    );
  }
}

ProfilePicture.propTypes = {
  auth: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {},
)(ProfilePicture);
