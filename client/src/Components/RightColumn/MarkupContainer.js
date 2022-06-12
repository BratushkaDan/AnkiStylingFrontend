import * as React from 'react';

function MarkupContainer(props) {
  return <div className="markupContainer" dangerouslySetInnerHTML={{__html: props.value}} />
}

export default React.memo(MarkupContainer);