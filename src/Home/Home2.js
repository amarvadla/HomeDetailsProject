import React from 'react';

function Home2(props) {

    let { click } = props;

    return <div>
        <button onClick={() => click("f1q")} > click me</button>
    </div>

}

export default Home2;
