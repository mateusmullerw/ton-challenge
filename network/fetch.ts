const handleRequestError = (response: Response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};

export const makeResquest = async (url: string) => (
    fetch(url, { method: 'GET' })
        .then(handleRequestError)
        .then((data) => data.json())
        .catch((error: object) => error)
);
