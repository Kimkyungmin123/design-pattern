import { Data, data } from "./data";

interface Attrs {
  name?: string;
  size?: number;
  brand?: string;
}

class Shoe {
  private _attrs: Attrs;

  constructor(attrs?: Attrs) {
    this._attrs = attrs || {};
  }
  getName() {
    return this._attrs?.name;
  }
  getSize() {
    return this._attrs?.size;
  }
  getBrand() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

// Shoe라는 base class를 상속받는다.
class Nike extends Shoe {}
class Adidas extends Shoe {}
class Puma extends Shoe {}

// factory class
class ShoeFactory {
  // 조건을 담당하는 object
  typeMap: { [key: string]: typeof Shoe } = {
    nike: Nike,
    puma: Puma,
    adidas: Adidas,
  };

  // 액션 함수, 객체 생성을 담당한다.
  // typeMap객체를 활용해서 어떤 타입에 class를 생성할 지 선택한 후에 Brand라는 변수에 저장하고
  // Brand 변수를 생성자 함수로 호출한다.

  create(props: Data) {
    try {
      const Brand = this.typeMap[props?.type?.toLowerCase()];
      return new Brand(props.attrs);
    } catch (e) {
      console.error("error creating new shoes", e);
    }
  }
}

// 실행
// this.typeMap[props?.type?.toLowerCase()];여기서 type이라는 값을 데이터에서 읽고,
// 그와 매칭되는 레퍼런스가 있는지 typeMap 객체에서 탐색을 하고 그에 상응하는 class를 가져온다.

// 그래서  const Brand = this.typeMap[props?.type?.toLowerCase()]; 이 시점에서 어떤 class를 생성할 건지
// 결정짓게 된다.

// test
// ShoeFactory에 대한 instance 생성
const factory = new ShoeFactory();
const nike1 = factory.create({
  type: "Nike",
  attrs: { name: "kkk", size: 260 },
});

console.log(nike1);
// Nike { _attrs: { name: 'kkk', size: 260 } } -> Nike class가 생성되었고 instance를 반환받았다.

// 상속된 함수들 test

console.log(nike1?.getBrand());
console.log(nike1?.getSize());

// factory 패턴 같은 경우는, js개발할 때 map 함수와 종종 사용이 된다.
// map 함수 이용한 test

const items = data.map((item) => factory.create(item));
console.log(items); // data를 바탕으로 각자 다른 타입의 class가 생성된 것을 볼 수 있다.

// 포인트
// 1. 팩토리 패턴은 생성자 카테고리에 속하는 패턴 중 가장 기본이 되는 패턴.
// 2. class객체 생성 처리를 팩토리 interface or 팩토리 class를 통해서 위임하여 처리한다.
// 3. 팩토리 class는 조건로직이 필요하다. 그래서 조건 로직에 따라 어떤 객체를 생성할 지 결정를 하게된다.
// 4. 팩토리 패턴의 특성상 class간의 의존도가 낮다. 그래서 확장이 쉽다. -> 추후 유지보수 용이
