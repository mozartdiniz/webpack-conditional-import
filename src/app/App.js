import React, { Fragment, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './App.style';

import { Form } from '../formLoader';
import theme from '../themeLoader';

export const App = () => {
  const [formData, setFormData] = useState({});

  const saveFieldValue = e => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Form onFieldChange={ saveFieldValue } />
        { formData.username }
      </Fragment>
    </ThemeProvider>
  );
};
