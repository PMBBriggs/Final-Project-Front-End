export interface FilterState {
  platform: {
    PlayStation: boolean;
    PC: boolean;
    NintendoSwitch: boolean;
    Xbox: boolean;
    Gameboy: boolean;
    Nintendo64: boolean;
    NES: boolean;
  };
  genre: {
    Action: boolean;
    Adventure: boolean;
    Casual: boolean;
    fighting: boolean;
    Racing: boolean;
    RealTimeStrategy: boolean;
    RolePlaying: boolean;
    Simulation: boolean;
    Sport: boolean;
  };
  tags: {
    Single: boolean;
    Multi: boolean;
  };
}
