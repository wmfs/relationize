# relationize
[![Tymly Package](https://img.shields.io/badge/tymly-package-blue.svg)](https://tymly.io/)
[![npm (scoped)](https://img.shields.io/npm/v/@wmfs/relationize.svg)](https://www.npmjs.com/package/@wmfs/relationize)
[![Build Status](https://travis-ci.org/wmfs/relationize.svg?branch=master)](https://travis-ci.org/wmfs/relationize)
[![codecov](https://codecov.io/gh/wmfs/relationize/branch/master/graph/badge.svg)](https://codecov.io/gh/wmfs/relationize)
[![CodeFactor](https://www.codefactor.io/repository/github/wmfs/relationize/badge)](https://www.codefactor.io/repository/github/wmfs/relationize)
[![Dependabot badge](https://img.shields.io/badge/Dependabot-active-brightgreen.svg)](https://dependabot.com/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/wmfs/tymly/blob/master/packages/pg-concat/LICENSE)




	
> Takes a set of JSON Schema definitions and returns a relational database structure capable of storing compliant data.

## <a name="install"></a>Install
```bash
$ npm install relationize --save
```

## <a name="usage"></a>Usage

```javascript
  const relationize = require('relationize')

  relationize (
    {
      source: {
        paths: [
          {
            namespace: 'relationizeTest',
            path: '/somewhere/json-schemas/live'
          }
        ]
      }
    },
    function (err, dbStructure) {
      // Done!
      // - The value of 'dbStructure' takes the same form  
      //   as the output generated by the 'pg-info' package.
    }
  )
```

## <a name="api"></a>API

### relationize(options, callback)

### Options:
| Option  | Type | Notes |
| ------  | ----- | ------ |
| `source`  | `object`  | A `source` object for configuring where to derive JSON Schema data from.

### `source` object

__Examples__

* From files:

```javascript
{
  paths: [
    {
      namespace: 'relationizeTest',
      path: '/somewhere/json-schemas/live'
    }
  ]
}
```

* From Javascript object:

```javascript
{
  schemas: [
    {
      namespace: 'relationizeTest',
      schema: {
        // JSON schema here
      }
    }
  ]
}
```

__Properties__

| property | Type  | Notes |
| -------- | ----- | ----- |
| `paths` | `[object]` | An array of objects containing a `namespace` property (used to separate related tables into schemas_ and `path` (a file-path from where to load JSON files from - uses [glob](https://www.npmjs.com/package/glob), so the `**` pattern is supported)
| `schemas` | `[object]` | An array of objects containing a `namespace` property (used to separate related tables into schemas_ and `schema` (a ready-to-use JSON Schema)



## <a name="output"></a>Output

Relationize returns objects of the same form as those returned by the __[pg-info](https://github.com/wmfs/pg-info)__ package.
The output of Relationize can then be used to generate a relational database (complete with comments, tables, indexes and foreign key constraints) to store your JSON-structured data.

* __Please refer to the [pg-info docs](https://github.com/wmfs/tymly/tree/master/packages/pg-info) for more details.__


## <a name="test"></a>Testing


```bash
$ npm test
```

## <a name="license"></a>License
[MIT](https://github.com/wmfs/relationize/blob/master/LICENSE)
