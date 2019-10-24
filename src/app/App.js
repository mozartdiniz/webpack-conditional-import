import React, { useState, useEffect } from 'react';

import { Form } from '../formLoader';

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
    <div>
      <Form onFieldChange={ saveFieldValue } /> { formData.username }
    </div>
  );
};
