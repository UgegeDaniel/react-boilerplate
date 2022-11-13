/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import useData from './hooks/useData';
import Example from './component/Example';

function App() {
  const {
    data, isLoading, fetchData,
  } = useData();
  return (
    <div>
      <h1>HELLO WORLD</h1>
      <Example data={data} isLoading={isLoading} fetchData={fetchData} />
    </div>
  );
}

export default App;
