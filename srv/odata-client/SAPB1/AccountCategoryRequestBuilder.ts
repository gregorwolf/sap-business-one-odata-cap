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
import { AccountCategory } from './AccountCategory';

/**
 * Request builder class for operations supported on the {@link AccountCategory} entity.
 */
export class AccountCategoryRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AccountCategory<T>, T> {
  /**
   * Returns a request builder for retrieving one `AccountCategory` entity based on its keys.
   * @param categoryCode Key property. See {@link AccountCategory.categoryCode}.
   * @returns A request builder for creating requests to retrieve one `AccountCategory` entity based on its keys.
   */
  getByKey(
    categoryCode: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<AccountCategory<T>, T> {
    return new GetByKeyRequestBuilder<AccountCategory<T>, T>(this.entityApi, {
      CategoryCode: categoryCode
    });
  }

  /**
   * Returns a request builder for querying all `AccountCategory` entities.
   * @returns A request builder for creating requests to retrieve all `AccountCategory` entities.
   */
  getAll(): GetAllRequestBuilder<AccountCategory<T>, T> {
    return new GetAllRequestBuilder<AccountCategory<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AccountCategory` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccountCategory`.
   */
  create(
    entity: AccountCategory<T>
  ): CreateRequestBuilder<AccountCategory<T>, T> {
    return new CreateRequestBuilder<AccountCategory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AccountCategory`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccountCategory`.
   */
  update(
    entity: AccountCategory<T>
  ): UpdateRequestBuilder<AccountCategory<T>, T> {
    return new UpdateRequestBuilder<AccountCategory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AccountCategory`.
   * @param categoryCode Key property. See {@link AccountCategory.categoryCode}.
   * @returns A request builder for creating requests that delete an entity of type `AccountCategory`.
   */
  delete(categoryCode: number): DeleteRequestBuilder<AccountCategory<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AccountCategory`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccountCategory` by taking the entity as a parameter.
   */
  delete(
    entity: AccountCategory<T>
  ): DeleteRequestBuilder<AccountCategory<T>, T>;
  delete(
    categoryCodeOrEntity: any
  ): DeleteRequestBuilder<AccountCategory<T>, T> {
    return new DeleteRequestBuilder<AccountCategory<T>, T>(
      this.entityApi,
      categoryCodeOrEntity instanceof AccountCategory
        ? categoryCodeOrEntity
        : { CategoryCode: categoryCodeOrEntity! }
    );
  }
}
