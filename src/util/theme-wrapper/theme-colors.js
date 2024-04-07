import { DefaultTheme, MD2DarkTheme } from 'react-native-paper';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#007AFF',
    background: '#FFFFFF',
    text: '#000000',
  },
};

export const darkTheme = {
  ...MD2DarkTheme.colors,
  colors: {
    ...MD2DarkTheme.colors,
    primary: '#007AFF',
    background: '#1E1E1E',
    text: '#FFFFFF',
  },
};
