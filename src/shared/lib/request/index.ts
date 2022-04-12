// custom-instance.ts

const baseURL = '<BACKEND URL>'; // use your own URL here or environment variable

export const customInstance = async <T>({
  url,
  method,
  params,
  data,
  headers = {},
}: {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  params?: any;
  data?: any;
  responseType?: string;
  headers?: HeadersInit;
}): Promise<T> => {
  const response = await fetch(`${baseURL}${url}` + new URLSearchParams(params), {
    method,
    headers,
    ...(data ? { body: JSON.stringify(data) } : {}),
  });

  return response.json();
};

export default customInstance;
