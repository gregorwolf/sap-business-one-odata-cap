/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
  getByKey(docEntry: number): GetByKeyRequestBuilder<PurchaseQuotations> {
    return new GetByKeyRequestBuilder(PurchaseQuotations, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `PurchaseQuotations` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseQuotations` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseQuotations> {
    return new GetAllRequestBuilder(PurchaseQuotations);
  }

  /**
   * Returns a request builder for creating a `PurchaseQuotations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseQuotations`.
   */
  create(entity: PurchaseQuotations): CreateRequestBuilder<PurchaseQuotations> {
    return new CreateRequestBuilder(PurchaseQuotations, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseQuotations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseQuotations`.
   */
  update(entity: PurchaseQuotations): UpdateRequestBuilder<PurchaseQuotations> {
    return new UpdateRequestBuilder(PurchaseQuotations, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseQuotations`.
   * @param docEntry Key property. See [[PurchaseQuotations.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `PurchaseQuotations`.
   */
  delete(docEntry: number): DeleteRequestBuilder<PurchaseQuotations>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseQuotations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseQuotations` by taking the entity as a parameter.
   */
  delete(entity: PurchaseQuotations): DeleteRequestBuilder<PurchaseQuotations>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<PurchaseQuotations> {
    return new DeleteRequestBuilder(PurchaseQuotations, docEntryOrEntity instanceof PurchaseQuotations ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
