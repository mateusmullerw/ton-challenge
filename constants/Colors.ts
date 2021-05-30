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
    buttonColor:string;
    buttonText: string;
    delete: string;
    notification: string;
    black: string;
}

export default {
    light: {
        text: '#000',
        textHigh: `rgba(${textColorLight}, 0.87)`,
        textMedium: `rgba(${textColorLight}, 0.87)`,
        textLow: `rgba(${textColorLight}, 0.87)`,
        background: '#fff',
        tint: tintColorLight,
        buttonColor: '#0A1E42',
        buttonText: '#000',
        delete: '#DF5454',
        notification: '#DF5454',
        black: '#000',
    },
    dark: {
        text: '#000',
        textHigh: `rgba(${textColorDark}, 0.87)`,
        textMedium: `rgba(${textColorDark}, 0.87)`,
        textLow: `rgba(${textColorDark}, 0.87)`,
        background: '#1D2025',
        tint: tintColorDark,
        buttonColor: '#00A399',
        buttonText: '#000',
        delete: '#D05454',
        notification: '#DF5454',
        black: '#000',
    },
};
