/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  CreateRequestBuilder,
  UpdateRequestBuilder,
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { Messages } from './Messages';

/**
 * Request builder class for operations supported on the {@link Messages} entity.
 */
export class MessagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Messages<T>, T> {
  /**
   * Returns a request builder for retrieving one `Messages` entity based on its keys.
   * @param code Key property. See {@link Messages.code}.
   * @returns A request builder for creating requests to retrieve one `Messages` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Messages<T>, T> {
    return new GetByKeyRequestBuilder<Messages<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `Messages` entities.
   * @returns A request builder for creating requests to retrieve all `Messages` entities.
   */
  getAll(): GetAllRequestBuilder<Messages<T>, T> {
    return new GetAllRequestBuilder<Messages<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Messages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Messages`.
   */
  create(entity: Messages<T>): CreateRequestBuilder<Messages<T>, T> {
    return new CreateRequestBuilder<Messages<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Messages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Messages`.
   */
  update(entity: Messages<T>): UpdateRequestBuilder<Messages<T>, T> {
    return new UpdateRequestBuilder<Messages<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Messages`.
   * @param code Key property. See {@link Messages.code}.
   * @returns A request builder for creating requests that delete an entity of type `Messages`.
   */
  delete(code: number): DeleteRequestBuilder<Messages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Messages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Messages` by taking the entity as a parameter.
   */
  delete(entity: Messages<T>): DeleteRequestBuilder<Messages<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<Messages<T>, T> {
    return new DeleteRequestBuilder<Messages<T>, T>(
      this.entityApi,
      codeOrEntity instanceof Messages ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
