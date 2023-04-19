export type JsonResponse<T> = CorrectResponse<T> | ErrorResponse;

type BaseResponse = {
  code: number;
};

type CorrectResponse<T> = BaseResponse & {
  body: Record<string, T>;
};

type ErrorResponse = BaseResponse & {
  message: string;
};
