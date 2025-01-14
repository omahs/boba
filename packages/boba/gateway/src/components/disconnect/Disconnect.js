/*
Copyright 2021-present Boba Network.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. */

import React from 'react';
import { LoginOutlined } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

import useDisconnect from 'hooks/useDisconnect';

function Disconnect () {

  const { disconnect } = useDisconnect();

  return (
    <>
      <Tooltip onClick={disconnect}>
        <IconButton size='medium'>
          <LoginOutlined sx={{ fontSize: 16 }} />
        </IconButton>
      </Tooltip>
    </>
  );
}

export default React.memo(Disconnect);
