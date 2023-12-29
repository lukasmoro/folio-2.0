import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Component to change routes based on scroll position.
const TriggerRouteChange = ({ children, navigateToBottom, navigateToTop }) => {
    const navigate = useNavigate();
    const [isThrottled, setIsThrottled] = useState(false);

    console.log(document.body.scrollTop);
    // Check if the user has scrolled to the bottom of the page.
    const isScrolledToBottom = () => {
        const viewportHeight = window.innerHeight;
        const contentHeight = document.documentElement.scrollHeight;
        const scrollPosition = window.scrollY;
        return Math.ceil(scrollPosition + viewportHeight) >= contentHeight;
    };

    // Check if the user is at the top of the page.
    const isScrolledToTop = () => {
        return window.scrollY <= 0;
    };

    // Handle route change based on scroll position.
    const handleRouteChange = () => {
        if (isThrottled) {
            return; // Prevent rapid repeated navigation.
        }

        if (isScrolledToBottom()) {
            setIsThrottled(true);
            navigate(navigateToBottom); // Navigate to the specified bottom route.
            applyThrottle();
        } 
        else if (isScrolledToTop()) {
            setIsThrottled(true);
            navigate(navigateToTop); // Navigate to the specified top route.
            applyThrottle();
        }
    };

    // Apply a throttle to limit rapid route changes.
    const applyThrottle = () => {
        document.body.style.overflow = 'hidden'; // Disable scrolling temporarily.
        const throttleTime = 2000; // Set a time in milliseconds to throttle navigation.
        setTimeout(() => {
            setIsThrottled(false);
            document.body.style.overflow = ''; // Re-enable scrolling.
        }, throttleTime);
    };

    // Attach the scroll event listener.
    useEffect(() => {
        window.addEventListener('scroll', handleRouteChange);
        return () => {
            window.removeEventListener('scroll', handleRouteChange);
        };
    }, [navigate, navigateToBottom, navigateToTop, isThrottled]);

    return <>{children}</>;
};

export default TriggerRouteChange;
