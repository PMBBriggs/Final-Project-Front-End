import { createContext } from "react";
import { Genre, Platform, Tag } from "../models/Details";
import { FilterState } from "../models/Filters";

interface FilterContextModel {
  filters: FilterState;
  updatePlatformFilter: (
    filter:
      | "PC"
      | "PlayStation"
      | "NintendoSwitch"
      | "Xbox"
      | "Gameboy"
      | "Nintendo64"
      | "NES"
  ) => void;
  updateGenreFilter: (
    filter:
      | "Action"
      | "Adventure"
      | "Casual"
      | "fighting"
      | "Racing"
      | "RealTimeStrategy"
      | "RolePlaying"
      | "Simulation"
      | "Sport"
  ) => void;
  updateTagsFilter: (filter: "Single" | "Multi") => void;
}

const defaultValues: FilterContextModel = {
  filters: {
    platform: {
      PC: false,
      PlayStation: false,
      NintendoSwitch: false,
      Xbox: false,
      Gameboy: false,
      Nintendo64: false,
      NES: false,
    },
    genre: {
      Action: false,
      Adventure: false,
      Casual: false,
      fighting: false,
      Racing: false,
      RolePlaying: false,
      RealTimeStrategy: false,
      Simulation: false,
      Sport: false,
    },
    tags: {
      Single: false,
      Multi: false,
    },
  },
  updatePlatformFilter: function (
    filter:
      | "PC"
      | "PlayStation"
      | "NintendoSwitch"
      | "Xbox"
      | "Gameboy"
      | "Nintendo64"
      | "NES"
  ) {},
  updateGenreFilter: function (
    filter:
      | "Action"
      | "Adventure"
      | "Casual"
      | "fighting"
      | "Racing"
      | "RealTimeStrategy"
      | "RolePlaying"
      | "Simulation"
      | "Sport"
  ) {},
  updateTagsFilter: function (filter: "Single" | "Multi") {},
};

const FilterContext = createContext(defaultValues);

export default FilterContext;
