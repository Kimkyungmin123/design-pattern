// Fruit class를 상속 받는 Apple class 추가

import fruit from "./fruit";

// Fruit 클래스 상속
export default class Apple extends fruit {
  // 부모 쿨래스의 추상 매서드인 price매서드를 추가해서 구현
  price(): void {
    console.log(`${this.name} 사과는 ${Math.ceil(this.cost * 1.2)}원 입니다.`);
  }
  // 생성자 추가
  constructor(name: string, cost: number) {
    super(name, cost);
  }
}
