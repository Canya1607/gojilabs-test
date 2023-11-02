export type Navigation = {
  navigate: (scene: string, params?: any) => void;
  addListener: (scene: string, func: () => void) => void;
  reset: (props: ResetProps) => void;
  goBack: () => void;
};

export type Route<T> = {
  key: string;
  name: string;
  params: T;
};
