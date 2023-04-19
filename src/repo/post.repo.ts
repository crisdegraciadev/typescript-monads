import { Post } from '../types/post.type';
import { Topic } from '../types/topic.type';

export class PostRepo {
  private posts: Post[] = [
    {
      id: 1,
      title: 'Introducción a React',
      content: 'React es una biblioteca de JavaScript para crear interfaces de usuario.',
      userId: 1,
      topic: 'React',
    },
    {
      id: 2,
      title: 'Programación Funcional en JS',
      content:
        'La programación funcional es un paradigma en donde se evita el cambio de estado y se utilizan funciones puras.',
      userId: 2,
      topic: 'FP',
    },
    {
      id: 3,
      title: 'Cómo utilizar Observables con RxJS',
      content:
        'RxJS es una biblioteca de JavaScript para trabajar con flujos de datos y eventos asincrónicos.',
      userId: 1,
      topic: 'RxJS',
    },
    {
      id: 4,
      title: 'Desarrollo web con Angular',
      content: 'Angular es un framework de JavaScript para crear aplicaciones web SPA.',
      userId: 3,
      topic: 'Angular',
    },
    {
      id: 5,
      title: 'Programación Orientada a Objetos en Java',
      content:
        'La programación orientada a objetos es un paradigma en donde se modelan objetos con atributos y métodos.',
      userId: 4,
      topic: 'OOP',
    },
    {
      id: 6,
      title: 'Introducción a Angular',
      content: 'En este post vamos a hablar sobre los conceptos básicos de Angular',
      userId: 1,
      topic: 'Angular',
    },
    {
      id: 7,
      title: 'React vs Angular',
      content: 'En este post vamos a comparar las diferencias entre React y Angular',
      userId: 2,
      topic: 'React',
    },
    {
      id: 8,
      title: 'Programación Funcional en JavaScript',
      content:
        'En este post vamos a hablar sobre los conceptos básicos de la programación funcional en JavaScript',
      userId: 1,
      topic: 'FP',
    },
    {
      id: 9,
      title: 'Introducción a GraphQL',
      content: 'En este post vamos a hablar sobre los conceptos básicos de GraphQL',
      userId: 2,
      topic: 'GraphQL',
    },
  ];

  create(post: Omit<Post, 'id'>): Post | undefined {
    const lastPost = this.posts.at(-1);
    const id = lastPost ? lastPost.id : 1;

    const createdPost = { ...post, id };
    this.posts = [...this.posts, createdPost];
    return createdPost;
  }

  findById(id: number): Post | undefined {
    return this.posts.find((post) => post.id === id);
  }

  findByTopic(topic: Topic, limit: number): Post[] {
    return this.posts.filter((post) => post.topic === topic).slice(0, limit);
  }
}
