import { ResponseDataType } from './types';

export interface Props {
  isLoading: boolean;
  data?: ResponseDataType | undefined;
  fetchData: () => Promise<void>;
}
