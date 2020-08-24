import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Card, Typography } from 'antd'
import BackArrow from '../BackArrow'
import './index.css'
import PropTypes from 'prop-types';


const { Title } = Typography;

const PostDetails = ({ postDetails }) => {

  return (

    <div className="postdeatailview" >
      <BackArrow />
      {
        postDetails && postDetails.map((postdetail,i) => {
          return (
            <div className="cardholder" key={postdetail.name + 1} >
              <Card hoverable bodyStyle={{ textAlign: 'left' }}>
                <Title level={3}>Subject - {postdetail.name}</Title>
                <Title level={3}>Email - {postdetail.email}</Title>
                <Title level={4}>Comment - {postdetail.body}</Title>
              </Card>
            </div>
          )
        })
      }
    </div>
  )
}

PostDetails.defaultProps = {
  postDetails: []
}

PostDetails.propTypes = {
  postDetails: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    postDetails: state.postData.postDetails
  }
}

export default withRouter(connect(mapStateToProps, null)(PostDetails))