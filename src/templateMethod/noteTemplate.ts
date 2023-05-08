// 각 단계에 실행 순서에 대한 템플릿을 제공하는 추상 클래스

import Note from "./note";

// 추상 클래스이므로 abstract 키워드 입력하기
export default abstract class NoteTemplate {
  // 파생 클래스에서 접근할 수 있도록 protected 접근자로 지정
  constructor(protected note: Note) {}

  // 각 단계를 정해진 순서대로 호출해주는 template 메서드 추가
  // readonly, arrow function 을 사용해서 파생 클래스에서는  returnString메서드를 재정의 할 수 없도록 함.
  // 이렇게 파생 클래스에서 코드를 변경하지 못하도록 막으면, 좀 더 코드가 견고해지지만,
  // 이를 지원하지 않는 언어에서는 굳이 이렇게 하지 않아도 됨.

  public readonly returnString = () => {
    return [this.title(), this.content(), this.footer()];
  };

  // titleString, contentString, footerString 매서드를 구현이 없는 추상 매서드로 선언
  protected abstract title(): string;
  protected abstract content(): string;
  protected abstract footer(): string;
}
