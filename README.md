# blend
More color spaces for [Dart Sass][]…

**Very much a work in progress.**
Based heavily on js functions by
[Chris Lilley](https://svgees.us/)
and [Tab Atkins](https://www.xanthir.com/).

[Dart Sass]: https://sass-lang.com/dart-sass

```
npm install @mirisuzanne/blend --save-dev
```

## Usage

So far, there is very little user-facing API,
and basically no documentation,
but we'll get that fixed.
Here are the basics:

```scss
@use '<path/to>/blend';

main {
  // returns a Sass `color`
  color: blend.lch(65% 75 0);

  // optional alpha value
  background: blend.lch(10% 15 280, 85%);
}
```

There are two settings:

**`$gamut-correct`**

- `true` [default]: Chroma is reduced until in-gamut
- `false`: Individual RGB channels will be clipped
- `null`: Return `null` for out-of-gamut colors

**`$string-output`**

- `false` [default]: Primary functions return a Sass color value
- `true`: Primary functions return a CSS `rgb(r g b / a)` string

```scss
@use '<path/to>/blend' with (
  $gamut-correct: true,
  $string-output: false,
);
```

If you want more explicit control,
use `<path/to>/blend/sass/lab/lch`,
and access functions directly:

- `lch.to-rgb()` does the conversion math on an array of channels
- `lch.in-gamut()` returns either the converted channels
  or `null` for out-of-gamut colors
- `lch.gamut-correct()` uses chroma-reduction to get a color in-gamut
- `lch.value()` takes LCH input and returns a Sass color
  based on the chosen form of gamut-correction,
  or a css-output string in the format `rgb(r% g% b% / a%)`

## Development & Testing

```
git clone git@github.com:mirisuzanne/blend.git
cd blend
yarn
```

The demo html & sass are in `demo/`.

- Change the values of `$channels` and `$range`
  to generate a new gradient
- Play with `blend.lch($lch, $a)`
  for direct access to colors
- `yarn sass` to compile (gradients take ~6s)
- `yarn test` to run the tests


## ToDo:

- [ ] Option to return CSS string rather than Sass color
- [ ] Other color spaces
- [ ] Documentation
