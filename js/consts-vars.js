
const dataConfig = async () => fetch("/auth_config.json");


window.onload = async () => {
    const params = await response.json();
    const app_url = params.dev_urls;

    export const apiBaseUrl = api_url.api_url;
    export const idsBaseUrl = app_url.ids_url;
    export const spaBaseUrl = app_url.spa_url;
};