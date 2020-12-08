import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import SiteLayout from '../HOC/SiteLayout';
import database from '../Firebase/FirebaseInit';
import { List, message, Avatar, Spin, Divider, Carousel } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import './Home.css';
import Home1 from './Home1';

function Home(props) {


    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [listLoading, setListLoading] = useState(false)
    const [hasMore, sethasMore] = useState(true)

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
            resultData.reverse();
            setData(resultData);
            setLoading(false);
            console.log("useEffect")
        });

    }, [loading])

    function click(FlatCode) {
        props.history.push(`/view/${FlatCode}`);
        // database.ref('/homedetails').push().set({
        //     roomCode: FlatCode
        // })
    }

    const handleInfiniteOnLoad = () => {
        setListLoading(true);
        return;
        // if (data.length > 5) {
        //     message.warning('Infinite List loaded all');
        //     setLoading(false);
        //     sethasMore(false);
        //     return;
        // }
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
            resultData = data.concat(resultData)
            setData(resultData);
            setListLoading(true);
            sethasMore(false);
            console.log("handleInfiniteOnLoad")
        });
    };

    function onChange(a, b, c) {
        console.log(a, b, c);
    }

    const contentStyle = {
        height: '250px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };


    return <div>
        <SiteLayout selectedKey="home">

            {/* <Home1 click={click} /> */}

            <Carousel style={{ marginTop: "25px" }} afterChange={onChange} autoplay>
                <div>
                    <h1 style={contentStyle}>Create Bills</h1>
                </div>
                <div>
                    <h1 style={contentStyle}>Generate Home Data</h1>
                </div>
                <div>
                    <h1 style={contentStyle}>Keep track of the bills</h1>
                </div>
                <div>
                    <h1 style={contentStyle}>Track the payments</h1>
                </div>
            </Carousel>

            <Divider orientation="left">Recent Track</Divider>

            <div className="demo-infinite-container">
                <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    loadMore={handleInfiniteOnLoad}
                    hasMore={!listLoading && hasMore}
                    useWindow={false}>

                    <List
                        dataSource={data}
                        renderItem={item => (
                            <List.Item key={item.key}>
                                <List.Item.Meta
                                    avatar={
                                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    }
                                    title={<a href="https://ant.design">{item.tenantName}</a>}
                                    description={item.roomName}
                                />
                                <div> <p>Created on : {item.data.date}</p>
                                    <p>Paid : {item.data.paid.toString()}</p>
                                </div>
                            </List.Item>
                        )}>
                        {loading && hasMore && (
                            <div className="demo-loading-container">
                                <Spin />
                            </div>
                        )}
                    </List>
                </InfiniteScroll>
            </div>
        </SiteLayout>
    </div>

}

export default withRouter(Home)