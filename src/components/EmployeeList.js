import _ from 'lodash';
import React, { Component } from 'react'
import { ListView } from 'react-native'
import { employeeFatch } from '../action'
import { connect } from 'react-redux';
import ListIteam from './ListIteam'


class EmployeeList extends Component {


  componentWillMount = () => {
    this.props.employeeFatch();

    this.createDataSource(this.props);
  }


  componentWillReceiveProps(nextProps) {
    //nextProps are the next set of props that this componenet will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps)
  }


  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);

  }


  renderRow(employee) {
    return <ListIteam employee={employee} />
  }


  render() {

    console.log(this.props)

    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}


const mapStatToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  })

  return { employees };
}

export default connect(mapStatToProps, { employeeFatch })(EmployeeList)