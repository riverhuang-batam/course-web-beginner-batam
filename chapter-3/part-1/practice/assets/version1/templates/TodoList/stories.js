import React from 'react';
import { storiesOf } from '@storybook/react';

import TodoList from './index';

storiesOf('Templates / TodoList', module)
    .add('simple', () => {
        return (<TodoList/>)
    })