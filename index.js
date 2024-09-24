class Fetcher {
  url;
  errorHandlers;

  constructor(url) {
    this.url = url;
    this.errorHandlers = {};
  }

  setErrHandler(statusCode, handler) {
    this.errorHandlers[statusCode] = handler;
    return this;
  }

  async sfetch(callback) {
    return fetch(this.url).then((response) => {
      if (response.ok) {
        return response.json().then((data) => callback(data));
      } else {
        const error = new Error(response.statusText);
        const errorHandler = this.errorHandlers[response.status];

        if (this.errorHandlers[response.status]) {
          errorHandler(error);
        } else {
          throw error;
        }
      }
    });
  }
}

module.exports = Fetcher;