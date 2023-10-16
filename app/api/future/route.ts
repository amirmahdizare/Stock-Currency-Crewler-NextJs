
import { NextRequest, NextResponse } from 'next/server'
import { getPupPage } from '@/app/nodePuppeter'
import * as pup from 'puppeteer'
// import { FutureItemDataType } from 'types'
import { genNumber } from '@/app/utils'


export async function GET(req: NextRequest) {


    const url = new URL(req.url)

    let symbol = url.searchParams.get('symbol')

    if (!symbol)
        return NextResponse.json('Symbol Not Provided')

    try {

        const page = await getPupPage("https://cdn.ime.co.ir/")

        if (!page)
            return NextResponse.json('Page Not Found')


        await page.click('div.ng-scope > div > div:nth-child(5) > div.ng-isolate-scope > ul > li:nth-child(2) > a')


        const reOpenFuture = async () => {
            await page.click('div.ng-scope > div > div:nth-child(5) > div.ng-isolate-scope > ul > li:nth-child(1) > a')
            await page.click('div.ng-scope > div > div:nth-child(5) > div.ng-isolate-scope > ul > li:nth-child(2) > a')
            try {
                return await page.waitForSelector('#futureView > div > uib-accordion > div > div > div:nth-child(2) > div > div.panel-heading.hTitr.ui-corner-all.portlet-header > h4 > a > span > b', { timeout: 500 })
            } catch (error) { }

        }

        try {

            await page.waitForSelector('#futureView > div > uib-accordion > div > div > div:nth-child(2) > div > div.panel-heading.hTitr.ui-corner-all.portlet-header > h4 > a > span > b', { timeout: 200 })

        } catch (error) {
            while (!(await reOpenFuture())) { }
        }

        const items = await page.evaluate<string[]>(symbol => {
            const accordions = Array.from(document.querySelectorAll('.portlet.head'))


            const target = accordions.find(item => item.innerHTML.includes(symbol ?? ""))

            if (!target) return undefined

            // return [...Array.from(target?.querySelectorAll('td')).map(x => x.innerText), ...Array.from(target?.querySelectorAll('th')).map(x => x.innerText)]
        }, symbol) as string[]



        // page.screenshot({ path: 'new.png', fullPage: true })

        if (!items) return NextResponse.json('Not Found')

        const itemData = {
            isin: items[0],
            yesterdaySettle: genNumber(items[1]),
            firstPrice: {
                value: genNumber(items[15]),
                change: genNumber(items[24].split('\n')[0]),
                changePercent: genNumber(items[24].split('\n')[1], true)
            },
            highestPrice: {
                value: genNumber(items[16]),
                change: genNumber(items[25].split('\n')[0]),
                changePercent: genNumber(items[25].split('\n')[1], true)
            },
            lowerPrice: {
                value: genNumber(items[17]),
                change: genNumber(items[26].split('\n')[0]),
                changePercent: genNumber(items[26].split('\n')[1], true)
            },
            lastTradedPrice: {
                value: genNumber(items[2]),
                change: genNumber(items[27].split('\n')[0]),
                changePercent: genNumber(items[27].split('\n')[1], true)
            },
            lastTradeTime: items[34],
            change: genNumber(items[3]),
            changePercent: genNumber(items[4].replace('%', ''), true),
            volume: genNumber(items[5]),
            value: genNumber(items[6]),
            op: genNumber(items[7].split(" ")[0]),
            buyColumn: [
                { volume: genNumber(items[11]), price: genNumber(items[12]), order: 1 },
                { volume: genNumber(items[20]), price: genNumber(items[21]), order: 2 },
                { volume: genNumber(items[29]), price: genNumber(items[30]), order: 3 },
            ]
            ,
            sellColumn: [
                { volume: genNumber(items[14]), price: genNumber(items[13]), order: 1 },
                { volume: genNumber(items[23]), price: genNumber(items[22]), order: 2 },
                { volume: genNumber(items[32]), price: genNumber(items[31]), order: 3 },
            ]
            ,

            legalsBuyersCount: genNumber(items[50]),
            legalsSellersCount: genNumber(items[51]),
            regularBuyersCount: genNumber(items[48]),
            regularSellersCount: genNumber(items[49]),
            settlePrice: genNumber(items[52])







        }

        return NextResponse.json(items) // prints the result


    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}