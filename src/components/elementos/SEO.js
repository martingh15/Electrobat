import React from 'react';
import useSEO from '../../hooks/useSEO';

export default function SEO(title, description, url, ogImage, ogImageAlt) {
    useSEO(title, description, url, ogImage, ogImageAlt);
    return (
        <div></div>
    );
}

