import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

class Sidebar extends Component {
  render() {
    return (
      <Sider
          trigger={null}
          collapsible
          collapsed={this.props.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="home" />
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="user" />
              <span>Users</span>
            </Menu.Item>
          </Menu>
        </Sider>
    );
  }
}

export default Sidebar;