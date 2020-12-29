// @flow
import { ALIGNS, JUSTIFY, DIRECTIONS } from "./consts";

export const formatCSS = (key: string, value: string): string => `${key}: ${value};`;

export const getAlign = (align: "start" | "end" | "center" | "stretch") => {
  const tokens = {
    [ALIGNS.START]: "flex-start",
    [ALIGNS.END]: "flex-end",
    [ALIGNS.CENTER]: "center",
    [ALIGNS.STRETCH]: "stretch",
    [ALIGNS.BASELINE]: "baseline",
  };
  return align && tokens[align];
};

export const getJustify = (justify: "start" | "center" | "end" | "between" | "around") => {
  const tokens = {
    [JUSTIFY.START]: "flex-start",
    [JUSTIFY.END]: "flex-end",
    [JUSTIFY.CENTER]: "center",
    [JUSTIFY.BETWEEN]: "space-between",
    [JUSTIFY.AROUND]: "space-around",
  };
  return justify && tokens[justify];
};

export const getDirection = (direction: "row" | "row-reverse" | "column" | "column-reverse") => {
  return Object.values(DIRECTIONS).indexOf(direction) !== -1 ? direction : DIRECTIONS.ROW;
};

type Property = number | boolean | string | { [key: string]: Property };

export const isDefined = (prop: ?Property) => typeof prop !== "undefined";

export const getGrow = (grow: string | boolean) => {
  if (isDefined(grow)) return grow ? "1" : "0";
  return "";
};

export const getShrink = (shrink: string | boolean) => {
  if (isDefined(shrink)) return shrink ? "1" : "0";
  return "";
};

export const getWrap = (wrap: string | boolean) => {
  if (isDefined(wrap)) return wrap ? "wrap" : "nowrap";
  return "";
};
