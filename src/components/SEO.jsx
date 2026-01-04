import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description,
    keywords,
    name = "Nilesh Kumar",
    type = "website",
    url = "https://nileshk.me", // Updated to correct domain
    image = "/og-image.png"
}) => {
    const siteTitle = "Nilesh Kumar | Full Stack Developer & AI Enthusiast";
    const defaultDescription = "Portfolio of Nilesh Kumar, a Full Stack Developer and AI/ML enthusiast specializing in building exceptional digital experiences.";
    const defaultKeywords = "Nilesh Kumar, Full Stack Developer, AI, ML, Web Developer, React, Portfolio";

    return (
        <Helmet>
            {/* Standard Prop Metadata */}
            <title>{title ? `${title} | ${name}` : siteTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title ? `${title} | ${name}` : siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@nilesh7651" /> {/* Assuming from github handle/previous context if avail, else generic */}
            <meta name="twitter:title" content={title ? `${title} | ${name}` : siteTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={image} />

            {/* Canonical */}
            <link rel="canonical" href={url} />
        </Helmet>
    );
};

export default SEO;
