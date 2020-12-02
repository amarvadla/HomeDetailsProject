import { withRouter } from 'react-router-dom';
import {  saveDetails } from '../Details/SaveDetails';
import SiteLayout from '../HOC/SiteLayout';
import {
    Form,
    Input,
    Button,
} from 'antd';

function AddView(props) {

    const onFinish = (values) => {
        saveDetails(values);
        props.history.push('/details');
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

export default withRouter(AddView);