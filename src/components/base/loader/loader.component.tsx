import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import StyledLoader from './loader.styled';

const LoaderComponent: React.FC<any> = (props) => {
  return (
    <>
      <StyledLoader {...props}>
        <div className='loader'>Loading...</div>
      </StyledLoader>
    </>
  );
};

export default LoaderComponent;
