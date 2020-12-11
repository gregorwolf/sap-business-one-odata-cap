/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { CashDiscounts } from './CashDiscounts';

/**
 * Request builder class for operations supported on the [[CashDiscounts]] entity.
 */
export class CashDiscountsRequestBuilder extends RequestBuilder<CashDiscounts> {
  /**
   * Returns a request builder for retrieving one `CashDiscounts` entity based on its keys.
   * @param code Key property. See [[CashDiscounts.code]].
   * @returns A request builder for creating requests to retrieve one `CashDiscounts` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilderV4<CashDiscounts> {
    return new GetByKeyRequestBuilderV4(CashDiscounts, { Code: code });
  }

  /**
   * Returns a request builder for querying all `CashDiscounts` entities.
   * @returns A request builder for creating requests to retrieve all `CashDiscounts` entities.
   */
  getAll(): GetAllRequestBuilderV4<CashDiscounts> {
    return new GetAllRequestBuilderV4(CashDiscounts);
  }

  /**
   * Returns a request builder for creating a `CashDiscounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CashDiscounts`.
   */
  create(entity: CashDiscounts): CreateRequestBuilderV4<CashDiscounts> {
    return new CreateRequestBuilderV4(CashDiscounts, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CashDiscounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CashDiscounts`.
   */
  update(entity: CashDiscounts): UpdateRequestBuilderV4<CashDiscounts> {
    return new UpdateRequestBuilderV4(CashDiscounts, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CashDiscounts`.
   * @param code Key property. See [[CashDiscounts.code]].
   * @returns A request builder for creating requests that delete an entity of type `CashDiscounts`.
   */
  delete(code: string): DeleteRequestBuilderV4<CashDiscounts>;
  /**
   * Returns a request builder for deleting an entity of type `CashDiscounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CashDiscounts` by taking the entity as a parameter.
   */
  delete(entity: CashDiscounts): DeleteRequestBuilderV4<CashDiscounts>;
  delete(codeOrEntity: any): DeleteRequestBuilderV4<CashDiscounts> {
    return new DeleteRequestBuilderV4(CashDiscounts, codeOrEntity instanceof CashDiscounts ? codeOrEntity : { Code: codeOrEntity! });
  }
}
