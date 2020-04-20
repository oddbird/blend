# Blend
_CSS color spaces for [Dart Sass][]…_

[Dart Sass]: https://sass-lang.com/dart-sass

CSS Color Module [Level 4][] & [Level 5][]
include several new CSS color formats,
new color-adjustment syntax,
and a contrast function.
**Blend** provides early access to many of these features,
while working with Sass colors.

[Level 4]: https://www.w3.org/TR/css-color-4/
[Level 5]: https://www.w3.org/TR/css-color-5/

Conversion math is adapted from js functions by
[Chris Lilley](https://svgees.us/)
and [Tab Atkins](https://www.xanthir.com/).

Note that conversion between color-spaces
requires gamut-adjustments and rounding.
While we use the same conversion math recommended for browsers,
pre-processing can result in slight variations in each step.
Converting a color from one format to another
and back again, may result in slight differences.

Also: CIE "lightness" and "hue" used in LCH/Lab
are different from sRGB "lightness" and "hue"
used in HSL/HWB.
The CIE versions are _perceptually uniform_,
making them more legible & predicatble
for automated adjustments.

```
npm install @mirisuzanne/blend --save-dev
```

## Usage

```scss
@use  '<path-to>/blend';

// (CIE) LCH & Lab color-conversion into (sRGB) sass colors
$cie-to-sass: (
  blend.lch(30% 50 300),
  blend.lab(60% -60 60),
  blend.lch(60% 75 120, 50%), // both accept alpha channel
  blend.lab(60% -60 60, 0.5), // as % or as fraction
);

// Based on the proposed Level 5 color-contrast() function
$contrast: (
  blend.contrast($color), // black or white for best contrast
  blend.contrast($color, maroon, rebeccapurple, cyan), // highest contrast
  blend.contrast($color, maroon, rebeccapurple, 4.5), // first contrast >= 4.5
);

// Inspect LCH & Lab values of Sass colors
$inspect: (
  blend.lightness($color), // different from hsl "lightness"
  blend.a($color),
  blend.b($color),
  blend.chroma($color),
  blend.hue($color), // different from hsl "hue"
);

// A rough interpretation of the Level 5 relative color syntax
$adjust: (
  blend.from($color, l, 20, h), // set chroma to 20
  blend.from($color, l, c, h -60), // linear adjustments to a channel
  blend.from($color, l 50%, c, h), // relative scale, e.g. "half-way to white"
  blend.from($color, 2l, c, h), // multiply the channel value
);
```

## Todo

The initial version is mostly focused on CIE colors,
but Level 4 includes an array of new formats.
We're working on it…

```scss
@use  'blend';

$new-formats: (
  blend.hwb(120deg 15% 15%),
  blend.color(display-p3 0.728 0.2824 0.4581),
  blend.color(rec-2020 0.6431 0.2955 0.4324),
  ...,
);

$from-sass: (
  blend.get($color, 'lch'),
  blend.get($color, 'lab'),
  blend.get($color, 'display-p3'),
  ...,
);

$output: (
  blend.string($color, 'lch'),
  blend.string($color, 'lab'),
  blend.string($color, 'display-p3'),
  ...,
);
```
