import Animal from "./animal";

export default class Cat extends Animal {
  // 부모 클래스의 sound라는 추상 매서드 추가
  sound(): void {
    console.log(`${this.name} 야옹`);
  }
  // 생성자 추가
  constructor(name: string) {
    super(name);
  }
}
