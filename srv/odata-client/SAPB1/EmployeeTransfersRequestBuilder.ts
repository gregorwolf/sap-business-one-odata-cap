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
import { EmployeeTransfers } from './EmployeeTransfers';

/**
 * Request builder class for operations supported on the {@link EmployeeTransfers} entity.
 */
export class EmployeeTransfersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmployeeTransfers<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeTransfers` entity based on its keys.
   * @param transferId Key property. See {@link EmployeeTransfers.transferId}.
   * @returns A request builder for creating requests to retrieve one `EmployeeTransfers` entity based on its keys.
   */
  getByKey(
    transferId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<EmployeeTransfers<T>, T> {
    return new GetByKeyRequestBuilder<EmployeeTransfers<T>, T>(this.entityApi, {
      TransferID: transferId
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTransfers` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTransfers` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTransfers<T>, T> {
    return new GetAllRequestBuilder<EmployeeTransfers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmployeeTransfers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeeTransfers`.
   */
  create(
    entity: EmployeeTransfers<T>
  ): CreateRequestBuilder<EmployeeTransfers<T>, T> {
    return new CreateRequestBuilder<EmployeeTransfers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeeTransfers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeeTransfers`.
   */
  update(
    entity: EmployeeTransfers<T>
  ): UpdateRequestBuilder<EmployeeTransfers<T>, T> {
    return new UpdateRequestBuilder<EmployeeTransfers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeeTransfers`.
   * @param transferId Key property. See {@link EmployeeTransfers.transferId}.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeTransfers`.
   */
  delete(transferId: number): DeleteRequestBuilder<EmployeeTransfers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeeTransfers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeTransfers` by taking the entity as a parameter.
   */
  delete(
    entity: EmployeeTransfers<T>
  ): DeleteRequestBuilder<EmployeeTransfers<T>, T>;
  delete(
    transferIdOrEntity: any
  ): DeleteRequestBuilder<EmployeeTransfers<T>, T> {
    return new DeleteRequestBuilder<EmployeeTransfers<T>, T>(
      this.entityApi,
      transferIdOrEntity instanceof EmployeeTransfers
        ? transferIdOrEntity
        : { TransferID: transferIdOrEntity! }
    );
  }
}
