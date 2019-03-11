import React from 'react';
import { storiesOf } from '@storybook/react';

import Item from './index';

storiesOf('Molecules / Item', module)
    .add('simple', () => {
        const data = {
            id: 1,
            todo: "help mommy"
        }
        return (
            <Item data={data}/>
        )
    }
)