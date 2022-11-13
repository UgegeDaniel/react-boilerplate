import React from 'react';
import { Props } from '../types';
import Loader from './Loader';

// eslint-disable-next-line func-names
const AppBody: React.FC<Props> = function ({
  isLoading, data, fetchData,
}): React.ReactElement {
  return (
    <div>
      <h2>
        Example TypeScript Component with Air BnB standard Lint rules
      </h2>
      {/* <img src={data?.thumbnailUrl} alt="thumbnail" /> */}
      <div style={{ margin: 'auto auto%' }}>
        <Loader />
      </div>
    </div>
  );
};
export default AppBody;
