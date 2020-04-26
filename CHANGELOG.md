# Blend Changelog

## v0.2.0 - UNRELEASED
- BREAKING: Remove over-complicated settings & output options for now.
  Focus on Sass <-> CIE functions.
- NEW: `lch()` hue channel accepts any angle unit
  (e.g. `turn`, `rad`, `grad`, or `deg`)
- NEW: `lab($lab, $a)` returns an (sRGB) Sass color
- NEW: Inspect LCH/Lab values of a Sass color with
  - `lightness()`
  - `a()` and `b()`
  - `chroma()` and `hue()`
- NEW: `contrast()` selects the best contrast from a list
- NEW: Generate new colors based on relative LCH & Lab adjustments:
  - `set()` to replace a channel value
  - `adjust()` to add or subtract from a channel
  - `scale()` to scale fluidly towards one "end" of the channel range
- NEW: `from()` converts a Sass color to LCH
  in order to adjust CIE lightness, chroma, and hue --
  using a syntax roughly based on
  [CSS Colors Level 5 relative syntax][relative]

[relative]: https://www.w3.org/TR/css-color-5/#relative-RGB

## v0.1.1 - 2020.05.06
- NEW: `lch($lch, $a)` returns an (sRGB) Sass color
- Various other now-removed things…
  ¯\\\_(ツ)_/¯ that's what pre-releases are for
