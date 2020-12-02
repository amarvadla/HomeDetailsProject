import React from 'react';
import { withRouter, useParams } from 'react-router-dom';
import SiteLayout from '../HOC/SiteLayout';
import {
    Form,
    Input,
    Button,
    DatePicker,
    InputNumber,
    Switch,
} from 'antd';
import './FlatView.css'

function FlatView(props) {

    // const params = useParams()

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return <SiteLayout>
        <div className="div-form">
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                size={"default"}>

                <Form.Item label="Name of the tenant" name="tenantName" rules={[
                    {
                        required: true,
                        message: 'Please input your name!',
                    },
                ]}>
                    <Input />
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
                <Form.Item label="Paid" name="paid">
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