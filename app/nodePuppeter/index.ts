import * as pup from 'puppeteer'


let page: null | pup.Page = null

export const getPupPage = async (url: string) => {

    if (!page || page?.url() !== url) {
        const browser = await pup.launch({ headless: 'new' })
        page = await browser.newPage()

        if (page?.url() !== url)
            await page?.goto(url)
    }

    // await browser.close()
    return page
}

