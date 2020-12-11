/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(code: number): GetByKeyRequestBuilderV4<Messages> {
    return new GetByKeyRequestBuilderV4(Messages, { Code: code });
  }

  /**
   * Returns a request builder for querying all `Messages` entities.
   * @returns A request builder for creating requests to retrieve all `Messages` entities.
   */
  getAll(): GetAllRequestBuilderV4<Messages> {
    return new GetAllRequestBuilderV4(Messages);
  }

  /**
   * Returns a request builder for creating a `Messages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Messages`.
   */
  create(entity: Messages): CreateRequestBuilderV4<Messages> {
    return new CreateRequestBuilderV4(Messages, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Messages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Messages`.
   */
  update(entity: Messages): UpdateRequestBuilderV4<Messages> {
    return new UpdateRequestBuilderV4(Messages, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Messages`.
   * @param code Key property. See [[Messages.code]].
   * @returns A request builder for creating requests that delete an entity of type `Messages`.
   */
  delete(code: number): DeleteRequestBuilderV4<Messages>;
  /**
   * Returns a request builder for deleting an entity of type `Messages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Messages` by taking the entity as a parameter.
   */
  delete(entity: Messages): DeleteRequestBuilderV4<Messages>;
  delete(codeOrEntity: any): DeleteRequestBuilderV4<Messages> {
    return new DeleteRequestBuilderV4(Messages, codeOrEntity instanceof Messages ? codeOrEntity : { Code: codeOrEntity! });
  }
}
