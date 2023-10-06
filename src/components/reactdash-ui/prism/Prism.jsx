import React from 'react';
import Highlight, { defaultProps } from "prism-react-renderer";

export default function Prism(props) {
  const exampleCode = props.data;

  return (
    <>
      <Highlight {...defaultProps} code={exampleCode} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </>
  );
}