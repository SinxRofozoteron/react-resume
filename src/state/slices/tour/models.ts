export type TourStep = {
  componentId: string;
  description: string;
  action: `on${string}`;
};

export type TourState = {
  tourId: string | null;
  activeStep?: TourStep;
};
