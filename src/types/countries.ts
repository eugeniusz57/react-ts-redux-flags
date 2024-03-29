type Currency = {
    symbol: string,
    code: string,
    name: string,
}
type Language = {
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string,
}

export type Country = {
    name: string,
    nativeName: string,
    flag: string,
    flags: { png: string,  svg: string },
    region: string,
    subregion: string,
    capital: string,
    population: number,
    topLevelDomain: string[],
    borders: string[],
    currencies: Currency[],
    languages: Language[],
}

export type CountryInfo = {
    img: string,
    name: string,
    info: {title: string, description: string}[],
    
}