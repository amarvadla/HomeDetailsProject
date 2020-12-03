import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import SiteLayout from '../HOC/SiteLayout';
import database from '../Firebase/FirebaseInit';
import { Row, Col, Divider, Card, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


function Details(props) {

    const [billDetails, setBillDetails] = useState([])

    useEffect(() => {

        database.ref('bills').once('value', (snapshot) => {
            var resultData = [];
            snapshot.forEach((childSnapshot) => {
                resultData.push({
                    key: childSnapshot.key,
                    data: childSnapshot.val()
                })
            });
            setBillDetails(resultData);
            console.log(billDetails)
        });

    }, [])

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
        props.history.push("/addBill");
    }

    var billDetailsView = <div>
        <Row gutter={[16, 16]}>
            {billDetails.map((details) => {
                return <Col span={6} >
                    <div className="site-card-border-less-wrapper">
                        <Card hoverable title={`Tenant Id : ${details.data.id}`}
                            onClick={() => { props.history.push(`/editBill/${details.key}`) }}
                            bordered={false} style={{ width: 300 }}>
                            <p>Created on : {details.data.date}</p>
                            <p>Rent : {details.data.rent}</p>
                            <p>Power : {details.data.power}</p>
                            <p>Water : {details.data.water}</p>
                            <p>Paid : {details.data.paid.toString()}</p>
                            <p>Tenant Id : {details.data.id}</p>
                            <p>Bill Id : {details.key}</p>
                        </Card>
                    </div></Col>
            })}
        </Row>
    </div>

    return (
        <div>
            <SiteLayout selectedKey="bills">
                <Divider orientation="left">Bills</Divider>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , marginBottom : "50px"}}>
                    <Button type="primary" icon={<PlusOutlined />} onClick={click}>
                        Add New Bill
                    </Button>
                </div>
                {billDetails.length > 0 ? <div>
                    {billDetailsView}
                </div> : <div onClick={click}>

                    </div>}
            </SiteLayout>
        </div>
    )

}

export default withRouter(Details)