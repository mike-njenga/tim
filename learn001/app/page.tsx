// app/page.js

import React from 'react';

// The component function must be the default export of the file.
export default function HomePage() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to Next.js App Router! 🚀</h1>
      <p>This is the content of your `page.js` file, displayed at the root route.</p>
      
      <div style={{ marginTop: '20px' }}>
        <p>Today's Date: **{currentDate}**</p>
        <p>
          You can fetch data, use hooks, and render any React component here.
        </p>
      </div>

      <footer>
        <p>Built with Next.js</p>
      </footer>
    </main>
  );
}