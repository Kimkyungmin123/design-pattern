import Monitor from "./Monitor";

interface SmartDevice {
  connect(): boolean;
  device: string;
}

class MonitorAdapter implements SmartDevice {
  private _target;

  constructor(target: Monitor) {
    this._target = target;
  }

  connect() {
    //변환 작업
    this._target.makeConnection();
    return true;
  }

  get device() {
    //변환 작업
    return this._target.getDeviceName();
  }
}
export default MonitorAdapter;
