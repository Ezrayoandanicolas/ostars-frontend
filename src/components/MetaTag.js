import React from 'react'
import { Helmet } from 'react-helmet-async'
import TagManager from 'react-gtm-module'
import Logo from '../images/ostar.png'

const MetaTag = () => {
    const tagManagerArgs = {
        gtmId: 'GTM-NMVWHCNH'
    }

    TagManager.initialize(tagManagerArgs)
    
    return (
        <Helmet>
            <title>Ostars | No 1 Start Up Indonesia</title>
            <link rel="icon" href={Logo} />
            <link rel="apple-touch-icon" href={Logo} />
            
            <meta name='description' content='Ostars adalah start-up yang bergerak di bidang pembuatan website dan jasa iklan Facebook Ads dan Google Ads.' />
        </Helmet>
    );
}

export default MetaTag;