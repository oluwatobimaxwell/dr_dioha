export type MainDataType = {
    intro: string;
    firstName: string;
    lastName: string;
    title: string;
    interest: string;
    professionalInterest: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    meta: object;
    introImage: string;
    professionInterestTitle: string;
    schoolIcons: {
        name: string;
        url: string;
    }[];
};

export type WelcomeDataType = {
    title: string;
    description: string;
    attributes: {
        id: number;
        title: string;
        description: string;
        icon: string;
    }[];
};

export type AboutMeDataType = {
    section: string;
    title: string;
    about: string;
    image: string;
};

export type PublicationType = {
    section: string;
    title: string;
    description: string;
    publication: {
        id: number;
        title: string;
        reference: string;
        link: string;
    }[];
};


export type AcademicDataType = {
    section: string;
    description: string;
    academics: {
        id: number;
        description: string;
    }[];
    image: string;
}