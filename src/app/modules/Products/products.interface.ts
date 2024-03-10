export type TProducts = {
  name: string;
  price: number;
  quantity: number;
  sportType?: string;
  brand?: string;
  size?: string;
  material?: string;
  color?: string;
  condition?: "new" | "used";
  weight?: number;
  style?: string;
};

export type SportsItemFilters = {
  name?: string;
  sportType?: string;
  brand?: string;
  size?: string;
  minPrice?: number;
  maxPrice?: number;
  material?: string;
  color?: string;
  condition?: "new" | "used";
  weight?: number;
  style?: string;
};
