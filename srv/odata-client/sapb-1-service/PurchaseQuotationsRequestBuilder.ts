/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { PurchaseQuotations } from './PurchaseQuotations';

/**
 * Request builder class for operations supported on the [[PurchaseQuotations]] entity.
 */
export class PurchaseQuotationsRequestBuilder extends RequestBuilder<PurchaseQuotations> {
  /**
   * Returns a request builder for retrieving one `PurchaseQuotations` entity based on its keys.
   * @param docEntry Key property. See [[PurchaseQuotations.docEntry]].
   * @returns A request builder for creating requests to retrieve one `PurchaseQuotations` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilderV4<PurchaseQuotations> {
    return new GetByKeyRequestBuilderV4(PurchaseQuotations, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `PurchaseQuotations` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseQuotations` entities.
   */
  getAll(): GetAllRequestBuilderV4<PurchaseQuotations> {
    return new GetAllRequestBuilderV4(PurchaseQuotations);
  }

  /**
   * Returns a request builder for creating a `PurchaseQuotations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseQuotations`.
   */
  create(entity: PurchaseQuotations): CreateRequestBuilderV4<PurchaseQuotations> {
    return new CreateRequestBuilderV4(PurchaseQuotations, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseQuotations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseQuotations`.
   */
  update(entity: PurchaseQuotations): UpdateRequestBuilderV4<PurchaseQuotations> {
    return new UpdateRequestBuilderV4(PurchaseQuotations, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseQuotations`.
   * @param docEntry Key property. See [[PurchaseQuotations.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `PurchaseQuotations`.
   */
  delete(docEntry: number): DeleteRequestBuilderV4<PurchaseQuotations>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseQuotations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseQuotations` by taking the entity as a parameter.
   */
  delete(entity: PurchaseQuotations): DeleteRequestBuilderV4<PurchaseQuotations>;
  delete(docEntryOrEntity: any): DeleteRequestBuilderV4<PurchaseQuotations> {
    return new DeleteRequestBuilderV4(PurchaseQuotations, docEntryOrEntity instanceof PurchaseQuotations ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
