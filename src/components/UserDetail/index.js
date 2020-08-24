import React from 'react'
import { withRouter } from 'react-router-dom';
import { Card } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { connect } from 'react-redux';
import BackArrow from '../BackArrow';
import './index.css'
import PropTypes from 'prop-types';


const { Title, Paragraph } = Typography;

const UserDetail = ({ userDetail }) => {

  const { username, name, email, company, address } = userDetail

  return (
    <div className ="userdetailview" >
      <BackArrow />
      
      <Card hoverable 
       bodyStyle={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around'
      }}>
        <Card
          className="userdetail"
          bodyStyle={{ height: '200px' }}
          size="small"
          title={null}
          >
          <Avatar size={64} icon={<UserOutlined />} />
          <Title level={3}>{username}</Title>
          <Title level={4}>{name}</Title>
          <Title level={4}>{email}</Title>

        </Card>

        <Card
          className="company-address-detail"
          headStyle={{ textAlign: 'left' }}
          bodyStyle={{
            height: '300px',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
          size="small"
          title="Personal Details"
          >

          <Paragraph level={5}>{company && company.name}</Paragraph>
         {address && <Paragraph level={5}>Address - {address.street}, {address.city} -  {address.zipcode}</Paragraph>}
        </Card>
      </Card>
    </div>
  )
}

UserDetail.defaultProps = {
  userDetail: {
    username:"", 
    name:"", 
    email:"", 
    company:{
      name:""
    }, 
    address:{
      street:"",
      city:"",
      zipcode:""
    }
  },  
}

UserDetail.propTypes = {
  userDetail: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {

  return {
    userDetail: state.userData.userDetail
  }
}

export default withRouter(connect(mapStateToProps, null)(UserDetail))
