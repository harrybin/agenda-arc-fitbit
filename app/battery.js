import document from "document";
import { battery } from "power";

export default class Battery {
  static instance = new Battery();

  constructor() {
    this.txtBattery = document.getElementById("battery");
  }

  refresh() {
    let batteryChargeLevel = Math.floor(battery.chargeLevel);
    this.txtBattery.text = `⚡${batteryChargeLevel}`;
  }

  static run() {
    let batteryHandler = Battery.instance;

    batteryHandler.refresh();

    battery.onchange = function () {
      batteryHandler.refresh();
    };
  }
}
