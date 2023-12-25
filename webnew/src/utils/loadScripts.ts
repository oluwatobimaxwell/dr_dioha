import { useEffect } from "react";
import { useGetMainData, useGetWelcomeData } from "../api/hooks";

export const useLoadScripts = () => {
    const { data: mainData } = useGetMainData();
    const { data: welcomeData } = useGetWelcomeData();

    useEffect(() => {
        const scriptSources: string[] = [
            'src/assets/web/js/jquery.js',
            'src/assets/web/js/popper.min.js',
            'src/assets/web/js/bootstrap.min.js',
            'src/assets/web/js/imagesloaded.pkgd.min.js',
            'src/assets/web/js/isotope.pkgd.min.js',
            'src/assets/web/js/swiper-bundle.min.js',
            'src/assets/web/js/leaflet.js',
            'src/assets/web/js/jquery.waypoints.min.js',
            'src/assets/web/js/jquery.counterup.min.js',
            'src/assets/web/js/aos.js',
            'src/assets/web/js/jquery.preloadinator.min.js',
            'src/assets/web/js/vanilla-tilt.min.js',
            'src/assets/web/js/script.js',
        ];

        const loadScript = (scriptSrc: string) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = scriptSrc;
                script.async = true;

                script.onload = () => {
                    console.log(`Script loaded: ${scriptSrc}`);
                    resolve(true);
                };

                script.onerror = (error) => {
                    console.error(`Error loading script: ${scriptSrc}`, error);
                    reject(error);
                };

                document.body.appendChild(script);
            });
        };

        const loadScriptsSequentially = async () => {
            for (const scriptSrc of scriptSources) {
                await loadScript(scriptSrc);
            }
        };

        if (mainData && welcomeData) loadScriptsSequentially();
    }, [mainData, welcomeData]);
};
