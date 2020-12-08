import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import SiteLayout from '../HOC/SiteLayout';
import database from '../Firebase/FirebaseInit';
import { Row, Col, Divider, Card, Button, Spin } from 'antd';
import { PlusOutlined, DeleteFilled } from '@ant-design/icons';
import './details.scss';


function Details(props) {

    const [roomDetails, setRoomDetails] = useState([])
    const [loading, setLoading] = useState(true)

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
            setLoading(false);
        });

    }, [loading])

    function click() {
        // let today = new Date();
        // var fecha = `${today.getDate()} - ${today.getMonth() + 1} - ${today.getFullYear()}`;
        // saveDetails({
        //     roomCode: "g1b",
        //     name: "amarnath vadla",
        //     roomName: "Ground Floor - 1BHK",
        //     createdDate: fecha,
        //     occupation: "Employee at EX",
        //     nativePlace: "India"
        // })
        props.history.push("/addRoom");
    }

    function clickDelete(key) {
        console.log(key);
        database.ref('homedetails/' + key).remove();
        setLoading(true);
    }

    var roomDetailsView = <div>
        <Row gutter={[16, 16]}>
            {roomDetails.map((details) => {
                return <Col span={6} >
                    <div className="site-card-border-less-wrapper">
                        {/* <Card hoverable title={details.data.roomName}
                            onClick={() => { props.history.push(`/edit/${details.key}`) }}
                            bordered={false} style={{ width: 300 }}>
                            <p>Created on : {details.data.createdDate}</p>
                            <p>Tenant Name : {details.data.name}</p>
                            <p>Occupation : {details.data.occupation}</p>
                            <p>Native place : {details.data.nativePlace}</p>
                            <p>Tenant Id : {details.key}</p>
                            <Button icon={<DeleteFilled />} onClick={(e) => { e.stopPropagation(); clickDelete(details.key) }}>
                            </Button>
                        </Card> */}

                        <div className="card-view" onClick={() => { props.history.push(`/edit/${details.key}`) }}>
                            <h2 className="card-heading">{details.data.roomName}</h2>
                            <div className="card-line"></div>
                            <div className="card-elem">
                                <p>Created on : {details.data.createdDate}</p>
                                <p>Tenant Name : {details.data.name}</p>
                                <p>Occupation : {details.data.occupation}</p>
                                <p>Native place : {details.data.nativePlace}</p>
                                <p>Tenant Id : {details.key}</p>
                                <Button icon={<DeleteFilled />} onClick={(e) => { e.stopPropagation(); clickDelete(details.key) }}>
                                </Button>
                            </div>
                        </div>

                    </div></Col>
            })}
        </Row>
    </div>

    return (
        <div>
            <SiteLayout selectedKey="details">
                <Divider orientation="left">Details</Divider>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: "50px" }}>
                    <Button type="primary" icon={<PlusOutlined />} onClick={click}>
                        Add New Room
                    </Button>
                </div>
                {roomDetails.length > 0 ? <div>
                    {roomDetailsView}
                </div> : loading ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: "50px", height: "50%" }}>
                    <Spin tip="Loading...">
                    </Spin>
                </div> : null}
            </SiteLayout>
        </div>
    )

}

export default withRouter(Details)