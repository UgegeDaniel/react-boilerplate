import { useState, useEffect } from 'react';
import FETCH_URL from '../constants';
import { ResponseDataType } from '../types';

const useData = () => {
  const [data, setData] = useState<ResponseDataType | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const fetchData = async () : Promise<void> => {
    setIsLoading(true);
    try {
      const response = await fetch(FETCH_URL);
      console.log(response);
      // const responseData: ResponseDataType[] = await response.json();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      // (responseData.length && responseData[0]) && setData(responseData[0]);
      setIsLoading(false);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !data && fetchData();
    // console.log({ data });
  }, [data]);
  return {
    data, fetchData, isLoading,
  };
};

export default useData;
