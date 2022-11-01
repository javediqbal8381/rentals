import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import {Row ,Col, Form, Input} from 'antd'
import {useDispatch,useSelector} from 'react-redux'
import { addCar } from '../redux/actions/carsAction'
import Spinner from '../components/Spinner'
import './addcar.css'
function AddCar () {

    const dispatch=useDispatch()
    const {loading}=useSelector(state=>state.alertsReducer)
    function onFinish (values){
        values.bookedTimeSlots=[]
            dispatch(addCar(values))
    }
    
  return <DefaultLayout>
      {loading?(<Spinner name="Adding Car"/>):(
        <Row justify='center mt-5'>
        <Col lg={12} sm={24} xs={24}>
            <Form className='bs1 p-2' layout='vertical' onFinish={onFinish}>
                <h3>Add New Car</h3>
                <hr/>
            <Form.Item name='name' label='car name' rules={[{required: true}]}>
                <Input/>
            </Form.Item>
            <Form.Item name='image' label='image url' rules={[{required: true}]}>
                <Input/>
            </Form.Item>
            <Form.Item name='rentPerHour' label='rent per hour' rules={[{required: true}]}>
                <Input/>
            </Form.Item>
            <Form.Item name='capacity' label='Capacity' rules={[{required: true}]}>
                <Input/>
            </Form.Item>
            <Form.Item name='fueltype' label='fuel Type' rules={[{required: true}]}>
                <Input/>
            </Form.Item>
            <button className ='add-car-btn-addcar'>ADD CAR</button>
            </Form>
        </Col>
    </Row>
      )}
     
  </DefaultLayout>
}

export default AddCar;