const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const textColorLight = '0, 0, 0';
const textColorDark = '256, 256, 256';

export type ColorsTypes = keyof ColorsInterface

export interface ColorsInterface{
    text: string;
    textHigh: string;
    textMedium: string;
    textLow: string;
    background: string;
    tint: string;
    tabIconDefault: string;
    tabIconSelected: string;
    buttonColor:string;
    buttonText: string;
    delete: string;
}

export default {
    light: {
        text: '#000',
        textHigh: `rgba(${textColorLight}, 0.87)`,
        textMedium: `rgba(${textColorLight}, 0.87)`,
        textLow: `rgba(${textColorLight}, 0.87)`,
        background: '#fff',
        tint: tintColorLight,
        tabIconDefault: '#ccc',
        tabIconSelected: tintColorLight,
        buttonColor: '#EFC7A3',
        buttonText: '#000',
        delete: '#DF5454',
    },
    dark: {
        text: '#000',
        textHigh: `rgba(${textColorDark}, 0.87)`,
        textMedium: `rgba(${textColorDark}, 0.87)`,
        textLow: `rgba(${textColorDark}, 0.87)`,
        background: '#000',
        tint: tintColorDark,
        tabIconDefault: '#ccc',
        tabIconSelected: tintColorDark,
        buttonColor: '#EFC7A3',
        buttonText: '#000',
        delete: '#D05454',
    },
};
