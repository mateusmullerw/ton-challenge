import * as React from 'react';

import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
    const { style } = props;
    return <Text style={[style, { fontFamily: 'space-mono' }]} />;
}
