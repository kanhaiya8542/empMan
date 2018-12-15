import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSectiion';
import { Button } from './Button';


const Confirm = ({ children, visible, onAccept, onDecline }) => {


    return (
        <Modal
            visible={visible}
            transparent
            animationType='slide'
            onRequestClose={() => { }}>
            <View style={styles.ContainerStyle}>
                <CardSection style={styles.CardSectionStyle}>
                    <Text style={styles.TestStyle}>{children}</Text>
                </CardSection>


                <CardSection>
                    <Button onPress={onAccept}>YES</Button>
                    <Button onPress={onDecline}>NO</Button>
                </CardSection>


            </View>
        </Modal>
    )

}


const styles = {
    CardSectionStyle: {
        justifyContent: 'center'
    },
    TestStyle: {
        flex: 1,
        fonstSize: 18,
        alignText: 'center',
        lineHeight: 40,
    },
    ContainerStyle: {
        backgroundColor: 'rgb(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    },
}

export { Confirm }
