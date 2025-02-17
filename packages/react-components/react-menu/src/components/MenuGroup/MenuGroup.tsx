import * as React from 'react';
import { useMenuGroup_unstable } from './useMenuGroup';
import { renderMenuGroup_unstable } from './renderMenuGroup';
import { useMenuGroupContextValues_unstable } from './useMenuGroupContextValues';
import type { MenuGroupProps } from './MenuGroup.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import { useMenuGroupStyles_unstable } from './useMenuGroupStyles';
import { useCustomStyleHooks_unstable } from '@fluentui/react-shared-contexts';

/**
 * Define a styled MenuGroup, using the `useMenuGroup_unstable` hook.
 */
export const MenuGroup: ForwardRefComponent<MenuGroupProps> = React.forwardRef((props, ref) => {
  const state = useMenuGroup_unstable(props, ref);
  const contextValues = useMenuGroupContextValues_unstable(state);

  useMenuGroupStyles_unstable(state);

  const { useMenuGroupStyles_unstable: useCustomStyles } = useCustomStyleHooks_unstable();
  useCustomStyles(state);

  return renderMenuGroup_unstable(state, contextValues);
});

MenuGroup.displayName = 'MenuGroup';
