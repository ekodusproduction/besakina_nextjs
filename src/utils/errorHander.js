export function handleApiError(err) {
    if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
    } else if (err.request) {
        console.log(err.request);
    } else {
        console.log('Errpr Message: ', err.message);
    }
}