import React, { Component } from 'react';
// import {
//   Switch,
//   Route
// } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Layout, Menu, Icon } from 'antd';
import Dashboard from '../Dashboard';

const { Header, Content } = Layout;



class Main extends Component {
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
            <Dashboard />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Main;