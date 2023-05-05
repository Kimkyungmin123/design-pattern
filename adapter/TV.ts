class TV implements SmartDevice {
  private _device: string;

  constructor() {
    this._device = "TV";
  }

  connect() {
    if (this.device) {
      console.log(`연결중: ${this.device}`);
      return true;
    }
    return false;
  }

  get device() {
    return this._device;
  }
}

export default TV;
