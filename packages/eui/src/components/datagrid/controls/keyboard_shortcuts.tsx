/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { useState, useMemo, ReactNode } from 'react';

import { useGeneratedHtmlId, useEuiMemoizedStyles } from '../../../services';
import { EuiButtonIcon } from '../../button';
import { EuiToolTip } from '../../tool_tip';
import { EuiPopover, EuiPopoverTitle } from '../../popover';
import { EuiDescriptionList } from '../../description_list';
import { EuiText } from '../../text';
import { useEuiI18n, EuiI18n } from '../../i18n';

import { euiDataGridKeyboardShortcutsStyles } from './keyboard_shortcuts.styles';

export const useDataGridKeyboardShortcuts = (): {
  keyboardShortcuts: ReactNode;
} => {
  const [isOpen, setIsOpen] = useState(false);

  const title = useEuiI18n('euiKeyboardShortcuts.title', 'Keyboard shortcuts');
  const titleId = useGeneratedHtmlId();

  const styles = useEuiMemoizedStyles(euiDataGridKeyboardShortcutsStyles);

  const keyboardShortcuts = useMemo(
    () => (
      <EuiPopover
        data-test-subj="dataGridKeyboardShortcutsPopover"
        isOpen={isOpen}
        closePopover={() => setIsOpen(false)}
        anchorPosition="downRight"
        panelPaddingSize="none"
        button={
          <EuiToolTip content={title} delay="long">
            <EuiButtonIcon
              size="xs"
              iconType="keyboard"
              color="text"
              data-test-subj="dataGridKeyboardShortcutsButton"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={title}
            />
          </EuiToolTip>
        }
      >
        <EuiPopoverTitle paddingSize="s">
          <h2 id={titleId}>{title}</h2>
        </EuiPopoverTitle>
        <EuiText
          css={styles.euiDataGrid__keyboardShortcuts}
          className="euiDataGrid__keyboardShortcuts"
          size="xs"
        >
          <EuiDescriptionList
            aria-labelledby={titleId}
            type="column"
            columnWidths={['auto', 'auto']}
            align="center"
            compressed
            listItems={[
              {
                title: (
                  <kbd>
                    <EuiI18n
                      token="euiKeyboardShortcuts.upArrowTitle"
                      default="Seta para cima"
                    />
                  </kbd>
                ),
                description: (
                  <EuiI18n
                    token="euiKeyboardShortcuts.upArrowDescription"
                    default="Move uma célula para cima"
                  />
                ),
              },
              {
                title: (
                  <kbd>
                    <EuiI18n
                      token="euiKeyboardShortcuts.downArrowTitle"
                      default="Seta para baixo"
                    />
                  </kbd>
                ),
                description: (
                  <EuiI18n
                    token="euiKeyboardShortcuts.downArrowDescription"
                    default="Move uma célula para baixo"
                  />
                ),
              },
              {
                title: (
                  <kbd>
                    <EuiI18n
                      token="euiKeyboardShortcuts.rightArrowTitle"
                      default="Seta da direita"
                    />
                  </kbd>
                ),
                description: (
                  <EuiI18n
                    token="euiKeyboardShortcuts.rightArrowDescription"
                    default="Move uma célula para a direita"
                  />
                ),
              },
              {
                title: (
                  <kbd>
                    <EuiI18n
                      token="euiKeyboardShortcuts.leftArrowTitle"
                      default="Seta para a esquerda"
                    />
                  </kbd>
                ),
                description: (
                  <EuiI18n
                    token="euiKeyboardShortcuts.leftArrowDescription"
                    default="Move uma célula para a esquerda"
                  />
                ),
              },
              {
                title: (
                  <kbd>
                    <EuiI18n
                      token="euiKeyboardShortcuts.homeTitle"
                      default="Home"
                    />
                  </kbd>
                ),
                description: (
                  <EuiI18n
                    token="euiKeyboardShortcuts.homeDescription"
                    default="Move para a primeira célula da linha atual"
                  />
                ),
              },
              {
                title: (
                  <kbd>
                    <EuiI18n
                      token="euiKeyboardShortcuts.endTitle"
                      default="End"
                    />
                  </kbd>
                ),
                description: (
                  <EuiI18n
                    token="euiKeyboardShortcuts.endDescription"
                    default="Move para a última célula da linha atual"
                  />
                ),
              },
              {
                title: (
                  <>
                    <kbd>
                      <EuiI18n
                        token="euiKeyboardShortcuts.ctrl"
                        default="Ctrl"
                      />
                    </kbd>{' '}
                    <kbd>
                      <EuiI18n
                        token="euiKeyboardShortcuts.homeTitle"
                        default="Home"
                      />
                    </kbd>
                  </>
                ),
                description: (
                  <EuiI18n
                    token="euiKeyboardShortcuts.ctrlHomeDescription"
                    default="Move para a primeira célula da página atual"
                  />
                ),
              },
              {
                title: (
                  <>
                    <kbd>
                      <EuiI18n
                        token="euiKeyboardShortcuts.ctrl"
                        default="Ctrl"
                      />
                    </kbd>{' '}
                    <kbd>
                      <EuiI18n
                        token="euiKeyboardShortcuts.endTitle"
                        default="End"
                      />
                    </kbd>
                  </>
                ),
                description: (
                  <EuiI18n
                    token="euiKeyboardShortcuts.ctrlEndDescription"
                    default="Move para a última célula da página atual"
                  />
                ),
              },
              {
                title: (
                  <kbd>
                    <EuiI18n
                      token="euiKeyboardShortcuts.pageUpTitle"
                      default="Page Up"
                    />
                  </kbd>
                ),
                description: (
                  <EuiI18n
                    token="euiKeyboardShortcuts.pageUpDescription"
                    default="Vai para a última linha da página anterior"
                  />
                ),
              },
              {
                title: (
                  <kbd>
                    <EuiI18n
                      token="euiKeyboardShortcuts.pageDownTitle"
                      default="Page Down"
                    />
                  </kbd>
                ),
                description: (
                  <EuiI18n
                    token="euiKeyboardShortcuts.pageDownDescription"
                    default="Vai para a primeira linha da pŕoxima página"
                  />
                ),
              },
              {
                title: (
                  <kbd>
                    <EuiI18n
                      token="euiKeyboardShortcuts.enterTitle"
                      default="Enter"
                    />
                  </kbd>
                ),
                description: (
                  <EuiI18n
                    token="euiKeyboardShortcuts.enterDescription"
                    default="Abre os detalhes da célula"
                  />
                ),
              },
              {
                title: (
                  <kbd>
                    <EuiI18n
                      token="euiKeyboardShortcuts.escapeTitle"
                      default="Escape"
                    />
                  </kbd>
                ),
                description: (
                  <EuiI18n
                    token="euiKeyboardShortcuts.escapeDescription"
                    default="Fecha os detalhes da célula"
                  />
                ),
              },
            ]}
          />
        </EuiText>
      </EuiPopover>
    ),
    [isOpen, title, titleId, styles]
  );

  return { keyboardShortcuts };
};
