import { extendTheme } from '@chakra-ui/react';
import foundations from 'themes/foundations/index';
import components from 'themes/components/index';

export const theme = extendTheme({
  ...foundations,
  components,
});
