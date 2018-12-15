import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginFrom from './components/LoginFrom';
import EmployeeList from '../src/components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit'




const RouterComponent = () => {

    return (
        <Router sceneStyle={{ paddingTop: 55 }}>

            <Scene key='auth'>
                <Scene key='login' component={LoginFrom} title='Login' />
            </Scene>


            <Scene key='main'>
                <Scene
                    onRight={() => Actions.employeeCreate()}
                    rightTitle='Add'
                    key='employeeList'
                    component={EmployeeList}
                    title='Employees'

                />
                <Scene key='employeeCreate' component={EmployeeCreate} title='CreateEmploye' />
                <Scene key='employeeEdit' component={EmployeeEdit} title='Edit Employee' />
            </Scene>



        </Router>
    )
}

export default RouterComponent


// initial