import React from 'react';
import { Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native';

interface TextProps extends RNTextProps {
  preset?: TextVariants;
  bold?: boolean;
  regular?: boolean;
}

export function Text({ children, preset = 'paragraph', bold, regular, style, ...rest }: TextProps) {
  const fontFamily = getFontFamily(bold, regular);
  return (
    <RNText style={[$fontSizes[preset], style, { fontFamily }]} {...rest}>
      {children}
    </RNText>
  );
}

function getFontFamily(bold?: boolean, regular?: boolean) {
  if (bold) {
    return $fontFamily.bold;
  }
  if (regular) {
    return $fontFamily.regular;
  }
}

type TextVariants = 'heading' | 'paragraph' | 'paragraphSmall' | 'paragraphBig' | 'detail';

const $fontSizes: Record<TextVariants, TextStyle> = {
  heading: { fontSize: 24, lineHeight: 30 },

  paragraph: { fontSize: 16, lineHeight: 22.4 },
  paragraphSmall: { fontSize: 14, lineHeight: 17.5 },
  paragraphBig: { fontSize: 18, lineHeight: 22.5 },

  detail: { fontSize: 12, lineHeight: 15 },
};

const $fontFamily = {
  regular: 'Jakarta-Sans-Regular',
  bold: 'Jakarta-Sans-Bold',
};
