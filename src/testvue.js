import React from 'react'
import { VueWrapper } from 'vuera'
import Test from './test.vue'

export default () => {
    return <div>
        this is react
        <VueWrapper
            component={Test}
            message='Hello from Vue!'
        />
    </div>
}