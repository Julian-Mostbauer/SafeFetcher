# SafeFetcher

SafeFetcher is an npm package that provides an abstraction for easier error handling when using the `fetch` API. It simplifies the process of making HTTP requests and handling errors gracefully.

## Installation

You can install SafeFetcher using npm:

```bash
npm install safefetcher
```

## Usage

Here's a basic example of how to use SafeFetcher:

```javascript
const SafeFetcher = require('safefetcher');

const fetcher = new SafeFetcher("https://jsonplaceholder.typicode.com/todos/-1")
    .setErrHandl(404, (error) => {
      console.error("404 error");
    })
    .setErrHandl(500, (error) => {
      console.error("500 error");
    });

  fetcher.sfetch((data) => {
    console.log(data);
  });

```

## Features

- Simplified error handling for `fetch` requests
- Easy to integrate into existing projects
- Lightweight and dependency-free

## API

### `SafeFetcher.sfetch(url, callback)`

Performs a fetch request and handles errors.

- `url` (string): The URL to fetch.
- `callback` ((object) => void): Callback that will be performed on the resulting data, only if it succeds.

Returns a Promise that resolves to the response object.

## Contributing

Contributions from outside sources are not neccesary. This is a small project

## License

This project is licensed under the Apache-2.0 License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, feel free to open an issue or contact the maintainer.
