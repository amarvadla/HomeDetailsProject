import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import SiteLayout from '../HOC/SiteLayout';
import {
    Form,
    Input,
    Button,
    DatePicker,
    InputNumber,
    Switch,
    Select,
} from 'antd';
import database from '../Firebase/FirebaseInit';
const { Option } = Select;
// import './FlatView.css'

function FlatView(props) {

    // const params = useParams()

    const [roomDetails, setRoomDetails] = useState([])
    const [form] = Form.useForm();

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
            console.log(roomDetails)
        });

    }, [form])

    const onFinish = (values) => {
        console.log('Success:', values);

        let today = new Date(values.date);
        var fecha = `${today.getDate()} - ${today.getMonth() + 1} - ${today.getFullYear()}`;
        let changeData = {
            id: values.tenantId,
            date: fecha,
            rent: values.rent,
            power: values.power,
            water: values.water,
            paid: values.paid
        }
        var result = database.ref('bills').push().set(changeData);
        props.history.push("/bills");
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return <SiteLayout>
        <div className="div-form">
            <Form
                form={form}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                size={"default"}>

                <Form.Item label="Name of the tenant" name="tenantId" rules={[
                    {
                        required: true,
                        message: 'Please input your name!',
                    },
                ]}>
                    <Select placeholder="Select a tenant">
                        {roomDetails.map((details) => {
                            return <Option value={details.key}>{details.data.name}</Option>
                        })}
                    </Select>
                </Form.Item>
                <Form.Item label="Date submitted" name="date" rules={[
                    {
                        required: true,
                        message: 'Please input date!',
                    },
                ]}>
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Rent bill" name="rent" rules={[
                    {
                        required: true,
                        message: 'Please input rent!',
                    },
                ]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Power bill" name="power">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Water bill" name="water">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Paid" name="paid" initialValue={false}>
                    <Switch />
                </Form.Item>
                <Form.Item label="Button">
                    <Button type="primary" htmlType="submit">
                        Submit</Button>
                </Form.Item>
            </Form>
        </div>
    </SiteLayout>

}

export default withRouter(FlatView);