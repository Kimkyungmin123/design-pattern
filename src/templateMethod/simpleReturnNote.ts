// NoteTemplate 추상 클래스를 구현하는 SimpleReturnNote 클래스

import NoteTemplate from "./noteTemplate";
import Note from "./note";

export default class SimpleReturnNote extends NoteTemplate {
  protected title(): string {
    return this.note.getTitle();
  }
  protected content(): string {
    const items = this.note.getContent().map((item) => item);
    return items.join(",");
  }
  protected footer(): string {
    return this.note.getFooter();
  }
  // 생성자 코드 입력
  constructor(note: Note) {
    // 부모 클래스의 생성자를 호출하기 위해 super 키워드를 입력해서 호출
    super(note);
  }

  // NoteTemplate에 3개의 추상 매서드를 입력한다.
}
