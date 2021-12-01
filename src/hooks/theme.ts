import {useColorScheme} from 'react-native';

export function useDynamicColor() {
  let theme = useColorScheme();

  return (darkThemeValue: string, lightThemeValue: string) =>
    theme === 'dark' ? darkThemeValue : lightThemeValue;
}
