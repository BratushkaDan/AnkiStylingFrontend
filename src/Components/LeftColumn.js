import * as React from 'react';

import './LeftColumn.scss';

export default function LeftColumn(props) {
  return (<div className="leftColumn">
    {props.children}
  </div>)
}