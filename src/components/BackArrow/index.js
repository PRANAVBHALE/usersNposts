import React from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons';
import './index.css'
import ROUTE_CONSTANTS from '../../utils/routeConstants';

const BackArrow = () => {

  const handleBackClick = () => window.location.href = ROUTE_CONSTANTS.POST_LIST;

  return (
    <ArrowLeftOutlined
      onClick={handleBackClick}
      className="arrow"
    />
  )
}

export default BackArrow