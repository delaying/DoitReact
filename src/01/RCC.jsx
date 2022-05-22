import React, { Component } from 'react';

class Shape {
  static create(x, y) {
    return new Shape(x, y);
  }
  name = 'Shape';
  constructor(x, y) {
    this.move(x, y);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
  area() {
    return 0;
  }
}
let s = new Shape(0, 0);
s.area(); // 0

class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }
  area() {
    if (this.radius === 0) return super.area();
    return this.radius * this.radius;
  }
}
let c = new Circle(0, 0, 10);
c.area(); //100

function parse(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');
  let reuslt = {};
  chunks.forEach((chunk) => {
    const parts = chunk.split('=');
    const key = parts[0];
    const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    reuslt[key] = value;
  });
  return reuslt;
}

class RCC extends Component {
  render() {
    let text = '';

    return <div name="name">{text}</div>;
  }
}

export default RCC;
