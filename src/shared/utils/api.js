// Dependencies
import 'isomorphic-fetch';
import queryString from 'query-string';

export function apiEndpoint(endpoint, qs, fetchingFrom) {
  let query = '';
  let apiUrl = '';

  if (qs) {
    query = `?${qs}`;
  }

  if (fetchingFrom === 'server') {
    apiUrl = 'http://localhost:3000';
  }

  return `${apiUrl}/api/${endpoint}${query}`;
}

export function apiFetch(endpoint, options = {}, query = false) {
  let qs;
  const { fetchingFrom = 'client' } = options;

  delete options.fetchFrom;

  if (query) {
    qs = queryString.stringify(query);
  }

  const fetchOptions = apiOptions(options);
  const fetchEndpoint = apiEndpoint(endpoint, qs, fetchingFrom);

  return fetch(fetchEndpoint, fetchOptions).then(response => response.json());
}

export function apiOptions(options = {}) {
  const {
    method = 'GET',
    headers = {
      'Content-Type': 'application/json'
    },
    body = false
  } = options;

  const newOptions = {
    method,
    headers,
    credentials: 'include'
  };

  if (body) {
    newOptions.body = body;
  }

  return newOptions;
}
