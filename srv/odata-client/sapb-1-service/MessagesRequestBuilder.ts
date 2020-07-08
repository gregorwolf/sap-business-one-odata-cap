/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Messages } from './Messages';

/**
 * Request builder class for operations supported on the [[Messages]] entity.
 */
export class MessagesRequestBuilder extends RequestBuilder<Messages> {
  /**
   * Returns a request builder for retrieving one `Messages` entity based on its keys.
   * @param code Key property. See [[Messages.code]].
   * @returns A request builder for creating requests to retrieve one `Messages` entity based on its keys.
   */
  getByKey(code: number): GetByKeyRequestBuilder<Messages> {
    return new GetByKeyRequestBuilder(Messages, { Code: code });
  }

  /**
   * Returns a request builder for querying all `Messages` entities.
   * @returns A request builder for creating requests to retrieve all `Messages` entities.
   */
  getAll(): GetAllRequestBuilder<Messages> {
    return new GetAllRequestBuilder(Messages);
  }

  /**
   * Returns a request builder for creating a `Messages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Messages`.
   */
  create(entity: Messages): CreateRequestBuilder<Messages> {
    return new CreateRequestBuilder(Messages, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Messages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Messages`.
   */
  update(entity: Messages): UpdateRequestBuilder<Messages> {
    return new UpdateRequestBuilder(Messages, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Messages`.
   * @param code Key property. See [[Messages.code]].
   * @returns A request builder for creating requests that delete an entity of type `Messages`.
   */
  delete(code: number): DeleteRequestBuilder<Messages>;
  /**
   * Returns a request builder for deleting an entity of type `Messages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Messages` by taking the entity as a parameter.
   */
  delete(entity: Messages): DeleteRequestBuilder<Messages>;
  delete(codeOrEntity: any): DeleteRequestBuilder<Messages> {
    return new DeleteRequestBuilder(Messages, codeOrEntity instanceof Messages ? codeOrEntity : { Code: codeOrEntity! });
  }
}
