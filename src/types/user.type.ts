import { Topic } from './topic.type';

export type User = {
  id: number;
  username: string;
  email: string;
  interests: Topic[];
};
