import { PostRepo } from '../repo/post.repo';
import { UserRepo } from '../repo/user.repo';
import { Post, PostDTO } from '../types/post.type';
import { Topic } from '../types/topic.type';
import { Maybe } from '../utils/maybe';

const userRepo = new UserRepo();
const postRepo = new PostRepo();

export function createPost(postDTO: PostDTO, userId: number): Maybe<Post> {
  const user$ = Maybe.from(userRepo.findById(userId));

  const post$ = user$.flattern(({ id: userId }) =>
    Maybe.from(postRepo.create({ ...postDTO, userId }))
  );

  return post$;
}

export function getMostRelevantPosts(userId: number): Maybe<Post[]> {
  return Maybe.from(userRepo.findById(userId))
    .bind(({ interests }) => interests)
    .bind((topics) => getPostsBasedOnInterests(topics, 5));
}

function getPostsBasedOnInterests(topics: Topic[], limit: number): Post[] {
  return topics
    .map((topic) => Maybe.from(postRepo.findByTopic(topic, limit)))
    .flatMap((posts$) =>
      posts$.match({
        just: (posts) => posts,
        nothing: () => [],
      })
    );
}
