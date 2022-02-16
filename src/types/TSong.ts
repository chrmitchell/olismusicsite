export type TSong = {
  title: string;
};

export enum TSongId {
  radHeroineBallet = "radHeroineBallet",
  tinyStreetFeels = "tinyStreetFeels",
}

const songs: Record<TSongId, TSong> = {
  radHeroineBallet: { title: "Rad Heroine Ballet" },
  tinyStreetFeels: { title: "Tiny Street Feels" },
};
