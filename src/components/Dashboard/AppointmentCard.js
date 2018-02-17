import React, { Component } from 'react';
import { Card, Icon, Avatar, Modal, Button, Row, Col } from 'antd';

class AppointmentCard extends Component {
    state = {
        modalVisible: false,
    }
    closeModal = () => this.setState({modalVisible: false});
    openModal = () => this.setState({modalVisible: true});

    render() {
        const { info } = this.props;
        return (
            <div>
                <Card 
                    hoverable={true}
                    style={{marginBottom: 10}}
                    className={`${info.status}-card`}
                    onClick={this.openModal}
                >
                    <div className="card-title">
                        {info.user}
                    </div>
                    <div className="card-meta">
                        {info.time}
                    </div>
                    <div className="card-details">
                        {`${info.details.substr(0,90)}...`}
                    </div>
                    <div className="card-footer">
                        <div style={{fontWeight: 100, fontSize:13}}>Appointment with: </div>{info.appointmentWith}
                    </div>
                </Card>
                <Modal
                    title="Appointment Details"
                    visible={this.state.modalVisible}
                    onOk={this.closeModal}
                    onCancel={this.closeModal}
                    className={`${info.status}-card`}
                >
                    <AppointmentDetails info={info}/>
                </Modal>
            </div>
        );
    }
}

const AppointmentDetails = ({info}) => (
    <Row>
        <Col span={8}>
            Name: 
        </Col>
        <Col span={16} className="details-value">
            {info.user}
        </Col>
        <Col span={8}>
            Address: 
        </Col>
        <Col span={16} className="details-value">
            Old Baneshwor, Kathmandu, Nepal
        </Col>
        <Col span={8}>
            Contact No: 
        </Col>
        <Col span={16} className="details-value">
            9811934727, 9867274283
        </Col>
        <Col span={8}>
            Email: 
        </Col>
        <Col span={16} className="details-value">
            shivapandey2022@gmail.com
        </Col>
        <Col span={8}>
            Appointment Details: 
        </Col>
        <Col span={16} className="details-value">
            {info.details}
        </Col>
        <Col span={8}>
            Appointment With: 
        </Col>
        <Col span={16} className="details-value" style={{textTransform: 'capitalize'}}>
            {info.appointmentWith}
        </Col>
        <Col span={8}>
            Date/Time: 
        </Col>
        <Col span={16} className="details-value">
            {info.time}
        </Col>
    </Row>
)

AppointmentCard.defaultProps = {
    status: 'pending'
}

export default AppointmentCard;