import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import SiteLayout from '../HOC/SiteLayout';
import database from '../Firebase/FirebaseInit';
import { Row, Col, Divider, Card, Button, Spin } from 'antd';
import { PlusOutlined, CheckCircleTwoTone, DeleteFilled } from '@ant-design/icons';


function Bills(props) {

    const [billDetails, setBillDetails] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        database.ref('bills').once('value', (snapshot) => {
            var resultData = [];
            snapshot.forEach((childSnapshot) => {
                database.ref('homedetails/' + childSnapshot.val().id).on('value', (snapshot) => {
                    const homedetailsData = snapshot.val();
                    resultData.push({
                        key: childSnapshot.key,
                        data: childSnapshot.val(),
                        tenantName: homedetailsData.name,
                        roomName: homedetailsData.roomName
                    })
                });
            });
            setBillDetails(resultData);
            setLoading(false);
            console.log(resultData)
        });

    }, [loading])

    function click() {
        props.history.push("/addBill");
    }

    function clickDelete(key) {
        console.log(key);
        database.ref('bills/' + key).remove();
        setLoading(true);
    }

    var billDetailsView = <div>
        <Row gutter={[16, 16]}>
            {billDetails && billDetails.map((details) => {
                return <Col span={6} >
                    <div className="site-card-border-less-wrapper">
                        <Card hoverable title={`Bill of: ${details.roomName}`}
                            onClick={() => { props.history.push(`/editBill/${details.key}`) }}
                            bordered={false} style={{ width: 300 }}>
                            <p>Created on : {details.data.date}</p>
                            <p>Tenant Name : {details.tenantName}</p>
                            <p>Rent : {details.data.rent}</p>
                            <p>Power : {details.data.power}</p>
                            <p>Water : {details.data.water}</p>
                            <p>Paid : {details.data.paid.toString()}</p>
                            <p>Tenant Id : {details.data.id}</p>
                            <p>Bill Id : {details.key}</p>
                            <Button icon={<DeleteFilled />} onClick={(e) => { e.stopPropagation(); clickDelete(details.key) }}>
                            </Button>
                            {/* <DeleteFilled /> */}
                            {details.data.paid ? <CheckCircleTwoTone style={{ float: "right", padding: "10px" }} /> : null}
                        </Card>
                    </div></Col>
            })}
        </Row>
    </div>

    return (
        <div>
            <SiteLayout selectedKey="bills">
                <Divider orientation="left">Bills</Divider>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: "50px" }}>
                    <Button type="primary" icon={<PlusOutlined />} onClick={click}>
                        Add New Bill
                    </Button>
                </div>
                {billDetails && billDetails.length > 0 ? <div>
                    {billDetailsView}
                </div> : loading ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: "50px", height: "50%" }}>
                    <Spin tip="Loading...">
                    </Spin>
                </div> : null}
            </SiteLayout>
        </div>
    )

}

export default withRouter(Bills)