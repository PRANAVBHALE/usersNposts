import React, { useState, useEffect } from 'react';
import './index.css';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserDetail } from '../../actions/userActions';
import { getPostDetail } from '../../actions/postActions';
import SearchInput from '../SearchInput';
import ROUTE_CONSTANTS from '../../utils/routeConstants';
import { findSearchText } from '../../utils/healpers';
import PropTypes from 'prop-types';

const PostList = ({ posts, users, history, getUserDetail, getPostDetail }) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([])

  const [options, setOptions] = useState([]);
  const [searchText, setSearchText] = useState()

  useEffect(() => {

    if (posts && users) {

      makeData(posts, users)
    }
  }, [posts, users])

  const makeData = (posts, users) => {
    let newArr = []
    posts.forEach(post => {

      users.forEach(user => {

        if (post.userId === user.id) {
          let key = post.id + user.id
          let userId = user.id
          let postId = post.id
          let postTitle = post.title
          let userName = user.name

          let obj = { postTitle, userName, userId, postId,key }
          newArr.push(obj)
        }
      })
    });

    setData(newArr)
  }

  useEffect(() => {
    if (data.length > 0) {
      setLoading(false)
    }
  }, [data])

  const handleClick = (record, type) => {
    if (type === 'user') {
      getUserDetail(record.userId)
      history.push(ROUTE_CONSTANTS.USER_DETAILS)
    } else {

      getPostDetail(record.postId)
      history.push(ROUTE_CONSTANTS.POST_DETAILS)
    }
  }

  useEffect(() => {

    if (searchText) {
      const searchData = findSearchText(data,searchText)
      setData(searchData)
    } else {
      makeData(posts, users)
    }

  }, [searchText])

  const handleSearch = value => {
    setOptions(value ? searchResult(value) : []);
    setSearchText(value)
  };

  const searchResult = query =>
    []
      .join('.')
      .split('.')
      .map((item, idx) => {
          const category = `${query}${idx}`;
          return {
              value: category,
              label: (
                  <div className="searchresult">
                    {
                      data.length > 0 ? 
                      <span>Found {query}</span> 
                      : 
                      <span>No Result for {query}</span> 
                    }                 
                  </div>
              ),
          };
      });

  const columns = [
    {
      title: 'User',
      dataIndex: "userName",
      key: "userName",
      render: (text, record) => <div className="cell" onClick={(e) => handleClick(record, 'user')} >{text}</div>,
    },
    {
      title: 'Title',
      dataIndex: 'postTitle',
      key: 'postTitle',
      render: (text, record) => <div className="cell" onClick={(e) => handleClick(record, 'post')} >{text}</div>,
    },

  ];

  return (
    <div className="postlistview">

      <SearchInput  options={options} handleSearch={handleSearch} />

      < Table
        pagination={{ pageSize: 8 }}
        bordered
        dataSource={data}
        columns={columns}
        title={() => 'Post List'}
        loading={loading}
      />
    </div >
  );
};

PostList.defaultProps = {
  users: [],
  posts:[],
  history:{}
}

PostList.propTypes = {
  users: PropTypes.array.isRequired,
  posts:PropTypes.array.isRequired,
  history:PropTypes.object.isRequired,
  getUserDetail:PropTypes.func.isRequired,
  getPostDetail:PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    users: state.userData.users,
    posts: state.postData.posts,
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    getUserDetail,
    getPostDetail
  }, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList))