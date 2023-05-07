// class diagram의 User 클래스는 Animal 클래스만을 사용하는데, 단순히 Animal 클래스를 사용하는 것이 전부이므로,
// User 클래스를 만드는 것 대신 이 파일에 절차 지향적 코드로 Animal 클래스를 사용하여 작성.

import Animal from "./animal";
import Cat from "./cat";
import Dog from "./dog";
import Tiger from "./tiger";
import TigerAdapter from "./tigerAdapter";

// Animal 클래스를 요소로 받는 배열 객체 정의
const list = Array<Animal>();

// 생성한 배열 객체에 Dog, Cat 객체를 만들어서 추가
list.push(new Dog("멍멍이"));
list.push(new Cat("야옹이"));
list.push(new Cat("나비"));

// 어뎁터 사용전

// Tiger 클래스를 Animal 클래스처럼 사용하기
// 먼저 tiger객체 생성

// const tiger = new Tiger();
// tiger.name = "호랑이";
// list.push(tiger) // Tiger 타입에 인지하는 Animal 타입의 파라미터에 할당할 수 없다고 에러

// -> TigerAdapter 클래스를 통해서 Tiger를 Animal 처럼 사용할 수 있도록 호환할 수 있다.

// tigerAdapter 사용해서 Tiger를 Animal처럼 사용하는 코드 작성

list.push(new TigerAdapter("호랑이"));

// 배열을 구성하는 모든 요소에 sound 매서드를 호출
list.forEach((animal) => {
  animal.sound();
});
