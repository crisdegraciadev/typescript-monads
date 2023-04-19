export class Maybe<T> {
  private constructor(private value: T | undefined | null) {}

  static from<T>(value: T | undefined | null): Maybe<T> {
    return value === null || value === undefined
      ? Maybe.nothing<T>()
      : Maybe.just<T>(value);
  }

  private static just<T>(value: T): Maybe<T> {
    return new Maybe<T>(value);
  }

  private static nothing<T>(): Maybe<T> {
    return new Maybe<T>(null);
  }

  public match<U>({ just, nothing }: { just: (value: T) => U; nothing: () => U }): U {
    return this.value === null || this.value === undefined ? nothing() : just(this.value);
  }

  public bind<U>(f: (value: T) => U): Maybe<U> {
    return this.value === null || this.value === undefined
      ? Maybe.nothing<U>()
      : Maybe.just<U>(f(this.value));
  }

  public flattern<U>(f: (value: T) => Maybe<U>): Maybe<U> {
    return this.value === null || this.value === undefined
      ? Maybe.nothing<U>()
      : f(this.value);
  }
}
