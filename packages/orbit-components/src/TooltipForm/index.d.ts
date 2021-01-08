// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";
import * as Common from "../common/common";
import { Dimensions as PositionRaw } from "../utils/boundingClientRect";

declare module "@kiwicom/orbit-components/lib/TooltipForm";

type Position = "right" | "left" | "top" | "bottom";
type Align = "center" | "start" | "end";

export interface Props extends Common.Global, Common.SpaceAfter {
  readonly error?: React.ReactNode;
  readonly help?: React.ReactNode;
  readonly prefferedPosition: Position;
  readonly prefferdAlign: Align;
  readonly iconRef?: Common.Ref;
  readonly inlineLabel?: boolean;
}

export interface Dimensions {
  readonly set: boolean;
  readonly bounding: PositionRaw;
  readonly iconBounding: PositionRaw;
}

declare const TooltipForm: React.FC<Props>;
export { TooltipForm, TooltipForm as default };
