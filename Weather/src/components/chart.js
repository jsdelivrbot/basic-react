import lodash from 'lodash';
import React, { Component } from 'react';
import { Sparklines, SparklinesLine,  SparklinesReferenceLine } from 'react-sparklines'

function average(data ) {
    return lodash.round(lodash.sum(data)/data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={ props.data }>
                <SparklinesLine color={ props.color } />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div> { average(props.data) } { props.unit }</div>
        </div>
    )
}