import React from 'react';
import 'antd/dist/antd.css';
import { Input, AutoComplete } from 'antd';
import './index.css'
import PropTypes from 'prop-types';


const SearchInput = ({ handleSearch, options }) => {


  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      className="autocomplete"
      options={options}
      onSearch={handleSearch}
    >
      <Input.Search size="large" placeholder="input here" enterButton />
    </AutoComplete>
  );
};

SearchInput.defaultProps = {
  options: [],
}

SearchInput.propTypes = {
  options: PropTypes.array,
  handleSearch: PropTypes.func.isRequired
};

export default SearchInput