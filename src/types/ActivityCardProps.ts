import { ReactNode } from "react";

export interface ActivityCardBaseProps {
  imageNode: ReactNode;
  title: string;
  description: ReactNode;
  summaryText: string;
}