<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# incrmmax

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute a moving maximum value incrementally.



<section class="usage">

## Usage

```javascript
import incrmmax from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mmax@esm/index.mjs';
```

#### incrmmax( window )

Returns an accumulator `function` which incrementally computes a moving maximum value. The `window` parameter defines the number of values over which to compute the moving maximum.

```javascript
var accumulator = incrmmax( 3 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated maximum value. If not provided an input value `x`, the accumulator function returns the current maximum value.

```javascript
var accumulator = incrmmax( 3 );

var m = accumulator();
// returns null

// Fill the window...
m = accumulator( 2.0 ); // [2.0]
// returns 2.0

m = accumulator( 1.0 ); // [2.0, 1.0]
// returns 2.0

m = accumulator( 3.0 ); // [2.0, 1.0, 3.0]
// returns 3.0

// Window begins sliding...
m = accumulator( -7.0 ); // [1.0, 3.0, -7.0]
// returns 3.0

m = accumulator( -5.0 ); // [3.0, -7.0, -5.0]
// returns 3.0

m = accumulator();
// returns 3.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import incrmmax from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mmax@esm/index.mjs';

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmmax( 5 );

// For each simulated datum, update the moving maximum...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    accumulator( v );
}
console.log( accumulator() );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-incr/max`][@stdlib/stats/incr/max]</span><span class="delimiter">: </span><span class="description">compute a maximum value incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mmidrange`][@stdlib/stats/incr/mmidrange]</span><span class="delimiter">: </span><span class="description">compute a moving mid-range incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mmin`][@stdlib/stats/incr/mmin]</span><span class="delimiter">: </span><span class="description">compute a moving minimum incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mrange`][@stdlib/stats/incr/mrange]</span><span class="delimiter">: </span><span class="description">compute a moving range incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/msummary`][@stdlib/stats/incr/msummary]</span><span class="delimiter">: </span><span class="description">compute a moving statistical summary incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-mmax.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-mmax

[test-image]: https://github.com/stdlib-js/stats-incr-mmax/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-incr-mmax/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-mmax/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-mmax?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-mmax.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-mmax/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-mmax/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-incr-mmax/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-incr-mmax/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-incr-mmax/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-mmax/main/LICENSE

<!-- <related-links> -->

[@stdlib/stats/incr/max]: https://github.com/stdlib-js/stats-incr-max/tree/esm

[@stdlib/stats/incr/mmidrange]: https://github.com/stdlib-js/stats-incr-mmidrange/tree/esm

[@stdlib/stats/incr/mmin]: https://github.com/stdlib-js/stats-incr-mmin/tree/esm

[@stdlib/stats/incr/mrange]: https://github.com/stdlib-js/stats-incr-mrange/tree/esm

[@stdlib/stats/incr/msummary]: https://github.com/stdlib-js/stats-incr-msummary/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
