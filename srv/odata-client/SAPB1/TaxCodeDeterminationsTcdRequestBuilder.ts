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
import { TaxCodeDeterminationsTcd } from './TaxCodeDeterminationsTcd';

/**
 * Request builder class for operations supported on the {@link TaxCodeDeterminationsTcd} entity.
 */
export class TaxCodeDeterminationsTcdRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxCodeDeterminationsTcd<T>, T> {
  /**
   * Returns a request builder for retrieving one `TaxCodeDeterminationsTcd` entity based on its keys.
   * @param absId Key property. See {@link TaxCodeDeterminationsTcd.absId}.
   * @returns A request builder for creating requests to retrieve one `TaxCodeDeterminationsTcd` entity based on its keys.
   */
  getByKey(
    absId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<TaxCodeDeterminationsTcd<T>, T> {
    return new GetByKeyRequestBuilder<TaxCodeDeterminationsTcd<T>, T>(
      this.entityApi,
      { AbsId: absId }
    );
  }

  /**
   * Returns a request builder for querying all `TaxCodeDeterminationsTcd` entities.
   * @returns A request builder for creating requests to retrieve all `TaxCodeDeterminationsTcd` entities.
   */
  getAll(): GetAllRequestBuilder<TaxCodeDeterminationsTcd<T>, T> {
    return new GetAllRequestBuilder<TaxCodeDeterminationsTcd<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TaxCodeDeterminationsTcd` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxCodeDeterminationsTcd`.
   */
  create(
    entity: TaxCodeDeterminationsTcd<T>
  ): CreateRequestBuilder<TaxCodeDeterminationsTcd<T>, T> {
    return new CreateRequestBuilder<TaxCodeDeterminationsTcd<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxCodeDeterminationsTcd`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxCodeDeterminationsTcd`.
   */
  update(
    entity: TaxCodeDeterminationsTcd<T>
  ): UpdateRequestBuilder<TaxCodeDeterminationsTcd<T>, T> {
    return new UpdateRequestBuilder<TaxCodeDeterminationsTcd<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxCodeDeterminationsTcd`.
   * @param absId Key property. See {@link TaxCodeDeterminationsTcd.absId}.
   * @returns A request builder for creating requests that delete an entity of type `TaxCodeDeterminationsTcd`.
   */
  delete(absId: number): DeleteRequestBuilder<TaxCodeDeterminationsTcd<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxCodeDeterminationsTcd`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxCodeDeterminationsTcd` by taking the entity as a parameter.
   */
  delete(
    entity: TaxCodeDeterminationsTcd<T>
  ): DeleteRequestBuilder<TaxCodeDeterminationsTcd<T>, T>;
  delete(
    absIdOrEntity: any
  ): DeleteRequestBuilder<TaxCodeDeterminationsTcd<T>, T> {
    return new DeleteRequestBuilder<TaxCodeDeterminationsTcd<T>, T>(
      this.entityApi,
      absIdOrEntity instanceof TaxCodeDeterminationsTcd
        ? absIdOrEntity
        : { AbsId: absIdOrEntity! }
    );
  }
}
