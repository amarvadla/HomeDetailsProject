import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

function SiteLayout(props) {



    return <div>
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[props.selectedKey]}>
                    <Menu.Item key="home"><span>Home</span><Link to="/home" /></Menu.Item>
                    <Menu.Item key="details" ><span>Details</span><Link to="/details" /></Menu.Item>
                    <Menu.Item key="bills" ><span>Bills</span><Link to="/bills" /></Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                {props.children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Project 2020</Footer>
        </Layout>
    </div>

}

export default withRouter(SiteLayout)