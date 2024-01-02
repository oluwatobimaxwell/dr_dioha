import { useEffect } from "react";

export const useLoadScripts = (isLoaded: boolean) => {
    useEffect(() => {
        const scriptSources: string[] = [
            'js/jquery.js',
            'js/popper.min.js',
            'js/bootstrap.min.js',
            'js/imagesloaded.pkgd.min.js',
            'js/isotope.pkgd.min.js',
            'js/swiper-bundle.min.js',
            'js/leaflet.js',
            'js/jquery.waypoints.min.js',
            'js/jquery.counterup.min.js',
            'js/aos.js',
            'js/jquery.preloadinator.min.js',
            'js/vanilla-tilt.min.js',
            'js/script.js',
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

        if (isLoaded) loadScriptsSequentially();
    }, [isLoaded]);
};
