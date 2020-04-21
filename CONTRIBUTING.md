# Contributing to Blend

Ideas, issues, and pull-requests are welcome!

- [**Github Issues**](https://github.com/mirisuzanne/blend/issues/)
  are the best place to request a feature,
  file a bug,
  or just ask a question.
  Also a great place to discuss possible features
  before you submit a PR.
- **Pull Requests** are a big help,
  if you're willing to jump in and make things happen.
  For a bugfix, or documentation,
  just jump right in.
  For major changes or new features,
  it's best to discuss in an issue first.

## Process

Clone the repo, and then use yarn to install development dependencies
like Dart Sass, True, SassDoc, and Herman:

```
yarn
```

The primary codebase is in the `sass/` folder,
with matching tests in the `test/` directory.
Any major code changes should also update the tests/docs.

- `yarn test` will run the tests
- `yarn docs` will build the documentation site
- `yarn sass` will re-compile the code in `demo/`
  (mainly for experiments as you work)

## Conduct

Please follow the
[Sass Community Guidelines][guide]
and [Oddbird Code of Conduct][coc].

[guide]: https://sass-lang.com/community-guidelines
[coc]: https://www.oddbird.net/conduct/
