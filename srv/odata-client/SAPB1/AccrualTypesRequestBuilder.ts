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
import { AccrualTypes } from './AccrualTypes';

/**
 * Request builder class for operations supported on the {@link AccrualTypes} entity.
 */
export class AccrualTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AccrualTypes<T>, T> {
  /**
   * Returns a request builder for retrieving one `AccrualTypes` entity based on its keys.
   * @param code Key property. See {@link AccrualTypes.code}.
   * @returns A request builder for creating requests to retrieve one `AccrualTypes` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AccrualTypes<T>, T> {
    return new GetByKeyRequestBuilder<AccrualTypes<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `AccrualTypes` entities.
   * @returns A request builder for creating requests to retrieve all `AccrualTypes` entities.
   */
  getAll(): GetAllRequestBuilder<AccrualTypes<T>, T> {
    return new GetAllRequestBuilder<AccrualTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AccrualTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccrualTypes`.
   */
  create(entity: AccrualTypes<T>): CreateRequestBuilder<AccrualTypes<T>, T> {
    return new CreateRequestBuilder<AccrualTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AccrualTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccrualTypes`.
   */
  update(entity: AccrualTypes<T>): UpdateRequestBuilder<AccrualTypes<T>, T> {
    return new UpdateRequestBuilder<AccrualTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AccrualTypes`.
   * @param code Key property. See {@link AccrualTypes.code}.
   * @returns A request builder for creating requests that delete an entity of type `AccrualTypes`.
   */
  delete(code: string): DeleteRequestBuilder<AccrualTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AccrualTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccrualTypes` by taking the entity as a parameter.
   */
  delete(entity: AccrualTypes<T>): DeleteRequestBuilder<AccrualTypes<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<AccrualTypes<T>, T> {
    return new DeleteRequestBuilder<AccrualTypes<T>, T>(
      this.entityApi,
      codeOrEntity instanceof AccrualTypes
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
