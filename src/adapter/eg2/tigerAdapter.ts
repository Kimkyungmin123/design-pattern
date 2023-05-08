// tiger 클래스를 Dog, Cat 처럼 Animal 클래스 타입처럼 사용하기 위해 TigerAdapter 클래스 추가

import Animal from "./animal";
import Tiger from "./tiger";

export default class TigerAdapter extends Animal {
  // 3. tiger 필드 추가
  private tiger: Tiger;

  // 2. 생성자 추가
  constructor(name: string) {
    super(name);

    //4. 생성자 코드 추가
    this.tiger = new Tiger();
    this.tiger.name = name;
  }

  // 1. Animal의 추상 매서드인 sound에 대한 매서드 추가
  sound(): void {
    console.log(`${this.tiger.name}가 ${this.tiger.roar()}`);
    // tiger 의 roar 매서드를 호출해서 tiger 객체가 내는 소리 문자열 받아서 출력
  }
}
