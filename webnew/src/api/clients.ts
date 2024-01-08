import { AboutMeDataType, AcademicDataType, MainDataType, PublicationType, WelcomeDataType } from "./types";
import mainIntroImage from "../assets/web/image/img6.jpg";
import aboutImage from "../assets/web/image/img3.jpg";
import knustIcon from "../assets/web/image/schools/knustlogo.png";
import teriIcon from "../assets/web/image/schools/TERI-school-logo.png";
import carnegiIcon from "../assets/web/image/schools/logo_solid.png";
import academicImage from "../assets/web/image/img5.jpg";

// Define the URL for the API endpoint
const apiHost = import.meta.env.VITE_API_BASE_URL;
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
            // const resImage = `${apiHost}${attributes.introImage.data.attributes.formats.large.url}`;
            // const schoolIcons = (attributes.schoolIcons.data || []).map((img: any) => ({
            //     name: img?.attributes.name,
            //     url: `${apiHost}${img.attributes.formats.medium.url}`
            // }));
            return {
                ...attributes,
                introImage: mainIntroImage,
                schoolIcons: [knustIcon, teriIcon, carnegiIcon].map((url) => ({
                    name: "School Icon", 
                    url,
                })),
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
            // const resImage = `${apiHost}${attributes.image.data.attributes.formats.large.url}`;
            return {
                ...attributes,
                image: aboutImage,
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
                image: academicImage, 
                //`${apiHost}${attributes.image.data.attributes.formats.large.url}`,
             }
        })
}
