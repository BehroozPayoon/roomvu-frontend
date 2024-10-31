import type { $Fetch } from "ofetch";

class HttpFactory {
  private $fetch: $Fetch;

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher;
  }

  async call<T>(
    method: string,
    url: string,
    data?: object,
    extras = {}
  ): Promise<T> {
    const $res: T = await this.$fetch(url, {
      method,
      body: data,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return $res;
  }

  getHeaders(): { [key: string]: any } {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }
}

export default HttpFactory;
