import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreates } from '../action'
import { Card, CardSection, Button } from './Common'
import   EmplyoeeForm  from './EmplyoeeForm'

export class EmployeeCreate extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props

        this.props.employeeCreates({ name, phone, shift: shift || 'Monday' });

    }



    render() {
        return (
            <Card>

                <EmplyoeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                        </Button>
                </CardSection>
            </Card>

        )
    }
}

// const styles = {
//     pickerTextStyle: {
//         fontSize: 18,
//         paddingLeft: 20
//     }
// }

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeFrom;
    return { name, phone, shift }
}


export default connect(mapStateToProps, {
    employeeUpdate, employeeCreates
})
    (EmployeeCreate)
