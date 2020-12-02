import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import SiteLayout from '../HOC/SiteLayout';
import database from '../Firebase/FirebaseInit';
import saveDetails from './SaveDetails';
import { Row, Col, Divider, Card } from 'antd';


function Details(props) {

    const [roomDetails, setRoomDetails] = useState([])

    useEffect(() => {

        database.ref('homedetails').once('value', (snapshot) => {
            var resultData = [];
            snapshot.forEach((childSnapshot) => {
                resultData.push({
                    key: childSnapshot.key,
                    data: childSnapshot.val()
                })
            });
            setRoomDetails(resultData);
        });

    }, [])

    function click() {
        let today = new Date();
        var fecha = `${today.getDate()} - ${today.getMonth() + 1} - ${today.getFullYear()}`;
        saveDetails({
            roomCode: "g1b",
            name: "amarnath vadla",
            roomName: "Ground Floor - 1BHK",
            createdDate: fecha,
            occupation: "Employee at EX",
            nativePlace: "India"
        })
    }

    var roomDetailsView = <div>
        <Row gutter={[16, 16]}>
            {roomDetails.map((details) => {
                return <Col span={6} >
                    <div className="site-card-border-less-wrapper">
                        <Card hoverable title={details.data.roomName} bordered={false} style={{ width: 300 }}>
                            <p>Created on : {details.data.createdDate}</p>
                            <p>Tenant Name : {details.data.name}</p>
                            <p>Occupation : {details.data.occupation}</p>
                            <p>Native place : {details.data.nativePlace}</p>
                        </Card>
                    </div></Col>
            })}
        </Row>
    </div>

    return (
        <div>
            <SiteLayout selectedKey="details">
                <Divider orientation="left">Details</Divider>
                {roomDetails.length > 0 ? <div>
                    {roomDetailsView}
                </div> : <div onClick={click}>
                        empty
            </div>}
            </SiteLayout>
        </div>
    )

}

export default withRouter(Details)