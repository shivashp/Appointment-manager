import React, { Component } from 'react';
// import {
//   Switch,
//   Route
// } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Layout, Menu, Icon } from 'antd';
const { Header, Content } = Layout;


class Dashboard extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout id="dashboard">
        <Sidebar collapsed={this.state.collapsed} />
        <Layout>
          <Navbar collapsed={this.state.collapsed} toggle={this.toggle}/>
          <Content style={{ margin: '24px 16px', padding: 24}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi error asperiores impedit dolore dolor, unde quia illum architecto temporibus deleniti assumenda ratione ut esse tempore totam earum possimus doloribus.
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;