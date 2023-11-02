export type CreateEntry = {
  name: string;
  priority: number;
  status: number; // 0 - Ran Out; 1 - Have
};

export type Entry = CreateEntry & {
  id: string;
  changesDate: string[];
};

export type UpdateEntry = CreateEntry & {
  id: string;
};
