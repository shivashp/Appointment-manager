import React, { Component } from 'react';
import { Layout, Icon } from 'antd';

class Navbar extends Component {
  render() {
    return (
      <Layout.Header style={{ background: '#fff', padding: 0 }}>
        <Icon
          className="trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.toggle}
        />
      </Layout.Header>
    );
  }
}

export default Navbar;