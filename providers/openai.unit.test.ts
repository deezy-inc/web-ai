import {
  createChatCompletion,
  createCompletion,
  createEdit,
  createEmbedding,
  createImage,
  createModeration,
  CreateChatCompletionRequest,
  CreateCompletionRequest,
  CreateEditRequest,
  CreateEmbeddingRequest,
  CreateImageRequest,
  CreateModerationRequest,
} from "./openai";
import { sendAndPayRequest } from "../deezy/api";

import { dummyData, dummyResponses } from "./dummy-data";

// Mock the sendAndPayRequest function
jest.mock("../deezy/api");

const mockedSendAndPayRequest = sendAndPayRequest as jest.MockedFunction<
  typeof sendAndPayRequest
>;

describe("OpenAI API", () => {
  afterEach(() => {
    mockedSendAndPayRequest.mockClear();
  });

  test("createChatCompletion should call sendAndPayRequest with proper arguments", async () => {
    const requestData: CreateChatCompletionRequest = dummyData.chatCompletion;
    const expectedResponse = dummyResponses.createChatCompletion;
    mockedSendAndPayRequest.mockResolvedValueOnce(expectedResponse);
    const result = await createChatCompletion(requestData);

    expect(mockedSendAndPayRequest).toHaveBeenCalledTimes(1);
    expect(mockedSendAndPayRequest).toHaveBeenCalledWith({
      provider: "openai",
      api_path: "v1/chat/completions",
      data: requestData,
    });
    expect(result).toEqual(expectedResponse);
  });

  test("createCompletion should call sendAndPayRequest with proper arguments", async () => {
    const requestData: CreateCompletionRequest = dummyData.chatCompletion;
    const expectedResponse = dummyResponses.createCompletion;
    mockedSendAndPayRequest.mockResolvedValueOnce(expectedResponse);
    const result = await createCompletion(requestData);

    expect(mockedSendAndPayRequest).toHaveBeenCalledTimes(1);
    expect(mockedSendAndPayRequest).toHaveBeenCalledWith({
      provider: "openai",
      api_path: "v1/completions",
      data: requestData,
    });
    expect(result).toEqual(expectedResponse);
  });

  test("createEdit should call sendAndPayRequest with proper arguments", async () => {
    const requestData: CreateEditRequest = dummyData.edit;
    const expectedResponse = dummyResponses.createEdit;
    mockedSendAndPayRequest.mockResolvedValueOnce(expectedResponse);
    const result = await createEdit(requestData);

    expect(mockedSendAndPayRequest).toHaveBeenCalledTimes(1);
    expect(mockedSendAndPayRequest).toHaveBeenCalledWith({
      provider: "openai",
      api_path: "v1/edits",
      data: requestData,
    });
    expect(result).toEqual(expectedResponse);
  });

  test("createEmbedding should call sendAndPayRequest with proper arguments", async () => {
    const requestData: CreateEmbeddingRequest = dummyData.embedding;
    const expectedResponse = dummyResponses.createEmbedding;
    mockedSendAndPayRequest.mockResolvedValueOnce(expectedResponse);
    const result = await createEmbedding(requestData);

    expect(mockedSendAndPayRequest).toHaveBeenCalledTimes(1);
    expect(mockedSendAndPayRequest).toHaveBeenCalledWith({
      provider: "openai",
      api_path: "v1/embeddings",
      data: requestData,
    });
    expect(result).toEqual(expectedResponse);
  });

  test("createImage should call sendAndPayRequest with proper arguments", async () => {
    const requestData: CreateImageRequest = dummyData.image;
    const expectedResponse = dummyResponses.createImage;
    mockedSendAndPayRequest.mockResolvedValueOnce(expectedResponse);
    const result = await createImage(requestData);

    expect(mockedSendAndPayRequest).toHaveBeenCalledTimes(1);
    expect(mockedSendAndPayRequest).toHaveBeenCalledWith({
      provider: "openai",
      api_path: "v1/images/generations",
      data: requestData,
    });
    expect(result).toEqual(expectedResponse);
  });

  test("createModeration should call sendAndPayRequest with proper arguments", async () => {
    const requestData: CreateModerationRequest = dummyData.moderation;
    const expectedResponse = dummyResponses.createModeration;
    mockedSendAndPayRequest.mockResolvedValueOnce(expectedResponse);
    const result = await createModeration(requestData);

    expect(mockedSendAndPayRequest).toHaveBeenCalledTimes(1);
    expect(mockedSendAndPayRequest).toHaveBeenCalledWith({
      provider: "openai",
      api_path: "v1/moderations",
      data: requestData,
    });
    expect(result).toEqual(expectedResponse);
  });
});
