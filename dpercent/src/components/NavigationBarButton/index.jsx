import Link from 'next/link';
import PropTypes from 'prop-types';

import { Anchor } from './styles';

function NavigationBarButton({ children, href, selected }) {
  return (
    <Link type='button' href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Anchor selected={selected}>{children}</Anchor>
    </Link>
  );
}

NavigationBarButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default NavigationBarButton;
