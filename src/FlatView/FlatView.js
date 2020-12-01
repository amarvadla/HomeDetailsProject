import React from 'react';
import { withRouter, useParams } from 'react-router-dom';

function FlatView(props) {

    const params = useParams()

    return <div>
        {params.id}
    </div>

}

export default withRouter(FlatView);