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

```

## Features

- Simplified error handling for `fetch` requests
- Easy to integrate into existing projects
- Lightweight and dependency-free

## API

### `SafeFetcher.fetch(url, options)`

Performs a fetch request and handles errors.

- `url` (string): The URL to fetch.
- `options` (object): Optional settings that you want to apply to the request.

Returns a Promise that resolves to the response object.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the Apache-2.0 License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, feel free to open an issue or contact the maintainer.
