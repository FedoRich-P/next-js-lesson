import {useRouter} from "next/router";
import NProgress from "nprogress";
import {useEffect} from "react";

export const useLoader = () => {
    const router = useRouter();

    useEffect(() => {
        const startLoading = () => NProgress.start();
        const endLoading = () => NProgress.done();

        router.events.on("routeChangeStart", startLoading)
        router.events.on("routeChangeStart", endLoading)
        router.events.on("routeChangeError", endLoading)
        return ()=> {
            router.events.off("routeChangeStart", startLoading)
            router.events.off("routeChangeStart", endLoading)
            router.events.off("routeChangeError", endLoading)
        }
    }, [router])
}