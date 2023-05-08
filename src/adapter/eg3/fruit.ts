// 추상 클래스 이므로 class 앞에 abstract 키워드 추가
export default abstract class Fruit {
  // name이라는 필드 추가 - 생성자를 통해서 protected접근자로 name이라는 필드 추가
  constructor(protected name: string, protected cost: number) {}

  // price라는 추상 매서드가 필요하다.
  abstract price(): void;
}
