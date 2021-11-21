export default class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async fetch(url, option) {
    const response = await fetch(`${this.baseURL}${url}`, {
      ...option,
      header: {
        'Content-Type': 'application/json',
        ...option.header,
      }
    });
    let data;
    try {
      data = await response.json();
    } catch(error) {
      console.error(error);
    }

    if(response.status > 299 || response.status < 200) {
      const message = data && data.message ? data.message : 'Something went wrong! 😅';
      throw new Error(message);
    }

    return data;
  }

}