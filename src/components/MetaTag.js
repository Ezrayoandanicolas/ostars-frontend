import React from 'react';
import { Helmet } from 'react-helmet-async';
import TagManager from 'react-gtm-module'

const MetaTag = () => {
    const tagManagerArgs = {
        gtmId: 'GTM-NMVWHCNH'
    }

    TagManager.initialize(tagManagerArgs)
    
    return (
        <Helmet>
            <title>Learning React Helmet!</title>
            <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            <meta name="facebook-domain-verification" content="bomw77jrtzh0hwwfkwivajpqbwpm19" />
        </Helmet>
    );
}

export default MetaTag;