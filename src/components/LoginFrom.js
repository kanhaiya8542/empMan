import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import { Card, CardSection, Button, Input,Spinner } from './Common';
import { connect } from 'react-redux';
import { emailChange, passwordChanged, loginUser,  } from '../action'

class LoginFrom extends Component {


    onEmailChange(text) {
        this.props.emailChange(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onPressButton() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }


    renderButton() {
        if (this.props.loading) {
            return <Spinner size='large' />;
        } return (
            <Button onPress={this.onPressButton.bind(this)}>
                Login
                  </Button>
        )


    }

    render() {
        console.log(this.props)
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="abc@email.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>


                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>


            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}


const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth

    return { email, password, error, loading };

}

export default connect(mapStateToProps, {
    emailChange,
    passwordChanged, loginUser
})(LoginFrom)