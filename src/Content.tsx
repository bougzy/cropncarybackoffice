// Content.tsx
import React from 'react';

interface ContentProps {
  selectedMenu: string;
}

const Content: React.FC<ContentProps> = ({ selectedMenu }) => {
  return (
    <div>
      {selectedMenu === 'Page 1' && (
        <div>
          <h2>Page 1</h2>
          <p>This is the content for Page 1.</p>
        </div>
      )}
      {selectedMenu === 'Page 2' && (
        <div>
          <h2>Page 2</h2>
          <p>This is the content for Page 2.</p>
        </div>
      )}
      {selectedMenu === 'Page 3' && (
        <div>
          <h2>Page 3</h2>
          <p>This is the content for Page 3.</p>
        </div>
      )}
    </div>
  );
};

export default Content;
