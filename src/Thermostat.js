'use strict';

class Thermostat{
  constructor() {
    this.DEFAULT_TEMPERATURE = 20
    this.MINIMUM_TEMPERATURE = 10;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this._temperature = this.DEFAULT_TEMPERATURE;
    this.powerSavingMode = true;
  };
  getCurrentTemperature() {
    return this._temperature;
  };

  up() {
    if(this.isMaximumTemperature()) {
      return;
    }
    this._temperature += 1 ;
  };

  down() {
    if (this.isMinimumTemperature()) {
      return;
      } {
      this._temperature -= 1;
    };
  };

  resetTemperature() {
    this._temperature = this.DEFAULT_TEMPERATURE;
  };

  isMaximumTemperature() {
    if (this.PowerSavingModeIsOn() === false) {
      return this._temperature === this.MAX_LIMIT_PSM_OFF ;
    }
    return this._temperature === this.MAX_LIMIT_PSM_ON;
  };

  isMinimumTemperature() {
    return(this._temperature === this.MINIMUM_TEMPERATURE);
  };

  PowerSavingModeIsOn() {
    return this.powerSavingMode === true;
  };

  turnoffSavingMode() {
    this.powerSavingMode = false;
  };

  turnOnSavingMode() {
    this.powerSavingMode = true;
  };

  energyUsage() {
    if(this._temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'low-usage';
    }
    if(this._temperature <= this.MAX_LIMIT_PSM_ON) {
      return 'medium-usage';
    }
    return 'high-usage';
  };

};