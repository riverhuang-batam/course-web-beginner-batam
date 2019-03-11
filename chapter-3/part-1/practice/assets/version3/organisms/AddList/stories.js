import React from 'react';
import { storiesOf } from '@storybook/react';

import AddList from './index';

storiesOf('Organisms / AddList', module)
    .add('simple', () => {
        return (<AddList/>)
    })