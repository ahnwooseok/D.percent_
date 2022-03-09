import Image from 'next/image';
import Link from 'next/link';

import { Anchor, Box9 } from './styles';

function Logo() {
  return (
    <Link href='/' passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Anchor>
        <Image src='/assets/images/logo-icon.svg' width={27} height={27} />
        <Box9 />
        <Image src='/assets/images/logo-text.svg' width={113} height={23} />
        <Box9 />
      </Anchor>
    </Link>
  );
}

export default Logo;
