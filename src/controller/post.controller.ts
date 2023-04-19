import { getMostRelevantPosts } from '../service/post.service';
import { Post } from '../types/post.type';
import { JsonResponse } from '../types/response.type';

export function getRelevantPostsForUser(id: number): JsonResponse<Post[]> {
  return getMostRelevantPosts(id).match<JsonResponse<Post[]>>({
    just: (posts) => ({ code: 200, body: { posts } }),
    nothing: () => ({ code: 500, message: 'Internal Server Error' }),
  });
}
