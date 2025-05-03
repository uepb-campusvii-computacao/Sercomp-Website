export interface CountdownValues {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export interface CountdownProps {
  eventStart: string;
  eventEnd: string;
}