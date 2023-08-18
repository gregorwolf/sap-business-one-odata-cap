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
import { InternalReconciliations } from './InternalReconciliations';

/**
 * Request builder class for operations supported on the {@link InternalReconciliations} entity.
 */
export class InternalReconciliationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InternalReconciliations<T>, T> {
  /**
   * Returns a request builder for retrieving one `InternalReconciliations` entity based on its keys.
   * @param reconNum Key property. See {@link InternalReconciliations.reconNum}.
   * @returns A request builder for creating requests to retrieve one `InternalReconciliations` entity based on its keys.
   */
  getByKey(
    reconNum: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<InternalReconciliations<T>, T> {
    return new GetByKeyRequestBuilder<InternalReconciliations<T>, T>(
      this.entityApi,
      { ReconNum: reconNum }
    );
  }

  /**
   * Returns a request builder for querying all `InternalReconciliations` entities.
   * @returns A request builder for creating requests to retrieve all `InternalReconciliations` entities.
   */
  getAll(): GetAllRequestBuilder<InternalReconciliations<T>, T> {
    return new GetAllRequestBuilder<InternalReconciliations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InternalReconciliations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InternalReconciliations`.
   */
  create(
    entity: InternalReconciliations<T>
  ): CreateRequestBuilder<InternalReconciliations<T>, T> {
    return new CreateRequestBuilder<InternalReconciliations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InternalReconciliations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InternalReconciliations`.
   */
  update(
    entity: InternalReconciliations<T>
  ): UpdateRequestBuilder<InternalReconciliations<T>, T> {
    return new UpdateRequestBuilder<InternalReconciliations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InternalReconciliations`.
   * @param reconNum Key property. See {@link InternalReconciliations.reconNum}.
   * @returns A request builder for creating requests that delete an entity of type `InternalReconciliations`.
   */
  delete(reconNum: number): DeleteRequestBuilder<InternalReconciliations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InternalReconciliations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InternalReconciliations` by taking the entity as a parameter.
   */
  delete(
    entity: InternalReconciliations<T>
  ): DeleteRequestBuilder<InternalReconciliations<T>, T>;
  delete(
    reconNumOrEntity: any
  ): DeleteRequestBuilder<InternalReconciliations<T>, T> {
    return new DeleteRequestBuilder<InternalReconciliations<T>, T>(
      this.entityApi,
      reconNumOrEntity instanceof InternalReconciliations
        ? reconNumOrEntity
        : { ReconNum: reconNumOrEntity! }
    );
  }
}
