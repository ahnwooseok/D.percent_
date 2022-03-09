import { useRouter } from 'next/router';
import NavigationBarButton from '../NavigationBarButton';
import Logo from '../Logo';

import { Wrapper } from './styles';
import { useEffect } from "react";



const routes = [
  { path: '/about', name: 'About' },
  { path: '/project', name: 'Project' },
  { path: '/recruitment', name: 'Recruitment' },
  { path: '/contact', name: 'Contact' },
];

function NavigationBar() {




  const router = useRouter();




    return (
            <Wrapper>
                <Logo />
                {routes.map(({ path, name }) => (
                    <NavigationBarButton selected={router.pathname === path} href={path} key={path}>
                        {name}
                    </NavigationBarButton>
                ))}
            </Wrapper>
    );

}

export default NavigationBar;
