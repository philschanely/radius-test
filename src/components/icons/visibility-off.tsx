import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { compose, space, color, layout, typography, SpaceProps, ColorProps, LayoutProps, TypographyProps } from 'styled-system';
import { uuid } from './uuid';
export type IconProps = SpaceProps & ColorProps & LayoutProps & TypographyProps;
const SvgComponent = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & {
  title?: any;
}>(({
  title,
  ...props
}, svgRef) => {
  const [titleId] = useState(() => title ? uuid() : undefined);
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentcolor" ref={svgRef} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 001 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" /></svg>;
});
const SvgVisibilityOff = styled(SvgComponent)<IconProps>({
  flex: 'none',
  verticalAlign: 'middle'
}, compose(space, color, layout, typography));
export default SvgVisibilityOff;