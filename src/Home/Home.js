import React from 'react';
import { withRouter } from 'react-router-dom';
import SiteLayout from '../HOC/SiteLayout';
import { Row, Col, Divider, Card } from 'antd';

function Home(props) {


    function click(FlatCode) {
        props.history.push(`/view/${FlatCode}`);
        // database.ref('/homedetails').push().set({
        //     roomCode: FlatCode
        // })
    }

    return <div>
        <SiteLayout selectedKey="home">
            <Divider orientation="left">HOME DETAILS</Divider>

            <Row gutter={[16, 16]}>
                <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
                    <div className="site-card-border-less-wrapper" onClick={() => click("g1b")}>
                        <Card hoverable title="Ground Floor - 1BHK" bordered={false} style={{ width: 300 }}>
                            <p>Generated on 01-12-2020</p>
                            <p>Rent</p>
                            <p>Power</p>
                            <p>Water</p>
                        </Card>
                    </div></Col>
                <Col span={6} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }}>
                    <div className="site-card-border-less-wrapper" onClick={() => click("g1r")}>
                        <Card hoverable title="Ground Floor - 1Room" bordered={false} style={{ width: 300 }}>
                            <p>Generated on 01-12-2020</p>
                            <p>Rent</p>
                            <p>Power</p>
                            <p>Water</p>
                        </Card>
                    </div></Col>
                <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }}>
                    <div className="site-card-border-less-wrapper" onClick={() => click("f2b")}>
                        <Card hoverable title="First Floor - 2BHK" bordered={false} style={{ width: 300, background: "#fffgh" }}>
                            <p>Generated on 01-12-2020</p>
                            <p>Rent</p>
                            <p>Power</p>
                            <p>Water</p>
                        </Card>
                    </div></Col>
                <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }}>
                    <div className="site-card-border-less-wrapper" onClick={() => click("f1r")}>
                        <Card hoverable title="First Floor - 1Room" bordered={false} style={{ width: 300 }}>
                            <p>Generated on 01-12-2020</p>
                            <p>Rent</p>
                            <p>Power</p>
                            <p>Water</p>
                        </Card>
                    </div> </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }}>
                    <div className="site-card-border-less-wrapper" onClick={() => click("s1b1")}>
                        <Card hoverable title="Second Floor - 1BHK" bordered={false} style={{ width: 300 }}>
                            <p>Generated on 01-12-2020</p>
                            <p>Rent</p>
                            <p>Power</p>
                            <p>Water</p>
                        </Card>
                    </div> </Col>
                <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }}>
                    <div className="site-card-border-less-wrapper" onClick={() => click("s1b2")}>
                        <Card hoverable title="Second Floor - 1BHK" bordered={false} style={{ width: 300 }}>
                            <p>Generated on 01-12-2020</p>
                            <p>Rent</p>
                            <p>Power</p>
                            <p>Water</p>
                        </Card>
                    </div> </Col>
            </Row>
        </SiteLayout>
    </div>

}

export default withRouter(Home)