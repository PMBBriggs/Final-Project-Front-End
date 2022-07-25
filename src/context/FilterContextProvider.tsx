import { useState, ReactNode } from "react";
import { FilterState } from "../models/Filters";
import FilterContext from "./FilterContext";
import FilterContextModel from "./FilterContext";

interface Props {
  children: ReactNode;
}

const FilterContextProvider = ({ children }: Props) => {
  const [filters, setFilters] = useState<FilterState>({
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
  });
  function updateTagsFilter(filter: "Single" | "Multi") {
    let copiedFilters = { ...filters };

    copiedFilters.tags[filter] = !copiedFilters.tags[filter];
    setFilters(copiedFilters);
  }
  function updateGenreFilter(
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
  ) {
    let copiedFilters = { ...filters };

    copiedFilters.genre[filter] = !copiedFilters.genre[filter];
    setFilters(copiedFilters);
  }
  function updatePlatformFilter(
    filter:
      | "PC"
      | "PlayStation"
      | "NintendoSwitch"
      | "Xbox"
      | "Gameboy"
      | "Nintendo64"
      | "NES"
  ) {
    let copiedFilters = { ...filters };

    copiedFilters.platform[filter] = !copiedFilters.platform[filter];
    setFilters(copiedFilters);
  }
  return (
    <FilterContext.Provider
      value={{
        filters,
        updatePlatformFilter,
        updateGenreFilter,
        updateTagsFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export default FilterContextProvider;
