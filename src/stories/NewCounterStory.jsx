import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import NewCounter from '../03/NewCounter';
import ReduxApp from '../07/ReduxApp01';

storiesOf('NewCounter', module).add('기본 설정', () => <NewCounter count={0} />);
