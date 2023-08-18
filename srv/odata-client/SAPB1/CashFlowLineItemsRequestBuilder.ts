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
import { CashFlowLineItems } from './CashFlowLineItems';

/**
 * Request builder class for operations supported on the {@link CashFlowLineItems} entity.
 */
export class CashFlowLineItemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CashFlowLineItems<T>, T> {
  /**
   * Returns a request builder for retrieving one `CashFlowLineItems` entity based on its keys.
   * @param lineItemId Key property. See {@link CashFlowLineItems.lineItemId}.
   * @returns A request builder for creating requests to retrieve one `CashFlowLineItems` entity based on its keys.
   */
  getByKey(
    lineItemId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<CashFlowLineItems<T>, T> {
    return new GetByKeyRequestBuilder<CashFlowLineItems<T>, T>(this.entityApi, {
      LineItemID: lineItemId
    });
  }

  /**
   * Returns a request builder for querying all `CashFlowLineItems` entities.
   * @returns A request builder for creating requests to retrieve all `CashFlowLineItems` entities.
   */
  getAll(): GetAllRequestBuilder<CashFlowLineItems<T>, T> {
    return new GetAllRequestBuilder<CashFlowLineItems<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CashFlowLineItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CashFlowLineItems`.
   */
  create(
    entity: CashFlowLineItems<T>
  ): CreateRequestBuilder<CashFlowLineItems<T>, T> {
    return new CreateRequestBuilder<CashFlowLineItems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CashFlowLineItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CashFlowLineItems`.
   */
  update(
    entity: CashFlowLineItems<T>
  ): UpdateRequestBuilder<CashFlowLineItems<T>, T> {
    return new UpdateRequestBuilder<CashFlowLineItems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CashFlowLineItems`.
   * @param lineItemId Key property. See {@link CashFlowLineItems.lineItemId}.
   * @returns A request builder for creating requests that delete an entity of type `CashFlowLineItems`.
   */
  delete(lineItemId: number): DeleteRequestBuilder<CashFlowLineItems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CashFlowLineItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CashFlowLineItems` by taking the entity as a parameter.
   */
  delete(
    entity: CashFlowLineItems<T>
  ): DeleteRequestBuilder<CashFlowLineItems<T>, T>;
  delete(
    lineItemIdOrEntity: any
  ): DeleteRequestBuilder<CashFlowLineItems<T>, T> {
    return new DeleteRequestBuilder<CashFlowLineItems<T>, T>(
      this.entityApi,
      lineItemIdOrEntity instanceof CashFlowLineItems
        ? lineItemIdOrEntity
        : { LineItemID: lineItemIdOrEntity! }
    );
  }
}
