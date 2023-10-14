export const createSearchQuery = (obj: { [key: string]: any }) => {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p) && (typeof obj[p] != 'undefined' || obj[p] != null)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p])?.toString());
        }
    return str.join("&");
}

export const convertToNumber = (price: number | string, toLocale: boolean = true, toToman: boolean = true) => toLocale ? (toToman ? Number(price) / 10 : Number(price)).toLocaleString() : (toToman ? Number(price) / 10 : Number(price))