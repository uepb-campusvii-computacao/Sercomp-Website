import { ReactNode } from "react";

export interface DateConditionalProps {
    until: string | Date;
    renderIfTrue: ReactNode;
    renderIfFalse: ReactNode;
  }