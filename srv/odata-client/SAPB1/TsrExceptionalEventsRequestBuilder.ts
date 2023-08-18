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
import { TsrExceptionalEvents } from './TsrExceptionalEvents';

/**
 * Request builder class for operations supported on the {@link TsrExceptionalEvents} entity.
 */
export class TsrExceptionalEventsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TsrExceptionalEvents<T>, T> {
  /**
   * Returns a request builder for retrieving one `TsrExceptionalEvents` entity based on its keys.
   * @param code Key property. See {@link TsrExceptionalEvents.code}.
   * @returns A request builder for creating requests to retrieve one `TsrExceptionalEvents` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TsrExceptionalEvents<T>, T> {
    return new GetByKeyRequestBuilder<TsrExceptionalEvents<T>, T>(
      this.entityApi,
      { Code: code }
    );
  }

  /**
   * Returns a request builder for querying all `TsrExceptionalEvents` entities.
   * @returns A request builder for creating requests to retrieve all `TsrExceptionalEvents` entities.
   */
  getAll(): GetAllRequestBuilder<TsrExceptionalEvents<T>, T> {
    return new GetAllRequestBuilder<TsrExceptionalEvents<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TsrExceptionalEvents` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TsrExceptionalEvents`.
   */
  create(
    entity: TsrExceptionalEvents<T>
  ): CreateRequestBuilder<TsrExceptionalEvents<T>, T> {
    return new CreateRequestBuilder<TsrExceptionalEvents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TsrExceptionalEvents`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TsrExceptionalEvents`.
   */
  update(
    entity: TsrExceptionalEvents<T>
  ): UpdateRequestBuilder<TsrExceptionalEvents<T>, T> {
    return new UpdateRequestBuilder<TsrExceptionalEvents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TsrExceptionalEvents`.
   * @param code Key property. See {@link TsrExceptionalEvents.code}.
   * @returns A request builder for creating requests that delete an entity of type `TsrExceptionalEvents`.
   */
  delete(code: string): DeleteRequestBuilder<TsrExceptionalEvents<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TsrExceptionalEvents`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TsrExceptionalEvents` by taking the entity as a parameter.
   */
  delete(
    entity: TsrExceptionalEvents<T>
  ): DeleteRequestBuilder<TsrExceptionalEvents<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<TsrExceptionalEvents<T>, T> {
    return new DeleteRequestBuilder<TsrExceptionalEvents<T>, T>(
      this.entityApi,
      codeOrEntity instanceof TsrExceptionalEvents
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
