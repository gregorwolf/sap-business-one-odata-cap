/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { EmployeeTransfers } from './EmployeeTransfers';

/**
 * Request builder class for operations supported on the [[EmployeeTransfers]] entity.
 */
export class EmployeeTransfersRequestBuilder extends RequestBuilder<EmployeeTransfers> {
  /**
   * Returns a request builder for retrieving one `EmployeeTransfers` entity based on its keys.
   * @param transferId Key property. See [[EmployeeTransfers.transferId]].
   * @returns A request builder for creating requests to retrieve one `EmployeeTransfers` entity based on its keys.
   */
  getByKey(transferId: number): GetByKeyRequestBuilder<EmployeeTransfers> {
    return new GetByKeyRequestBuilder(EmployeeTransfers, { TransferID: transferId });
  }

  /**
   * Returns a request builder for querying all `EmployeeTransfers` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTransfers` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTransfers> {
    return new GetAllRequestBuilder(EmployeeTransfers);
  }

  /**
   * Returns a request builder for creating a `EmployeeTransfers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeeTransfers`.
   */
  create(entity: EmployeeTransfers): CreateRequestBuilder<EmployeeTransfers> {
    return new CreateRequestBuilder(EmployeeTransfers, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeeTransfers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeeTransfers`.
   */
  update(entity: EmployeeTransfers): UpdateRequestBuilder<EmployeeTransfers> {
    return new UpdateRequestBuilder(EmployeeTransfers, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeeTransfers`.
   * @param transferId Key property. See [[EmployeeTransfers.transferId]].
   * @returns A request builder for creating requests that delete an entity of type `EmployeeTransfers`.
   */
  delete(transferId: number): DeleteRequestBuilder<EmployeeTransfers>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeeTransfers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeTransfers` by taking the entity as a parameter.
   */
  delete(entity: EmployeeTransfers): DeleteRequestBuilder<EmployeeTransfers>;
  delete(transferIdOrEntity: any): DeleteRequestBuilder<EmployeeTransfers> {
    return new DeleteRequestBuilder(EmployeeTransfers, transferIdOrEntity instanceof EmployeeTransfers ? transferIdOrEntity : { TransferID: transferIdOrEntity! });
  }
}
