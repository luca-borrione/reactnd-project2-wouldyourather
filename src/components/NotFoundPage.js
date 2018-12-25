import React from 'react';
import PageContainer from './pageContainers/PageContainer';

/**
 * @module
 * @name NotFoundPage
 * @description
 * Displays a simple 404 Not Found page consisting in a green circle with text.
 * The user gets this when typing an unexpected location path in the browser url bar.
 */
const NotFoundPage = () => (
  <PageContainer id="notfound-page">
    <div className="notfound-page-wrap">
      <h1>404</h1>
      <h2>Not Found</h2>
    </div>
  </PageContainer>
);

export default NotFoundPage;
