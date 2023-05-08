//  Mango 클래스를 Apple, Manana 처럼  Fruit 클래스 타입처럼 사용하기 위해 MangoAdapter 클래스 추가

import fruit from "./fruit";
import Mango from "./mango";

export default class MangoAdapter extends fruit {
  // 3. mango 필드 추가
  private mango: Mango;

  // 2. 생성자 추가
  constructor(name: string, cost: number) {
    super(name, cost);

    //4. 생성자 코드 추가
    this.mango = new Mango();
    this.mango.name = name;
    this.mango.cost = cost;
  }

  // 1. Fruit의 추상 매서드인 price에 대한 매서드 추가
  price(): void {
    console.log(
      `${this.mango.name} 망고는 ${
        Math.ceil(this.mango.cost * 1.4) + this.mango.tax()
      }원 입니다.`
    );
    // Mango 의 tax 매서드를 호출해서 Mango 객체의 텍스 받아서 출력
  }
}
