

import React from 'react';

import { Sparklines, SparklinesLine } from 'react-sparklines';

import './Chart.scss'

export function Chart({marketPrice}) {

        return (
            <div>
            <Sparklines data={[marketPrice.x]}  width={150} height={30}>
  <SparklinesLine color="blue" />
</Sparklines>
            </div>
        )
    }

