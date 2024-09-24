class Fetcher {
  url;
  errorHandlers;
  init;

    constructor(url, init = {}) {
    this.url = url;
    this.errorHandlers = {};
    this.init = init;
  }

  setErrHandler(statusCode, handler) {
    this.errorHandlers[statusCode] = handler;
    return this;
  }

  async sfetch(callback) {
    return fetch(this.url, this.init).then((response) => {
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