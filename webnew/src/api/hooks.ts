import { useQuery } from "@tanstack/react-query";
import { AboutMeDataType, AcademicDataType, MainDataType, PublicationType, WelcomeDataType } from "./types";
import { getAboutMeData, getAcademicData, getMainData, getPublicationData, getWelcomeData } from "./clients";

export const useGetMainData = () =>
    useQuery<MainDataType, unknown>({
        queryKey: ["main-data"],
        queryFn: getMainData
    });

export const useGetWelcomeData = () =>
    useQuery<WelcomeDataType, unknown>({
        queryKey: ["welcome-data"],
        queryFn: getWelcomeData
    });

export const useGetAboutMeData = () =>
    useQuery<AboutMeDataType, unknown>({
        queryKey: ["about-me-data"],
        queryFn: getAboutMeData
    });

export const useGetPublicationData = () =>
    useQuery<PublicationType, unknown>({
        queryKey: ["publication-data"],
        queryFn: getPublicationData
    });

export const useGetAcademicData = () =>
    useQuery<AcademicDataType, unknown>({
        queryKey: ["academic-data"],
        queryFn: getAcademicData
    });