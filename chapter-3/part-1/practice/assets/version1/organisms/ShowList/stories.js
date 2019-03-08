import React from 'react';
import { storiesOf } from '@storybook/react';

import ShowList from './index';

storiesOf('Organisms / ShowList', module)
    .add('simple', () => {
        return (<ShowList/>)
    })