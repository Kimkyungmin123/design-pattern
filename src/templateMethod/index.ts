import Article from "./article";
import EditableDisplayArtile from "./editableDisplayArtile";
import SimpleDisplayArticle from "./simpleDisplayArticle";

const article = new Article("제목", ["내용1", "내용2", "내용3"], "완료");

const simpleDisplay = new SimpleDisplayArticle(article);
const editDisplay = new EditableDisplayArtile(article);

console.log(simpleDisplay.displayString());
console.log(editDisplay.displayString());
