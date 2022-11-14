import { memo } from 'react';

function MarkupContainer(props: any) {
  const classNames = [
    'markupContainer',
    props.className &&
      (typeof props.className === 'string' ? props.className : Array.isArray(props.className) && props.className),
  ];

  return <div className={classNames.flat().join(' ')} dangerouslySetInnerHTML={{ __html: props.value }} />;
}

export default memo(MarkupContainer);
