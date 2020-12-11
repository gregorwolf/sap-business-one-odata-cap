/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { AssetTransfer } from './AssetTransfer';

/**
 * Request builder class for operations supported on the [[AssetTransfer]] entity.
 */
export class AssetTransferRequestBuilder extends RequestBuilder<AssetTransfer> {
  /**
   * Returns a request builder for retrieving one `AssetTransfer` entity based on its keys.
   * @param docEntry Key property. See [[AssetTransfer.docEntry]].
   * @returns A request builder for creating requests to retrieve one `AssetTransfer` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilderV4<AssetTransfer> {
    return new GetByKeyRequestBuilderV4(AssetTransfer, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `AssetTransfer` entities.
   * @returns A request builder for creating requests to retrieve all `AssetTransfer` entities.
   */
  getAll(): GetAllRequestBuilderV4<AssetTransfer> {
    return new GetAllRequestBuilderV4(AssetTransfer);
  }

  /**
   * Returns a request builder for creating a `AssetTransfer` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetTransfer`.
   */
  create(entity: AssetTransfer): CreateRequestBuilderV4<AssetTransfer> {
    return new CreateRequestBuilderV4(AssetTransfer, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AssetTransfer`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetTransfer`.
   */
  update(entity: AssetTransfer): UpdateRequestBuilderV4<AssetTransfer> {
    return new UpdateRequestBuilderV4(AssetTransfer, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetTransfer`.
   * @param docEntry Key property. See [[AssetTransfer.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `AssetTransfer`.
   */
  delete(docEntry: number): DeleteRequestBuilderV4<AssetTransfer>;
  /**
   * Returns a request builder for deleting an entity of type `AssetTransfer`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetTransfer` by taking the entity as a parameter.
   */
  delete(entity: AssetTransfer): DeleteRequestBuilderV4<AssetTransfer>;
  delete(docEntryOrEntity: any): DeleteRequestBuilderV4<AssetTransfer> {
    return new DeleteRequestBuilderV4(AssetTransfer, docEntryOrEntity instanceof AssetTransfer ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
