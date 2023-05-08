import fruit from "./fruit";

export default class Banana extends fruit {
  // 부모 클래스의 price라는 추상 매서드 추가
  price(): void {
    console.log(
      `${this.name} 바나나는 ${Math.ceil(this.cost * 1.1)}원 입니다.`
    );
  }
  // 생성자 추가
  constructor(name: string, cost: number) {
    super(name, cost);
  }
}
