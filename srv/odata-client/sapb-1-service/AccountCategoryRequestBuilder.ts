/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { AccountCategory } from './AccountCategory';

/**
 * Request builder class for operations supported on the [[AccountCategory]] entity.
 */
export class AccountCategoryRequestBuilder extends RequestBuilder<AccountCategory> {
  /**
   * Returns a request builder for retrieving one `AccountCategory` entity based on its keys.
   * @param categoryCode Key property. See [[AccountCategory.categoryCode]].
   * @returns A request builder for creating requests to retrieve one `AccountCategory` entity based on its keys.
   */
  getByKey(categoryCode: number): GetByKeyRequestBuilderV4<AccountCategory> {
    return new GetByKeyRequestBuilderV4(AccountCategory, { CategoryCode: categoryCode });
  }

  /**
   * Returns a request builder for querying all `AccountCategory` entities.
   * @returns A request builder for creating requests to retrieve all `AccountCategory` entities.
   */
  getAll(): GetAllRequestBuilderV4<AccountCategory> {
    return new GetAllRequestBuilderV4(AccountCategory);
  }

  /**
   * Returns a request builder for creating a `AccountCategory` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccountCategory`.
   */
  create(entity: AccountCategory): CreateRequestBuilderV4<AccountCategory> {
    return new CreateRequestBuilderV4(AccountCategory, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AccountCategory`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccountCategory`.
   */
  update(entity: AccountCategory): UpdateRequestBuilderV4<AccountCategory> {
    return new UpdateRequestBuilderV4(AccountCategory, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AccountCategory`.
   * @param categoryCode Key property. See [[AccountCategory.categoryCode]].
   * @returns A request builder for creating requests that delete an entity of type `AccountCategory`.
   */
  delete(categoryCode: number): DeleteRequestBuilderV4<AccountCategory>;
  /**
   * Returns a request builder for deleting an entity of type `AccountCategory`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccountCategory` by taking the entity as a parameter.
   */
  delete(entity: AccountCategory): DeleteRequestBuilderV4<AccountCategory>;
  delete(categoryCodeOrEntity: any): DeleteRequestBuilderV4<AccountCategory> {
    return new DeleteRequestBuilderV4(AccountCategory, categoryCodeOrEntity instanceof AccountCategory ? categoryCodeOrEntity : { CategoryCode: categoryCodeOrEntity! });
  }
}
