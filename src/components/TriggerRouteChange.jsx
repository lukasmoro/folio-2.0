import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavigationContext } from './NavigationContext';


const TriggerRouteChange = ({ children, navigateToBottom, navigateToTop }) => {
    
    const navigate = useNavigate();
    const [isThrottled, setIsThrottled] = useState(false);

    const { setNavigationDirection } = useContext(NavigationContext);


    const isScrolledToBottom = () => {
        const viewportHeight = window.innerHeight;
        const contentHeight = document.documentElement.scrollHeight;
        const scrollPosition = window.scrollY;
        return Math.ceil(scrollPosition + viewportHeight) >= contentHeight;
    };

    const isScrolledToTop = () => {
        return window.scrollY <= 0;
    };

    const handleRouteChange = () => {
        if (isThrottled) {
            return; 
        }

        if (isScrolledToBottom()) {
            setIsThrottled(true);
            navigate(navigateToBottom); 
            applyThrottle();
            setNavigationDirection('bottom');
        } 

        else if (isScrolledToTop()) {
            setIsThrottled(true);
            navigate(navigateToTop);
            applyThrottle();
            setNavigationDirection('top');
        }

    };

    const applyThrottle = () => {
        document.body.style.overflow = 'hidden'; 
        const throttleTime = 2000; 
        setTimeout(() => {
            setIsThrottled(false);
            document.body.style.overflow = '';
        }, throttleTime);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleRouteChange);
        return () => {
            window.removeEventListener('scroll', handleRouteChange);
        };
    }, [navigate, navigateToBottom, navigateToTop, isThrottled]);

    return <>{children}</>;
};

export default TriggerRouteChange;
