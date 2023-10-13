export const createSearchQuery = (obj: { [key: string]: any }) => {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p) && (typeof obj[p] != 'undefined' || obj[p] != null)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p])?.toString());
        }
    return str.join("&");
}