import React from 'react';
import { withRouter } from 'react-router-dom';
import { Result, Button } from 'antd';

function Error(props) {

    return <div>
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={() => { props.history.push('/home') }}>Back Home</Button>}
        />
    </div>

}

export default withRouter(Error)