import { AboutMeDataType, AcademicDataType, MainDataType, PublicationType, WelcomeDataType } from "./types";

// Define the URL for the API endpoint
const apiHost = 'http://localhost:1337';
const apiUrl = `${apiHost}/api`;

export async function getMainData(): Promise<MainDataType> {
    return fetch(apiUrl + '/main-content?populate=*')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        }).then((res) => {
            const attributes = res.data.attributes;
            const introImage = `${apiHost}${attributes.introImage.data.attributes.formats.large.url}`;
            const schoolIcons = (attributes.schoolIcons.data || []).map((img: any) => ({
                name: img?.attributes.name,
                url: `${apiHost}${img.attributes.formats.medium.url}`
            }));
            return {
                ...attributes,
                introImage,
                schoolIcons,
             }
        })
}

export async function getWelcomeData(): Promise<WelcomeDataType> {
    return fetch(apiUrl + '/welcome-content?populate=*')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        }).then((res) => {
            const attributes = res.data.attributes;
            return attributes
        })
}

export async function getAboutMeData(): Promise<AboutMeDataType> {
    return fetch(apiUrl + '/about-me?populate=*')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        }).then((res) => {
            const attributes = res.data.attributes;

            return {
                ...attributes,
                image: `${apiHost}${attributes.image.data.attributes.formats.large.url}`,
             }
        })
}

export async function getPublicationData(): Promise<PublicationType> {
    return fetch(apiUrl + '/my-publication?populate=*')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        }).then((res) => {
            return res.data.attributes;
        })
}

export async function getAcademicData(): Promise<AcademicDataType> {
    return fetch(apiUrl + '/academic-content?populate=*')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        }).then((res) => {
            const attributes = res.data.attributes;
            return {
                ...attributes,
                image: `${apiHost}${attributes.image.data.attributes.formats.large.url}`,
             }
        })
}
