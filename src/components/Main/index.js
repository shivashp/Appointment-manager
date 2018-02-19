import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Layout, Menu, Icon } from 'antd';
import Dashboard from '../Dashboard';
import AddAppointment from '../AddAppointment';

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
    const { match } = this.props;
    return (
      <Layout id="dashboard">
        <Sidebar collapsed={this.state.collapsed} match={match}/>
        <Layout>
          <Navbar collapsed={this.state.collapsed} toggle={this.toggle}/>
          <Content style={{ margin: '24px 16px', padding: 24}}>
            <Route path={`${match.url}`} component={Dashboard} />
            <Route path={`${match.url}/add-appointment`} component={AddAppointment} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Main;