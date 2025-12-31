import * as Core from "@strudel/core";
import * as Draw from "@strudel/draw";
import * as Transpiler from "@strudel/transpiler";
import * as Webaudio from "@strudel/webaudio";
import * as Mini from "@strudel/mini";
import * as Soundfonts from "@strudel/soundfonts";
import * as Nano from "@nanostores/persistent";
import * as Highlight from "@lezer/highlight";

export const StrudelLib = {
  core: Core,
  draw: Draw,
  webaudio: Webaudio,
  transpiler: Transpiler,
  mini: Mini,
  soundfonts: Soundfonts,
  nano: Nano,
  highlight: Highlight
};
