/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { BankPages } from './BankPages';

/**
 * Request builder class for operations supported on the [[BankPages]] entity.
 */
export class BankPagesRequestBuilder extends RequestBuilder<BankPages> {
  /**
   * Returns a request builder for retrieving one `BankPages` entity based on its keys.
   * @param accountCode Key property. See [[BankPages.accountCode]].
   * @param sequence Key property. See [[BankPages.sequence]].
   * @returns A request builder for creating requests to retrieve one `BankPages` entity based on its keys.
   */
  getByKey(accountCode: string, sequence: number): GetByKeyRequestBuilder<BankPages> {
    return new GetByKeyRequestBuilder(BankPages, {
      AccountCode: accountCode,
      Sequence: sequence
    });
  }

  /**
   * Returns a request builder for querying all `BankPages` entities.
   * @returns A request builder for creating requests to retrieve all `BankPages` entities.
   */
  getAll(): GetAllRequestBuilder<BankPages> {
    return new GetAllRequestBuilder(BankPages);
  }

  /**
   * Returns a request builder for creating a `BankPages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankPages`.
   */
  create(entity: BankPages): CreateRequestBuilder<BankPages> {
    return new CreateRequestBuilder(BankPages, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BankPages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankPages`.
   */
  update(entity: BankPages): UpdateRequestBuilder<BankPages> {
    return new UpdateRequestBuilder(BankPages, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BankPages`.
   * @param accountCode Key property. See [[BankPages.accountCode]].
   * @param sequence Key property. See [[BankPages.sequence]].
   * @returns A request builder for creating requests that delete an entity of type `BankPages`.
   */
  delete(accountCode: string, sequence: number): DeleteRequestBuilder<BankPages>;
  /**
   * Returns a request builder for deleting an entity of type `BankPages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankPages` by taking the entity as a parameter.
   */
  delete(entity: BankPages): DeleteRequestBuilder<BankPages>;
  delete(accountCodeOrEntity: any, sequence?: number): DeleteRequestBuilder<BankPages> {
    return new DeleteRequestBuilder(BankPages, accountCodeOrEntity instanceof BankPages ? accountCodeOrEntity : {
      AccountCode: accountCodeOrEntity!,
      Sequence: sequence!
    });
  }
}
