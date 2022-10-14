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