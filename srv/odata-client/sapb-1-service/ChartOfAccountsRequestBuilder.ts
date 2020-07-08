/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ChartOfAccounts } from './ChartOfAccounts';

/**
 * Request builder class for operations supported on the [[ChartOfAccounts]] entity.
 */
export class ChartOfAccountsRequestBuilder extends RequestBuilder<ChartOfAccounts> {
  /**
   * Returns a request builder for retrieving one `ChartOfAccounts` entity based on its keys.
   * @param code Key property. See [[ChartOfAccounts.code]].
   * @returns A request builder for creating requests to retrieve one `ChartOfAccounts` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilder<ChartOfAccounts> {
    return new GetByKeyRequestBuilder(ChartOfAccounts, { Code: code });
  }

  /**
   * Returns a request builder for querying all `ChartOfAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `ChartOfAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<ChartOfAccounts> {
    return new GetAllRequestBuilder(ChartOfAccounts);
  }

  /**
   * Returns a request builder for creating a `ChartOfAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ChartOfAccounts`.
   */
  create(entity: ChartOfAccounts): CreateRequestBuilder<ChartOfAccounts> {
    return new CreateRequestBuilder(ChartOfAccounts, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ChartOfAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ChartOfAccounts`.
   */
  update(entity: ChartOfAccounts): UpdateRequestBuilder<ChartOfAccounts> {
    return new UpdateRequestBuilder(ChartOfAccounts, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ChartOfAccounts`.
   * @param code Key property. See [[ChartOfAccounts.code]].
   * @returns A request builder for creating requests that delete an entity of type `ChartOfAccounts`.
   */
  delete(code: string): DeleteRequestBuilder<ChartOfAccounts>;
  /**
   * Returns a request builder for deleting an entity of type `ChartOfAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ChartOfAccounts` by taking the entity as a parameter.
   */
  delete(entity: ChartOfAccounts): DeleteRequestBuilder<ChartOfAccounts>;
  delete(codeOrEntity: any): DeleteRequestBuilder<ChartOfAccounts> {
    return new DeleteRequestBuilder(ChartOfAccounts, codeOrEntity instanceof ChartOfAccounts ? codeOrEntity : { Code: codeOrEntity! });
  }
}
