import React, { useEffect, useState } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import { editDetails, saveDetails } from '../Details/SaveDetails';
import SiteLayout from '../HOC/SiteLayout';
import database from '../Firebase/FirebaseInit';
import {
    Form,
    Input,
    Button,
} from 'antd';

function EditView(props) {

    const params = useParams();
    const [form] = Form.useForm();
    const [flatData, setFlatData] = useState({});

    useEffect(() => {

        if (params.id) {
            database.ref('homedetails/' + params.id).on('value', (snapshot) => {
                const data = snapshot.val();
                setFlatData(data);
                console.log(data);

                form.setFieldsValue({
                    "inputName": flatData.name,
                    "inputRoomName": flatData.roomName,
                    "inputOccupation": flatData.occupation,
                    "inputNativePlace": flatData.nativePlace,
                    "inputRoomCode": flatData.roomCode
                });
            });

        }

    }, [form, flatData.name])

    const onFinish = (values) => {
        console.log('Success:', values);
        if (params.id)
            editDetails(params.id, values);
        else
            saveDetails(values);
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
                    "inputName": flatData ? flatData.name : "",
                    "inputRoomName": flatData ? flatData.roomName : "",
                    "inputOccupation": flatData ? flatData.occupation : "",
                    "inputNativePlace": flatData ? flatData.nativePlace : "",
                    "inputRoomCode": flatData ? flatData.roomCode : "F"
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                size={"default"}>

                <Form.Item label="Name of the tenant" name="name" >
                    <Form.Item name="inputName" noStyle rules={[
                        {
                            required: true,
                            message: 'Please input room name!',
                        },
                    ]}>
                        <Input />
                    </Form.Item>
                </Form.Item>
                <Form.Item label="Name of the room" name="roomName">
                    <Form.Item name="inputRoomName" noStyle rules={[
                        {
                            required: true,
                            message: 'Please input room name!',
                        },
                    ]}>
                        <Input />
                    </Form.Item>
                </Form.Item>
                <Form.Item label="occupation" name="occupation" >
                    <Form.Item name="inputOccupation" noStyle rules={[
                        {
                            required: true,
                            message: 'Please input room name!',
                        },
                    ]}>
                        <Input />
                    </Form.Item>
                </Form.Item>
                <Form.Item label="NativePlace of the tenant" name="nativePlace" >
                    <Form.Item name="inputNativePlace" noStyle rules={[
                        {
                            required: true,
                            message: 'Please input tenant native place!',
                        },
                    ]}>
                        <Input />
                    </Form.Item>
                </Form.Item>
                <Form.Item label="roomCode" name="roomCode">
                    <Form.Item name="inputRoomCode" noStyle rules={[
                        {
                            required: true,
                            message: 'Please input roomCode!',
                        },
                    ]}>
                        <Input />
                    </Form.Item>
                </Form.Item>
                <Form.Item label="Button">
                    <Button type="primary" htmlType="submit">
                        Submit</Button>
                </Form.Item>
            </Form>
        </div>
    </SiteLayout>

}

export default withRouter(EditView);