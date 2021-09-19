# Blend Changelog

## v0.2.3 - 2021.09.18

- Correction to the sRGB to XYZ to sRGB matrices, improve round-tripping
  (based on [CSSWG update](https://github.com/w3c/csswg-drafts/issues/5922))
- Update to use `math.div()` in place of
  [slash as division](https://sass-lang.com/documentation/breaking-changes/slash-div)

## v0.2.2 - 2020.06.30

- Documentation cleanup
- Upgraded dev dependencies

## v0.2.1 - 2020.05.28

- Updated license to The Hippocratic License 2.1
- Documentation cleanup

## v0.2.0 - 2020.05.27

- **BREAKING**: Moved project to [oddbird/blend][repo] on GitHub,
  and [@oddbird/blend][pkg] on NPM.
- **BREAKING**: Remove over-complicated settings & output options for now.
  Focus on practical Sass conversion to and from CIE functions.
- **NEW**: `lch()` hue channel accepts any angle unit
  (e.g. `turn`, `rad`, `grad`, or `deg`)
- **NEW**: `lab($lab, $a)` returns an (sRGB) Sass color
- **NEW**: Inspect LCH/Lab values of a Sass color with
  - `lightness()`
  - `a()` and `b()`
  - `chroma()` and `hue()`
- **NEW**: `contrast()` selects the best contrast from a list
- **NEW**: Generate new colors based on relative LCH & Lab adjustments:
  - `set()` to replace a channel value
  - `adjust()` to add or subtract from a channel
  - `scale()` to scale fluidly towards one "end" of the channel range
- **NEW**: `from()` converts a Sass color to LCH
  in order to adjust CIE lightness, chroma, and hue --
  using a syntax roughly based on
  [CSS Colors Level 5 relative syntax][relative]

[pkg]: https://www.npmjs.com/package/@oddbird/blend
[repo]: https://github.com/oddbird/blend/
[relative]: https://www.w3.org/TR/css-color-5/#relative-RGB

## v0.1.1 - 2020.05.06

- **NEW**: `lch($lch, $a)` returns an (sRGB) Sass color
- Various other now-removed things…
  ¯\\\_(ツ)\_/¯ that's what pre-releases are for
