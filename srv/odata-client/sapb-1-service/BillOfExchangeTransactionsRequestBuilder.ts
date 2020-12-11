/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { BillOfExchangeTransactions } from './BillOfExchangeTransactions';

/**
 * Request builder class for operations supported on the [[BillOfExchangeTransactions]] entity.
 */
export class BillOfExchangeTransactionsRequestBuilder extends RequestBuilder<BillOfExchangeTransactions> {
  /**
   * Returns a request builder for retrieving one `BillOfExchangeTransactions` entity based on its keys.
   * @param boeTransactionkey Key property. See [[BillOfExchangeTransactions.boeTransactionkey]].
   * @returns A request builder for creating requests to retrieve one `BillOfExchangeTransactions` entity based on its keys.
   */
  getByKey(boeTransactionkey: number): GetByKeyRequestBuilderV4<BillOfExchangeTransactions> {
    return new GetByKeyRequestBuilderV4(BillOfExchangeTransactions, { BOETransactionkey: boeTransactionkey });
  }

  /**
   * Returns a request builder for querying all `BillOfExchangeTransactions` entities.
   * @returns A request builder for creating requests to retrieve all `BillOfExchangeTransactions` entities.
   */
  getAll(): GetAllRequestBuilderV4<BillOfExchangeTransactions> {
    return new GetAllRequestBuilderV4(BillOfExchangeTransactions);
  }

  /**
   * Returns a request builder for creating a `BillOfExchangeTransactions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BillOfExchangeTransactions`.
   */
  create(entity: BillOfExchangeTransactions): CreateRequestBuilderV4<BillOfExchangeTransactions> {
    return new CreateRequestBuilderV4(BillOfExchangeTransactions, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BillOfExchangeTransactions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BillOfExchangeTransactions`.
   */
  update(entity: BillOfExchangeTransactions): UpdateRequestBuilderV4<BillOfExchangeTransactions> {
    return new UpdateRequestBuilderV4(BillOfExchangeTransactions, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BillOfExchangeTransactions`.
   * @param boeTransactionkey Key property. See [[BillOfExchangeTransactions.boeTransactionkey]].
   * @returns A request builder for creating requests that delete an entity of type `BillOfExchangeTransactions`.
   */
  delete(boeTransactionkey: number): DeleteRequestBuilderV4<BillOfExchangeTransactions>;
  /**
   * Returns a request builder for deleting an entity of type `BillOfExchangeTransactions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BillOfExchangeTransactions` by taking the entity as a parameter.
   */
  delete(entity: BillOfExchangeTransactions): DeleteRequestBuilderV4<BillOfExchangeTransactions>;
  delete(boeTransactionkeyOrEntity: any): DeleteRequestBuilderV4<BillOfExchangeTransactions> {
    return new DeleteRequestBuilderV4(BillOfExchangeTransactions, boeTransactionkeyOrEntity instanceof BillOfExchangeTransactions ? boeTransactionkeyOrEntity : { BOETransactionkey: boeTransactionkeyOrEntity! });
  }
}
