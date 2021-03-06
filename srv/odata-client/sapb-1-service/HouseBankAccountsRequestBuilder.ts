/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { HouseBankAccounts } from './HouseBankAccounts';

/**
 * Request builder class for operations supported on the [[HouseBankAccounts]] entity.
 */
export class HouseBankAccountsRequestBuilder extends RequestBuilder<HouseBankAccounts> {
  /**
   * Returns a request builder for retrieving one `HouseBankAccounts` entity based on its keys.
   * @param absoluteEntry Key property. See [[HouseBankAccounts.absoluteEntry]].
   * @returns A request builder for creating requests to retrieve one `HouseBankAccounts` entity based on its keys.
   */
  getByKey(absoluteEntry: number): GetByKeyRequestBuilderV4<HouseBankAccounts> {
    return new GetByKeyRequestBuilderV4(HouseBankAccounts, { AbsoluteEntry: absoluteEntry });
  }

  /**
   * Returns a request builder for querying all `HouseBankAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `HouseBankAccounts` entities.
   */
  getAll(): GetAllRequestBuilderV4<HouseBankAccounts> {
    return new GetAllRequestBuilderV4(HouseBankAccounts);
  }

  /**
   * Returns a request builder for creating a `HouseBankAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HouseBankAccounts`.
   */
  create(entity: HouseBankAccounts): CreateRequestBuilderV4<HouseBankAccounts> {
    return new CreateRequestBuilderV4(HouseBankAccounts, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `HouseBankAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HouseBankAccounts`.
   */
  update(entity: HouseBankAccounts): UpdateRequestBuilderV4<HouseBankAccounts> {
    return new UpdateRequestBuilderV4(HouseBankAccounts, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `HouseBankAccounts`.
   * @param absoluteEntry Key property. See [[HouseBankAccounts.absoluteEntry]].
   * @returns A request builder for creating requests that delete an entity of type `HouseBankAccounts`.
   */
  delete(absoluteEntry: number): DeleteRequestBuilderV4<HouseBankAccounts>;
  /**
   * Returns a request builder for deleting an entity of type `HouseBankAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HouseBankAccounts` by taking the entity as a parameter.
   */
  delete(entity: HouseBankAccounts): DeleteRequestBuilderV4<HouseBankAccounts>;
  delete(absoluteEntryOrEntity: any): DeleteRequestBuilderV4<HouseBankAccounts> {
    return new DeleteRequestBuilderV4(HouseBankAccounts, absoluteEntryOrEntity instanceof HouseBankAccounts ? absoluteEntryOrEntity : { AbsoluteEntry: absoluteEntryOrEntity! });
  }
}
