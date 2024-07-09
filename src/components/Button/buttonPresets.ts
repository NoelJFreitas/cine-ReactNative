import {TouchableOpacityBoxProps, ButtonPreset} from '@components';
import {ThemeColors} from '@theme';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: {color: ThemeColors};
}

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {backgroundColor: 'primary'},
      content: {color: 'primaryContrast'},
    },
    disabled: {
      container: {backgroundColor: 'lightGray'},
      content: {color: 'mediumGray'},
    },
  },
  ghost: {
    default: {
      container: {backgroundColor: 'background'},
      content: {color: 'primary'},
    },
    disabled: {
      container: {backgroundColor: 'background'},
      content: {color: 'mediumGray'},
    },
  },
};
