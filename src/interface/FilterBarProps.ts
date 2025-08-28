export type FilterBarProps = {
  layout: "list" | "grid";
  filter: "active" | "all";
  toggleLayout: () => void;
  toggleFilter: () => void;
};
