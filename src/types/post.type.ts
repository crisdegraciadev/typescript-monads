import { Topic } from './topic.type';

export type Post = {
  id: number;
  title: string;
  content: string;
  userId: number;
  topic: Topic;
};

export type PostDTO = Omit<Post, 'id' | 'userId'>;
