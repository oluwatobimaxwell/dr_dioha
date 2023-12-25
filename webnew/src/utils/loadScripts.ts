import { useEffect } from "react";
import { useGetMainData } from "../api/hooks";


// <script src="src/assets/web/js/jquery.js"></script>
// 	<script src="src/assets/web/js/popper.min.js"></script>
// 	<script src="src/assets/web/js/bootstrap.min.js"></script>
// 	<script src="src/assets/web/js/imagesloaded.pkgd.min.js"></script>
// 	<script src="src/assets/web/js/isotope.pkgd.min.js"></script>
// 	<script src="src/assets/web/js/swiper-bundle.min.js"></script>
// 	<script src="src/assets/web/js/leaflet.js"></script>
// 	<script src="src/assets/web/js/jquery.waypoints.min.js"></script>
// 	<script src="src/assets/web/js/jquery.counterup.min.js"></script>
// 	<script src="src/assets/web/js/aos.js"></script>
// 	<script src="src/assets/web/js/jquery.preloadinator.min.js"></script>
// 	<script src="src/assets/web/js/vanilla-tilt.min.js"></script>
// 	<script src="src/assets/web/js/script.js"></script>

export const useLoadScripts = () => {
    const { data } = useGetMainData();
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

        if (data) loadScriptsSequentially();
    }, [data]);
};
