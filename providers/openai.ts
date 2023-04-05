import {
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
  CreateCompletionRequest,
  CreateCompletionResponse,
  CreateEditRequest,
  CreateEditResponse,
  CreateEmbeddingRequest,
  CreateEmbeddingResponse,
  CreateImageRequest,
  CreateModerationRequest,
  CreateModerationResponse,
  ImagesResponse,
} from "openai";

import { sendAndPayRequest } from "../deezy/api";

export {
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
  CreateCompletionRequest,
  CreateCompletionResponse,
  CreateEditRequest,
  CreateEditResponse,
  CreateEmbeddingRequest,
  CreateEmbeddingResponse,
  CreateImageRequest,
  CreateModerationRequest,
  CreateModerationResponse,
  ImagesResponse,
};

export async function createChatCompletion(
  data: CreateChatCompletionRequest
): Promise<CreateChatCompletionResponse> {
  const resp = await sendAndPayRequest<
    CreateChatCompletionRequest,
    CreateChatCompletionResponse
  >({
    provider: "openai",
    api_path: "v1/chat/completions",
    data,
  });
  return resp;
}

export async function createEdit(
  data: CreateEditRequest
): Promise<CreateEditResponse> {
  const resp = await sendAndPayRequest<CreateEditRequest, CreateEditResponse>({
    provider: "openai",
    api_path: "v1/edits",
    data,
  });
  return resp;
}

export async function createCompletion(
  data: CreateCompletionRequest
): Promise<CreateCompletionResponse> {
  const resp = await sendAndPayRequest<
    CreateCompletionRequest,
    CreateCompletionResponse
  >({
    provider: "openai",
    api_path: "v1/completions",
    data,
  });
  return resp;
}

export async function createImage(
  data: CreateImageRequest
): Promise<ImagesResponse> {
  const resp = await sendAndPayRequest<CreateImageRequest, ImagesResponse>({
    provider: "openai",
    api_path: "v1/images/generations",
    data,
  });
  return resp;
}

export async function createEmbedding(
  data: CreateEmbeddingRequest
): Promise<CreateEmbeddingResponse> {
  const resp = await sendAndPayRequest<
    CreateEmbeddingRequest,
    CreateEmbeddingResponse
  >({
    provider: "openai",
    api_path: "v1/embeddings",
    data,
  });
  return resp;
}

export async function createModeration(
  data: CreateModerationRequest
): Promise<CreateModerationResponse> {
  const resp = await sendAndPayRequest<
    CreateModerationRequest,
    CreateModerationResponse
  >({
    provider: "openai",
    api_path: "v1/moderations",
    data,
  });
  return resp;
}
