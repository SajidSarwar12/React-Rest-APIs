import React  from 'react';
import ContentNav from './../contentnav/contentnav';
import ContentBox from './../content-box/content-box';
import './../../assets/styles/globalStyles.css';

import './content.css';

function Content() {
  
    return (
        <div className="contentOuter">
            <ContentNav/>
            <ContentBox/>
        </div>
    );
}

export default Content;
