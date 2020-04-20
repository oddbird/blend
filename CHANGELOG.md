# Blend Changelog

## v0.2.0 - UNRELEASED
- BREAKING: Remove over-complicated settings & output options for now.
  Focus on Sass <-> CIE functions.
- NEW: `lab($lab, $a)` returns an (sRGB) Sass color
- NEW: Inspect LCH/Lab values of a Sass color with
  - `lightness()`
  - `a()` and `b()`
  - `chroma()` and `hue()`
- NEW: `contrast()` selects the best contrast from a list
- NEW: `from()` converts a Sass color to LCH
  in order to adjust CIE lightness, chroma, and hue --
  using a syntax roughly based on
  [CSS Colors Level 5 relative syntax][relative]

[relative]: https://www.w3.org/TR/css-color-5/#relative-RGB

## v0.1.1 - 2020.05.06
- NEW: `lch($lch, $a)` returns an (sRGB) Sass color
- Various other now-removed things…
  ¯\\\_(ツ)_/¯ that's what pre-releases are for
