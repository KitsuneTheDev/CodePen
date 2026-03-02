export class ApiClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async get({ endpoint }) {
        return await this.#send({ endpoint, method: 'GET' });
    }

    async post({ endpoint, body }) {
        return await this.#send({ endpoint, method: 'POST', body });
    }

    async #send({ method, endpoint, body = null }) {
        const options = {
            method,
            headers: {},
            credentials: 'include',
        }

        if(body !== null) {
            options.body = JSON.stringify(body);
            options.headers['Content-Type'] = 'application/json';
        }

        try{
            const response = await fetch(`${this.baseUrl}${endpoint}`, options);
            if(!response.ok) {
               const error = response.json();
               throw new Error(error.message || `HTTP Error: ${response.status}`);
            } else if(response.status === 204) {
                return null;
            } else {
                return response.json();
            }
        } catch(error) {
            if(error instanceof TypeError) {
                throw new Error('Network error. Check your connection.');
            } else {
                throw error;
            }
        }
    }
}