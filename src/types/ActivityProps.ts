import { ReactNode } from "react";

export interface Speaker {
  speakerImage: string;
  speakerName: string;
}

export interface Activity {
  speakers: Speaker[];
  confirmedActivityTitle: string;
  confirmedActivityDescription: string;
  summaryText: string;
}

export interface ActivitySliderProps {
  activities: Activity[];
}