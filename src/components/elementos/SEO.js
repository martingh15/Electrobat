import React from 'react';
import useSEO from '../../hooks/useSEO';

export default function SEO(title, description, url, ogImage, ogImageAlt, keywords) {
    useSEO(title, description, url, ogImage, ogImageAlt, keywords);
    return (
        <div></div>
    );
}

