---
title: 'Another Test Post'
date: '1999-01-01'
tags: ['d', 'e', 'c', 'two words', 'b', '1234', 'a']
---

Test Post Content.
Lorem Ipsum...

# First Headline

## Second Headline

### Third Headline

**Bold**

_Italic_

**_Bild & Italic_**

```jsx
// components/codeblock.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={dracula}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export default CodeBlock;
```

[dis a link](https://www.google.de)
