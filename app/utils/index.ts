import moment from "jalali-moment";
import { type } from "os";

export const createSearchQuery = (obj: { [key: string]: any }) => {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p) && (typeof obj[p] != 'undefined' || obj[p] != null)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p])?.toString());
        }
    return str.join("&");
}

export const convertToNumber = (price: number | string, toLocale: boolean = true, toToman: boolean = true) => toLocale ? (toToman ? Number(price) / 10 : Number(price)).toLocaleString() : (toToman ? Number(price) / 10 : Number(price))


export const convertToMoment = (st: string) => {
    console.log(st)

    if (typeof st != 'string') return moment()
    if (st.length == 10)
        return moment(st, 'jYYYY/jMM/jDD')
    else if (st.length == 8 && st.includes('/'))
        return moment(st, 'jYY/jMM/jDD')
    else if (st.length == 8)
        return moment(st, 'jYYYYjMMjDD')

    else
        return moment()
}


export const genNumber = (str: string, percent?: boolean): number => {

    try {
        return Number(Array.from(str.matchAll(/\d+/g)).join('')) * (str.includes('-') ? -1 : 1) / (percent ? 100 : 1)
    }
    catch (e) { return 0 }
}

export const convertDataUpdate = (date: any) => {
    return moment(date).format('jYYYY-jMM-jDD /  HH:mm:ss')
}