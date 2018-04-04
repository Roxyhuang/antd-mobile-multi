import React from 'react';
import { Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as homeActions from '../../../core/actions/homeActions';
import s from './list.less';


const mapStateToProps = (state) => {
  const { home } = state.state;
  return {
    state: {
      home,
    },
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { ...homeActions }, dispatch),
});

class ListB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  componentDidMount() {
    console.log(this.props.actions);
  }

  test() {
    console.log(this);
    this.props.actions.incrementAsync();
  }

  test2() {
    console.log(this);
    this.props.actions.decrementAsync();
  }

  render() {
    return (
      <div>
        <div className={s.listB}>B</div>
        <div>{this.props.state.home.number}</div>
        <Button onClick={this.props.actions.increment}>+1</Button>
        <Button onClick={this.props.actions.decrement}>-1</Button>
        <Button
          onClick={
            () => this.test()
          }
        >
          异步+1
        </Button>
        <Button
          onClick={
            () => this.test2()
          }
        >
          异步-1
        </Button>
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListB);
