export default class Tiger {
  // Tiger 클래스는 private 접근자로 지정된 _name이라는 필드를 제공한다.
  private _name: string = "";

  // 이름 필드를 정의할 수 있는 get, set 매서드를 제공한다.

  set name(v: string) {
    this._name = v;
  }

  get name(): string {
    return this._name;
  }

  // 울음 소리를 문자열로 변환하는 메서드
  roar(): string {
    return "어흥";
  }
}
