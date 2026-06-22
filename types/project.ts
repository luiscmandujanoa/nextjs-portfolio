export type Project = {
  id: string;
  name: string;
  description: string;
  stack: string[];
  repo: string;
  live?: string;
};
