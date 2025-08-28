import type { FilterBarProps } from "../interface/FilterBarProps.ts";

export function FilterBar({
  layout,
  filter,
  toggleLayout,
  toggleFilter,
}: FilterBarProps) {
  return (
    <div>
      <button onClick={toggleLayout}>
        {layout === "list" ? "Switch to Grid" : "Switch to List"}
      </button>
      <button onClick={toggleFilter}>
        {filter === "all" ? "Show Active Only" : "Show All"}
      </button>
    </div>
  );
}
