export class CmcModel {
    constructor(public name: string, public symbol: string, public rank: number,
        public price_usd: number, public price_btc: number, public volume_day: number,
        public market_cap: number, public avail_supply: number, public total_supply: number,
        public change_hr: number, public change_day: number, public change_week: number) {}
}
