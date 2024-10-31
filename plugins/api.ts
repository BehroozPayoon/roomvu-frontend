import { $fetch } from "ofetch";
import type { FetchOptions } from "ofetch";
import { defineNuxtPlugin } from "#app";
import PostModule from "~/repositories/modules/post";

/** ApiInstance interface provides us with good typing */
interface IApiInstance {
  post: PostModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const fetchOptions: FetchOptions = {
    // baseURL: nuxtApp.$config.apiBaseUrl,
    baseURL: "https://jsonplaceholder.typicode.com",
  };

  /** create a new instance of $fetcher with custom option */
  const apiFetcher = $fetch.create(fetchOptions);

  /** an object containing all repositories we need to expose */
  const modules: IApiInstance = {
    post: new PostModule(apiFetcher),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
