// DisplayArticleTemplate 추상 클래스를 구현하는 SimpleDisplayArticle 클래스

import Article from "./article";
import DisPlayArticleTemplate from "./displayArticleTemplate";

export default class SimpleDisplayArticle extends DisPlayArticleTemplate {
  protected titleString(): string {
    return this.article.getTitle();
  }
  protected contentString(): string {
    const items = this.article.getContent().map((item) => item);
    return items.join(",");
  }
  protected footerString(): string {
    return this.article.getFooter();
  }
  // 생성자 코드 입력
  constructor(article: Article) {
    // 부모 클래스의 생성자를 호출하기 위해 super 키워드를 입력해서 호출
    super(article);
  }

  // DisPlayArticleTemplate에 3개의 추상 매서드를 입력한다.
}
