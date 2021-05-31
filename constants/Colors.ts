const tintColorLight = '#1F1D2B';
const tintColorDark = '#fff';
const textColorLight = '31, 29, 43';
const textColorDark = '256, 256, 256';

export type ColorsTypes = keyof ColorsInterface

export interface ColorsInterface{
    black: string;
    white: string;
    textHigh: string;
    textMedium: string;
    textLow: string;
    background: string;
    tint: string;
    buttonColor:string;
    add: string;
    delete: string;
    notification: string;
    header: string;
    searchBar: string;
}
export type ColorSchemeType = 'light' | 'dark'

export default {
    light: {
        black: '#000',
        white: '#fff',
        textHigh: `rgba(${textColorLight}, 0.87)`,
        textMedium: `rgba(${textColorLight}, 0.60)`,
        textLow: `rgba(${textColorLight}, 0.40)`,
        background: '#F3F3F8',
        tint: tintColorLight,
        buttonColor: '#525298',
        add: '#22B07D',
        delete: '#DF5454',
        notification: '#FE3A3C',
        header: '#fff',
        card: '#fff',
        searchBar: '#E2E2F0',

    },
    dark: {
        black: '#000',
        white: '#fff',
        textHigh: `rgba(${textColorDark}, 0.87)`,
        textMedium: `rgba(${textColorDark}, 0.60)`,
        textLow: `rgba(${textColorDark}, 0.40)`,
        background: '#1F1D2B',
        tint: tintColorDark,
        buttonColor: '#525298',
        add: '#22B07D',
        delete: '#D14043',
        notification: '#D14043',
        header: '#252836',
        card: '#252836',
        searchBar: '#3B3E52',

    },
};
