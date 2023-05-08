// class diagram의 User 클래스는 Fruit 클래스만을 사용하는데, 단순히 Fruit 클래스를 사용하는 것이 전부이므로,
// User 클래스를 만드는 것 대신 이 파일에 절차 지향적 코드로 Fruit 클래스를 사용하여 작성.

import Apple from "./apple";
import Banana from "./banana";
import Fruit from "./fruit";
import Mango from "./mango";
import MangoAdapter from "./mangoAdapter";

const list = Array<Fruit>();

list.push(new Apple("A-1", 1500));
list.push(new Banana("B-1", 1300));
list.push(new Banana("B-3", 1500));

// 어뎁터 사용전

// const mango = new Mango();
// mango.name = "M-2";
// mango.cost = 2000;

// list.push(mango); // Mango 타입에 인지하는 Fruit 타입의 파라미터에 할당할 수 없다고 에러

list.push(new MangoAdapter("m-1", 2000));

list.forEach((fruit) => {
  fruit.price();
});
