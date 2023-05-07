// 출력할 데이터 제공
export default class Article {
  constructor(
    private title: string,
    private content: string[],
    private footer: string
  ) {}

  public getTitle(): string {
    return this.title;
  }

  public getContent(): string[] {
    return this.content;
  }

  public getFooter(): string {
    return this.footer;
  }
}
