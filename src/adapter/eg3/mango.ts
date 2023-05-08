export default class Mango {
  private _name: string = "";
  private _cost: number = 0;

  set name(name: string) {
    this._name = name;
  }
  set cost(cost: number) {
    this._cost = cost;
  }

  get name(): string {
    return this._name;
  }

  get cost(): number {
    return this._cost;
  }

  tax(): number {
    return 1200;
  }
}
