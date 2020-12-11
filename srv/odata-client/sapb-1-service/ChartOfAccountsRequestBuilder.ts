/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(code: string): GetByKeyRequestBuilderV4<ChartOfAccounts> {
    return new GetByKeyRequestBuilderV4(ChartOfAccounts, { Code: code });
  }

  /**
   * Returns a request builder for querying all `ChartOfAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `ChartOfAccounts` entities.
   */
  getAll(): GetAllRequestBuilderV4<ChartOfAccounts> {
    return new GetAllRequestBuilderV4(ChartOfAccounts);
  }

  /**
   * Returns a request builder for creating a `ChartOfAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ChartOfAccounts`.
   */
  create(entity: ChartOfAccounts): CreateRequestBuilderV4<ChartOfAccounts> {
    return new CreateRequestBuilderV4(ChartOfAccounts, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ChartOfAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ChartOfAccounts`.
   */
  update(entity: ChartOfAccounts): UpdateRequestBuilderV4<ChartOfAccounts> {
    return new UpdateRequestBuilderV4(ChartOfAccounts, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ChartOfAccounts`.
   * @param code Key property. See [[ChartOfAccounts.code]].
   * @returns A request builder for creating requests that delete an entity of type `ChartOfAccounts`.
   */
  delete(code: string): DeleteRequestBuilderV4<ChartOfAccounts>;
  /**
   * Returns a request builder for deleting an entity of type `ChartOfAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ChartOfAccounts` by taking the entity as a parameter.
   */
  delete(entity: ChartOfAccounts): DeleteRequestBuilderV4<ChartOfAccounts>;
  delete(codeOrEntity: any): DeleteRequestBuilderV4<ChartOfAccounts> {
    return new DeleteRequestBuilderV4(ChartOfAccounts, codeOrEntity instanceof ChartOfAccounts ? codeOrEntity : { Code: codeOrEntity! });
  }
}
