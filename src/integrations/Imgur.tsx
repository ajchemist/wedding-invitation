export type Params = {
    params?: Record<string, unknown>;
    headers?: Record<string, string>;
    [propName: string]: any;
}

export type Image = {
    id: string;
    title: string;
    description: string;
    link: string;
    width: number;
    height: number;
}

const ORIGIN_HOST = 'https://api.imgur.com';

export const client = async (url: string, params: Params = {}) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Client-ID ${process.env.IMGUR_CLIENT_ID}`
    };

    let opts: RequestInit = {
        method: params.params ? 'POST' : 'GET',
        ...params,
        headers: {
            ...headers,
            ...params.headers,
        },
    };

    if (params.params) {
        opts.body = JSON.stringify(params.params);
    }

    let data;
    try {
        const response = await fetch(url, opts);
        data = await response.json();
        if (response.ok) {
            return data;
        } else {
            return Promise.reject(data);
        }
    } catch (err) {
        return Promise.reject((err as Error).message || 'Something went wrong.');
    }
}

export const fetchAlbumImages = async (params: Params, albumId: string) => {
    try {
        const data = await client(`${ORIGIN_HOST}/3/album/${albumId}/images`, params);
        return data;
    } catch (err) {
        console.log(err)
        return Promise.reject((err as Error).message || 'fetchAlbumImages went wrong.');
    }
};