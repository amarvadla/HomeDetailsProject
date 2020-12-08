import React from 'react';
import Home2 from './Home2';

function Home1(props) {

    return <div>
        <Home2 {...props} />
        <p>click above</p>
    </div>

}

export default Home1;
