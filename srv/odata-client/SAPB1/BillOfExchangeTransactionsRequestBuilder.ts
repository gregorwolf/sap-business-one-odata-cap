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
import { BillOfExchangeTransactions } from './BillOfExchangeTransactions';

/**
 * Request builder class for operations supported on the {@link BillOfExchangeTransactions} entity.
 */
export class BillOfExchangeTransactionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BillOfExchangeTransactions<T>, T> {
  /**
   * Returns a request builder for retrieving one `BillOfExchangeTransactions` entity based on its keys.
   * @param boeTransactionkey Key property. See {@link BillOfExchangeTransactions.boeTransactionkey}.
   * @returns A request builder for creating requests to retrieve one `BillOfExchangeTransactions` entity based on its keys.
   */
  getByKey(
    boeTransactionkey: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BillOfExchangeTransactions<T>, T> {
    return new GetByKeyRequestBuilder<BillOfExchangeTransactions<T>, T>(
      this.entityApi,
      { BOETransactionkey: boeTransactionkey }
    );
  }

  /**
   * Returns a request builder for querying all `BillOfExchangeTransactions` entities.
   * @returns A request builder for creating requests to retrieve all `BillOfExchangeTransactions` entities.
   */
  getAll(): GetAllRequestBuilder<BillOfExchangeTransactions<T>, T> {
    return new GetAllRequestBuilder<BillOfExchangeTransactions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BillOfExchangeTransactions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BillOfExchangeTransactions`.
   */
  create(
    entity: BillOfExchangeTransactions<T>
  ): CreateRequestBuilder<BillOfExchangeTransactions<T>, T> {
    return new CreateRequestBuilder<BillOfExchangeTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BillOfExchangeTransactions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BillOfExchangeTransactions`.
   */
  update(
    entity: BillOfExchangeTransactions<T>
  ): UpdateRequestBuilder<BillOfExchangeTransactions<T>, T> {
    return new UpdateRequestBuilder<BillOfExchangeTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BillOfExchangeTransactions`.
   * @param boeTransactionkey Key property. See {@link BillOfExchangeTransactions.boeTransactionkey}.
   * @returns A request builder for creating requests that delete an entity of type `BillOfExchangeTransactions`.
   */
  delete(
    boeTransactionkey: number
  ): DeleteRequestBuilder<BillOfExchangeTransactions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BillOfExchangeTransactions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BillOfExchangeTransactions` by taking the entity as a parameter.
   */
  delete(
    entity: BillOfExchangeTransactions<T>
  ): DeleteRequestBuilder<BillOfExchangeTransactions<T>, T>;
  delete(
    boeTransactionkeyOrEntity: any
  ): DeleteRequestBuilder<BillOfExchangeTransactions<T>, T> {
    return new DeleteRequestBuilder<BillOfExchangeTransactions<T>, T>(
      this.entityApi,
      boeTransactionkeyOrEntity instanceof BillOfExchangeTransactions
        ? boeTransactionkeyOrEntity
        : { BOETransactionkey: boeTransactionkeyOrEntity! }
    );
  }
}
