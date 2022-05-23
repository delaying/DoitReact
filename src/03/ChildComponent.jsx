import React, { Component } from 'react';

class ChildComponent extends Component {
  render() {
    const { objValue } = this.props;

    return (
      <div>
        {/* 내장 함수 String()과 Object.entries()를 사용하여 객체를 문자열로 변환하여 출력함. */}
        <div>객체값: {String(object.entries(objValue))}</div>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  //객체 프로퍼티
  //   객체 프로퍼티의 자료형은 PropTypes의 shape를 사용하여 정의함.
  objValue: propTypes.shape({
    name: propTypes.string,
    age: propTypes.number,
  }),
};

export default ChildComponent;
