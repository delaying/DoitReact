import React, { Component } from 'react';

function compose() {
  const funcArr = Array.prototype.slice.call(arguments);
  return funcArr.reduce(
    function (prevFunc, nextFunc) {
      return function () {
        const args = Array.prototype.slice.call(arguments);
        return nextFunc(prevFunc.apply(null, args));
      };
    },
    function (k) {
      return k;
    },
  );
}
[multiplyTwo, multiplyThree].reduce(
  function (prevFunc, netFunc) {
    return function (value) {};
  },
  function (k) {
    return k;
  },
);

work1(function (msg1) {
  console.log('done after 100ms: ' + msg1);
  work2(function (msg2) {
    console.log('done after 300ms : ' + msg2);
    work3(function (msg3) {
      console.log('done after 600ms:' + msg3);
    });
  });
});
urgentWork();

const work1and2 = () =>
  work1().then((msg1) => {
    console.log('done after 100ms: ' + msg1);
    return work2();
  });

work1and2()
  .then((msg2) => {
    console.log('done after 200ms:' + msg2);
    return work3();
  })
  .then((msg3) => {
    console.log('done after 600ms:' + msg3);
  });

function test() {
  return <div></div>;
}

export default test;
