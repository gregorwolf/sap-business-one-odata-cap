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
import { SalesTaxAuthoritiesTypes } from './SalesTaxAuthoritiesTypes';

/**
 * Request builder class for operations supported on the {@link SalesTaxAuthoritiesTypes} entity.
 */
export class SalesTaxAuthoritiesTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesTaxAuthoritiesTypes<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesTaxAuthoritiesTypes` entity based on its keys.
   * @param numerator Key property. See {@link SalesTaxAuthoritiesTypes.numerator}.
   * @returns A request builder for creating requests to retrieve one `SalesTaxAuthoritiesTypes` entity based on its keys.
   */
  getByKey(
    numerator: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<SalesTaxAuthoritiesTypes<T>, T> {
    return new GetByKeyRequestBuilder<SalesTaxAuthoritiesTypes<T>, T>(
      this.entityApi,
      { Numerator: numerator }
    );
  }

  /**
   * Returns a request builder for querying all `SalesTaxAuthoritiesTypes` entities.
   * @returns A request builder for creating requests to retrieve all `SalesTaxAuthoritiesTypes` entities.
   */
  getAll(): GetAllRequestBuilder<SalesTaxAuthoritiesTypes<T>, T> {
    return new GetAllRequestBuilder<SalesTaxAuthoritiesTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesTaxAuthoritiesTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesTaxAuthoritiesTypes`.
   */
  create(
    entity: SalesTaxAuthoritiesTypes<T>
  ): CreateRequestBuilder<SalesTaxAuthoritiesTypes<T>, T> {
    return new CreateRequestBuilder<SalesTaxAuthoritiesTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesTaxAuthoritiesTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesTaxAuthoritiesTypes`.
   */
  update(
    entity: SalesTaxAuthoritiesTypes<T>
  ): UpdateRequestBuilder<SalesTaxAuthoritiesTypes<T>, T> {
    return new UpdateRequestBuilder<SalesTaxAuthoritiesTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesTaxAuthoritiesTypes`.
   * @param numerator Key property. See {@link SalesTaxAuthoritiesTypes.numerator}.
   * @returns A request builder for creating requests that delete an entity of type `SalesTaxAuthoritiesTypes`.
   */
  delete(
    numerator: number
  ): DeleteRequestBuilder<SalesTaxAuthoritiesTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesTaxAuthoritiesTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesTaxAuthoritiesTypes` by taking the entity as a parameter.
   */
  delete(
    entity: SalesTaxAuthoritiesTypes<T>
  ): DeleteRequestBuilder<SalesTaxAuthoritiesTypes<T>, T>;
  delete(
    numeratorOrEntity: any
  ): DeleteRequestBuilder<SalesTaxAuthoritiesTypes<T>, T> {
    return new DeleteRequestBuilder<SalesTaxAuthoritiesTypes<T>, T>(
      this.entityApi,
      numeratorOrEntity instanceof SalesTaxAuthoritiesTypes
        ? numeratorOrEntity
        : { Numerator: numeratorOrEntity! }
    );
  }
}
