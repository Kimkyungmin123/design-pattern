import NoteTemplate from "./noteTemplate";
import Note from "./note";

export default class EditableReturnNote extends NoteTemplate {
  protected title(): string {
    return "수정" + this.note.getTitle();
  }
  protected content(): string {
    const items = this.note.getContent().map((item) => `${item} 수정`);
    return items.join(" ,");
  }
  protected footer(): string {
    return "수정" + this.note.getFooter();
  }
  constructor(note: Note) {
    super(note);
  }
}
