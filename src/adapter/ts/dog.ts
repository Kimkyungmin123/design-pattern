//Animal class를 상속 받는 Dog class 추가

import Animal from "./animal";

// Animal 클래스 상속
export default class Dog extends Animal {
  // 부모 쿨래스의 추상 매서드인 sound매서드를 추가해서 구현
  sound(): void {
    console.log(`${this.name} 멍멍 `);
  }
  // 생성자 추가
  constructor(name: string) {
    super(name);
  }
}
