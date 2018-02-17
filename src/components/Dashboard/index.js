import React, { Component } from 'react';
import { Menu, Icon, Row, Col, Input } from 'antd';
import AppointmentCard from './AppointmentCard';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Dashboard extends Component {
    state = {
        current: 'all',
        data: [],
        searchText: ''
    }
    handleMenuClick = e => this.setState({ current: e.key});
    handleSearchChange = e => this.setState({searchText: e.target.value});
    render() {
        return (
            <div>
                <TopBar 
                    current={this.state.current} 
                    handleClick={this.handleMenuClick} 
                    onChange={this.handleSearchChange}
                />
                <Row className="content-section" gutter={8}>
                    {
                        this.props.data
                        .filter(info => info.status == this.state.current || this.state.current == 'all')
                        .filter(info => info.user.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1)
                        .map((info,i) => <Col span={8} key={i}><AppointmentCard info={info}/></Col>)
                    }
                </Row>
            </div>
        );
    }
}

const TopBar = props => (
    <div style={{display: 'flex'}}>
        <Menu
            onClick={props.handleClick}
            selectedKeys={[props.current]}
            mode="horizontal"
            style={{display: 'flex', flex: 3}}
        >
            <Menu.Item key="all">
                <Icon type="mail" />All Appointments
            </Menu.Item>
            <Menu.Item key="active">
                <Icon type="home" />Active
            </Menu.Item>
            <Menu.Item key="pending">
                <Icon type="user" />Pending
            </Menu.Item>
            <Menu.Item key="completed">
                <Icon type="appstore" />Completed
            </Menu.Item>
        </Menu>
        <Input 
            className="top-search-box" 
            style={{display: 'flex', flex: 1}} 
            suffix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            placeholder="Search" 
            onChange={props.onChange}
        />
    </div>
)   

Dashboard.defaultProps = {
    data: require('./data.json')
}

export default Dashboard;