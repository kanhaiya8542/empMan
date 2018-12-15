import React, { Component } from 'react'
import { Text, View, Picker } from 'react-native'
import { CardSection, Input, } from './Common'
import { connect } from 'react-redux';
import { employeeUpdate,  } from '../action'



export class EmplyoeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label='Name'
                        placeholder='Deo'
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                        value={this.props.name}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Phone'
                        placeholder='+91 9529-74-1079'
                        onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
                        value={this.props.phone}
                    />
                </CardSection>

                <CardSection style={{}}>
                    <Text style={styles.pickerTextStyle}>Shift </Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
                    >
                        <Picker.Item label='Monday' value='Mon' />
                        <Picker.Item label='Tuesday' value='Tue' />
                        <Picker.Item label='Wednesday' value='Wed' />
                        <Picker.Item label='Thursday' value='Thu' />
                        <Picker.Item label='Friday' value='Fri' />
                        <Picker.Item label='Saturday' value='Sat' />
                        <Picker.Item label='Sunday' value='Sun' />
                    </Picker>
                </CardSection>



            </View>
        )
    }
}


const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}


const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeFrom;
    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmplyoeeForm)
