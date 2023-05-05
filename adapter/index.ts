import TV from "./TV";

import Monitor from "./Monitor"; // 다른 vendor device
import MonitorAdapter from "./MonitorAdapter";
import Speaker from "./Speaker";

class SmartHomeClient {
  addConnection(device: SmartDevice) {
    try {
      device.connect();
      console.log(`연결 완료 ${device.device}`);
    } catch {
      console.error(`에러: ${device.constructor.name} 연결에 실패 하였습니다`);
    }
  }
}

const smartHomeClient = new SmartHomeClient();

smartHomeClient.addConnection(new TV());
smartHomeClient.addConnection(new Speaker());
smartHomeClient.addConnection(new MonitorAdapter(new Monitor()));
