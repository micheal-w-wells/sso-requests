import React from 'react';
import styled from 'styled-components';

export interface MediaRule {
  maxWidth?: number;
  width?: number;
}

const Container = styled.div<{ rules: MediaRule[] }>`
  display: block;
  max-width: 100% !important;

  ${(props) =>
    props.rules.map((rule: MediaRule, index: number) => {
      if (index === 0) {
        return `@media only screen and (max-width: ${rule.maxWidth}px) {
          & {
            width: auto !important;
            margin-left: 1em !important;
            margin-right: 1em !important;
          }
        }`;
      } else if (index === props.rules.length - 1) {
        return `@media only screen and (min-width: ${(props.rules[index - 1].maxWidth || 0) + 1}px) {
          & {
            width: ${rule.width}px;
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }`;
      } else {
        return `@media only screen and (min-width: ${(props.rules[index - 1].maxWidth || 0) + 1}px) and (max-width: ${
          rule.maxWidth
        }px) {
          & {
            width: ${rule.width}px;
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }`;
      }
    })}
`;

export default Container;