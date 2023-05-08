import EditableReturnNote from "./editableReturnNote";
import Note from "./note";
import SimpleReturnNote from "./simpleReturnNote";

const note = new Note("제목", ["내용1", "내용2", "내용3"], "완료");

const simpleDisplay = new SimpleReturnNote(note);
const editDisplay = new EditableReturnNote(note);

console.log(simpleDisplay.returnString());
console.log(editDisplay.returnString());
