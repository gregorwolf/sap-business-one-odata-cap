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
import { BpFiscalRegistryId } from './BpFiscalRegistryId';

/**
 * Request builder class for operations supported on the {@link BpFiscalRegistryId} entity.
 */
export class BpFiscalRegistryIdRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BpFiscalRegistryId<T>, T> {
  /**
   * Returns a request builder for retrieving one `BpFiscalRegistryId` entity based on its keys.
   * @param numerator Key property. See {@link BpFiscalRegistryId.numerator}.
   * @returns A request builder for creating requests to retrieve one `BpFiscalRegistryId` entity based on its keys.
   */
  getByKey(
    numerator: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BpFiscalRegistryId<T>, T> {
    return new GetByKeyRequestBuilder<BpFiscalRegistryId<T>, T>(
      this.entityApi,
      { Numerator: numerator }
    );
  }

  /**
   * Returns a request builder for querying all `BpFiscalRegistryId` entities.
   * @returns A request builder for creating requests to retrieve all `BpFiscalRegistryId` entities.
   */
  getAll(): GetAllRequestBuilder<BpFiscalRegistryId<T>, T> {
    return new GetAllRequestBuilder<BpFiscalRegistryId<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BpFiscalRegistryId` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BpFiscalRegistryId`.
   */
  create(
    entity: BpFiscalRegistryId<T>
  ): CreateRequestBuilder<BpFiscalRegistryId<T>, T> {
    return new CreateRequestBuilder<BpFiscalRegistryId<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BpFiscalRegistryId`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BpFiscalRegistryId`.
   */
  update(
    entity: BpFiscalRegistryId<T>
  ): UpdateRequestBuilder<BpFiscalRegistryId<T>, T> {
    return new UpdateRequestBuilder<BpFiscalRegistryId<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BpFiscalRegistryId`.
   * @param numerator Key property. See {@link BpFiscalRegistryId.numerator}.
   * @returns A request builder for creating requests that delete an entity of type `BpFiscalRegistryId`.
   */
  delete(numerator: number): DeleteRequestBuilder<BpFiscalRegistryId<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BpFiscalRegistryId`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BpFiscalRegistryId` by taking the entity as a parameter.
   */
  delete(
    entity: BpFiscalRegistryId<T>
  ): DeleteRequestBuilder<BpFiscalRegistryId<T>, T>;
  delete(
    numeratorOrEntity: any
  ): DeleteRequestBuilder<BpFiscalRegistryId<T>, T> {
    return new DeleteRequestBuilder<BpFiscalRegistryId<T>, T>(
      this.entityApi,
      numeratorOrEntity instanceof BpFiscalRegistryId
        ? numeratorOrEntity
        : { Numerator: numeratorOrEntity! }
    );
  }
}
