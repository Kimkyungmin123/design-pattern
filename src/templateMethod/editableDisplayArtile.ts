import Article from "./article";
import DisPlayArticleTemplate from "./displayArticleTemplate";

export default class EditableDisplayArtile extends DisPlayArticleTemplate {
  protected titleString(): string {
    return "수정" + this.article.getTitle();
  }
  protected contentString(): string {
    const items = this.article.getContent().map((item) => item);
    return items.join(" 수정,");
  }
  protected footerString(): string {
    return "수정" + this.article.getFooter();
  }
  constructor(article: Article) {
    super(article);
  }
}
