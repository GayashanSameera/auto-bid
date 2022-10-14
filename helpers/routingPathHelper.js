import { PRIVATE_ROUTE_BASES } from '../configs/constants';

export const getResolvedFinalPath = (routeObject) => {

    if (routeObject.asPath) {
        const routeArray = routeObject.asPath.split("/") || [];
        const filteredRouteArray = routeArray.filter(i => i !== "");

        if (filteredRouteArray.length) {
            const lastRoute = filteredRouteArray[filteredRouteArray.length - 1];
            return lastRoute;
        } else {
            return "home";
        }
    } else {
        return "";
    }
}

export const getResolvedPaths = (routeObject) => {
    if (routeObject.asPath) {
        const routeArray = routeObject.asPath.split("/") || [];
        const filteredRouteArray = routeArray.filter(i => i !== "");
        return filteredRouteArray;
    } else {
        return [];
    }
}

export const validateRoutes = (routeObject, session) => {

    if (routeObject.asPath) {
        const routeArray = routeObject.asPath.split("/") || [];
        const filteredRouteArray = routeArray.filter(i => i !== "");

        const isPrivateRoute = filteredRouteArray.find(r => PRIVATE_ROUTE_BASES.includes(r));

        if (isPrivateRoute && session && session.email) {
            return true
        } else if (isPrivateRoute && (!session || !session.email)) {
            routeObject.push("/");
        }
    } else {
        return [];
    }
}