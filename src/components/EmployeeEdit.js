import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Button, Confirm } from './Common';
import EmplyoeeForm from './EmplyoeeForm';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, employeeDelete } from '../action'
import _ from 'lodash';
import Communications from 'react-native-communications';




class EmployeeEdit extends Component {

    state = { showModal: false }


    componentWillMount = () => {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        //  console.log(name, phone, shift) ;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }


    onTextPress() {
        const { phone, shift } = this.props;
        Communications.text(phone, `Your Upcomming Shift is on ${shift}`)
    }

    onAccept() {
        const { uid } = this.props.employee;
        this.props.employeeDelete({uid})
    }


    onDecline() {
        this.setState({ showModal: false });
    }


    render() {
        return (
            <Card>
                <EmplyoeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Cahnges
                     </Button>
                </CardSection>



                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)} >
                        Text Schedule
                    </Button>
                </CardSection>


                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Delete
                      </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are Your Sure
                   </Confirm>
            </Card>
        )
    }
}


const mapStateToProps = (state) => {

    const { name, phone, shift } = state.employeeFrom;
    return { name, phone, shift };

}

export default connect(mapStateToProps, {
    employeeSave, employeeUpdate, employeeDelete
})(EmployeeEdit)
