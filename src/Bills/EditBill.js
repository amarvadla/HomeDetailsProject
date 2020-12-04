import React, { useEffect, useState } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import SiteLayout from '../HOC/SiteLayout';
import {
    Form,
    Button,
    InputNumber,
    Switch,
    Select,
} from 'antd';
import database from '../Firebase/FirebaseInit';
const { Option } = Select;
// import './FlatView.css'

function EditBill(props) {

    const params = useParams()
    const [billDetails, setBillDetails] = useState([])
    const [form] = Form.useForm();

    useEffect(() => {
        window.scrollTo(0, 0);
        if (params.id) {
            database.ref('bills/' + params.id).on('value', (snapshot) => {
                const data = snapshot.val();
                setBillDetails(data);
                console.log(data)

                form.setFieldsValue({
                    "rent": billDetails.rent,
                    "power": billDetails.power,
                    "water": billDetails.water,
                    "paid": billDetails.paid
                });
            });

        }

    }, [form, billDetails.rent])

    const onFinish = (values) => {
        console.log('Success:', values);

        let today = new Date();
        var fecha = `${today.getDate()} - ${today.getMonth() + 1} - ${today.getFullYear()}`;
        let changeData = {
            id: billDetails.id,
            date: fecha,
            rent: values.rent,
            power: values.power,
            water: values.water,
            paid: values.paid
        }
        var result = database.ref('bills/' + params.id).update(changeData);
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
                <Form.Item label="Paid" name="paid" valuePropName="checked"><Switch /></Form.Item>
                <Form.Item label="Button">
                    <Button type="primary" htmlType="submit">
                        Submit</Button>
                </Form.Item>
            </Form>
        </div>
    </SiteLayout>

}

export default withRouter(EditBill);