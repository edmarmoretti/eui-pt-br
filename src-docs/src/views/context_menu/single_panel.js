import React, { useState } from 'react';

import {
  EuiButtonEmpty,
  EuiContextMenuPanel,
  EuiContextMenuItem,
  EuiPopover,
} from '../../../../src/components';
import { useGeneratedHtmlId } from '../../../../src/services';

export default () => {
  const [isPopoverOpen, setPopover] = useState(false);
  const [rowSize, setRowSize] = useState(50);

  const singleContextMenuPopoverId = useGeneratedHtmlId({
    prefix: 'singleContextMenuPopover',
  });

  const onButtonClick = () => {
    setPopover(!isPopoverOpen);
  };

  const closePopover = () => {
    setPopover(false);
  };

  const getIconType = (size) => {
    return size === rowSize ? 'check' : 'empty';
  };

  const button = (
    <EuiButtonEmpty
      size="s"
      iconType="arrowDown"
      iconSide="right"
      onClick={onButtonClick}
    >
      Linhas por página: {rowSize}
    </EuiButtonEmpty>
  );

  const items = [
    <EuiContextMenuItem
      key="10 rows"
      icon={getIconType(10)}
      onClick={() => {
        closePopover();
        setRowSize(10);
      }}
    >
      10 linhas
    </EuiContextMenuItem>,
    <EuiContextMenuItem
      key="20 rows"
      icon={getIconType(20)}
      onClick={() => {
        closePopover();
        setRowSize(20);
      }}
    >
      20 linhas
    </EuiContextMenuItem>,
    <EuiContextMenuItem
      key="50 rows"
      icon={getIconType(50)}
      onClick={() => {
        closePopover();
        setRowSize(50);
      }}
    >
      50 linhas
    </EuiContextMenuItem>,
    <EuiContextMenuItem
      key="100 rows"
      icon={getIconType(100)}
      onClick={() => {
        closePopover();
        setRowSize(100);
      }}
    >
      100 linhas
    </EuiContextMenuItem>,
  ];

  return (
    <EuiPopover
      id={singleContextMenuPopoverId}
      button={button}
      isOpen={isPopoverOpen}
      closePopover={closePopover}
      panelPaddingSize="none"
      anchorPosition="downLeft"
    >
      <EuiContextMenuPanel size="s" items={items} />
    </EuiPopover>
  );
};
