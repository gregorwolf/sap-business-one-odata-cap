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
import { ExceptionalEvents } from './ExceptionalEvents';

/**
 * Request builder class for operations supported on the {@link ExceptionalEvents} entity.
 */
export class ExceptionalEventsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExceptionalEvents<T>, T> {
  /**
   * Returns a request builder for retrieving one `ExceptionalEvents` entity based on its keys.
   * @param code Key property. See {@link ExceptionalEvents.code}.
   * @returns A request builder for creating requests to retrieve one `ExceptionalEvents` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExceptionalEvents<T>, T> {
    return new GetByKeyRequestBuilder<ExceptionalEvents<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `ExceptionalEvents` entities.
   * @returns A request builder for creating requests to retrieve all `ExceptionalEvents` entities.
   */
  getAll(): GetAllRequestBuilder<ExceptionalEvents<T>, T> {
    return new GetAllRequestBuilder<ExceptionalEvents<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExceptionalEvents` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExceptionalEvents`.
   */
  create(
    entity: ExceptionalEvents<T>
  ): CreateRequestBuilder<ExceptionalEvents<T>, T> {
    return new CreateRequestBuilder<ExceptionalEvents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExceptionalEvents`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExceptionalEvents`.
   */
  update(
    entity: ExceptionalEvents<T>
  ): UpdateRequestBuilder<ExceptionalEvents<T>, T> {
    return new UpdateRequestBuilder<ExceptionalEvents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExceptionalEvents`.
   * @param code Key property. See {@link ExceptionalEvents.code}.
   * @returns A request builder for creating requests that delete an entity of type `ExceptionalEvents`.
   */
  delete(code: string): DeleteRequestBuilder<ExceptionalEvents<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExceptionalEvents`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExceptionalEvents` by taking the entity as a parameter.
   */
  delete(
    entity: ExceptionalEvents<T>
  ): DeleteRequestBuilder<ExceptionalEvents<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<ExceptionalEvents<T>, T> {
    return new DeleteRequestBuilder<ExceptionalEvents<T>, T>(
      this.entityApi,
      codeOrEntity instanceof ExceptionalEvents
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
