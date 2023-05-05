interface Monitor {
  makeConnection(): void;
  getDeviceName(): string;
}
class Monitor implements Monitor {
  private _device: string;

  constructor() {
    this._device = "Monitor";
  }

  makeConnection() {
    console.log(`연결중: ${this.getDeviceName()}`);
  }

  getDeviceName() {
    return this._device;
  }
}

export default Monitor;
