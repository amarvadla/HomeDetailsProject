import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

function SiteLayout(props) {

    const logOutClick = () => {
        localStorage.setItem("login", "loggedout");
        props.history.push("/login");
    }


    return <div>
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[props.selectedKey]}>
                    <Menu.Item key="home"><span>Home</span><Link to="/home" /></Menu.Item>
                    <Menu.Item key="details" ><span>Details</span><Link to="/details" /></Menu.Item>
                    <Menu.Item key="bills" ><span>Bills</span><Link to="/bills" /></Menu.Item>
                    <Menu.Item key="logout" style={{ float: "right" }} onClick={logOutClick}><span>Logout</span></Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px', background: "#e6e6ff", height: "100vh" }}>
                {props.children}
            </Content>
            <Footer style={{ textAlign: 'center', background: "#000033", color: "#fff" }}><div style={{ color: "#fff" }}>
                Home Bill ©2020 Created by Amarnath Vadla <br /> All rights reserved
                </div></Footer>
        </Layout>
    </div>

}

export default withRouter(SiteLayout)