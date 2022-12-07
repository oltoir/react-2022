export default {
  parts: ['list', 'item'],
  baseStyle: {
    list: {
      borderRadius: '8px',
      boxShadow:
        '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',

      border: '1px solid',
      borderColor: 'gray.100',
      maxH: '368px',
      overflowY: 'auto',
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'gray.200',
      },
      '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
        borderRadius: '8px',
        backgroundColor: 'white',
      },
      '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
        borderRadius: '8px',
        backgroundColor: 'gray.200',
        border: '4px solid white',
      },
      '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
        backgroundColor: 'gray.200',
      },
      '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
        backgroundColor: 'gray.200',
      },
      '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
        backgroundColor: 'gray.400',
      },
      '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
        backgroundColor: 'gray.200',
      },
    },
    item: {
      _hover: {
        backgroundColor: 'gray.50',
      },
    },
  },
  defaultProps: {
    closeOnSelect: 'false',
  },
};
