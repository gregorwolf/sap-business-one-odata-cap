/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { CashFlowLineItems } from './CashFlowLineItems';

/**
 * Request builder class for operations supported on the [[CashFlowLineItems]] entity.
 */
export class CashFlowLineItemsRequestBuilder extends RequestBuilder<CashFlowLineItems> {
  /**
   * Returns a request builder for retrieving one `CashFlowLineItems` entity based on its keys.
   * @param lineItemId Key property. See [[CashFlowLineItems.lineItemId]].
   * @returns A request builder for creating requests to retrieve one `CashFlowLineItems` entity based on its keys.
   */
  getByKey(lineItemId: number): GetByKeyRequestBuilder<CashFlowLineItems> {
    return new GetByKeyRequestBuilder(CashFlowLineItems, { LineItemID: lineItemId });
  }

  /**
   * Returns a request builder for querying all `CashFlowLineItems` entities.
   * @returns A request builder for creating requests to retrieve all `CashFlowLineItems` entities.
   */
  getAll(): GetAllRequestBuilder<CashFlowLineItems> {
    return new GetAllRequestBuilder(CashFlowLineItems);
  }

  /**
   * Returns a request builder for creating a `CashFlowLineItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CashFlowLineItems`.
   */
  create(entity: CashFlowLineItems): CreateRequestBuilder<CashFlowLineItems> {
    return new CreateRequestBuilder(CashFlowLineItems, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CashFlowLineItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CashFlowLineItems`.
   */
  update(entity: CashFlowLineItems): UpdateRequestBuilder<CashFlowLineItems> {
    return new UpdateRequestBuilder(CashFlowLineItems, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CashFlowLineItems`.
   * @param lineItemId Key property. See [[CashFlowLineItems.lineItemId]].
   * @returns A request builder for creating requests that delete an entity of type `CashFlowLineItems`.
   */
  delete(lineItemId: number): DeleteRequestBuilder<CashFlowLineItems>;
  /**
   * Returns a request builder for deleting an entity of type `CashFlowLineItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CashFlowLineItems` by taking the entity as a parameter.
   */
  delete(entity: CashFlowLineItems): DeleteRequestBuilder<CashFlowLineItems>;
  delete(lineItemIdOrEntity: any): DeleteRequestBuilder<CashFlowLineItems> {
    return new DeleteRequestBuilder(CashFlowLineItems, lineItemIdOrEntity instanceof CashFlowLineItems ? lineItemIdOrEntity : { LineItemID: lineItemIdOrEntity! });
  }
}
