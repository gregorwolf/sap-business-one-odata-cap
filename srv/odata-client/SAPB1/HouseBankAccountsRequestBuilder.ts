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
import { HouseBankAccounts } from './HouseBankAccounts';

/**
 * Request builder class for operations supported on the {@link HouseBankAccounts} entity.
 */
export class HouseBankAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HouseBankAccounts<T>, T> {
  /**
   * Returns a request builder for retrieving one `HouseBankAccounts` entity based on its keys.
   * @param absoluteEntry Key property. See {@link HouseBankAccounts.absoluteEntry}.
   * @returns A request builder for creating requests to retrieve one `HouseBankAccounts` entity based on its keys.
   */
  getByKey(
    absoluteEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<HouseBankAccounts<T>, T> {
    return new GetByKeyRequestBuilder<HouseBankAccounts<T>, T>(this.entityApi, {
      AbsoluteEntry: absoluteEntry
    });
  }

  /**
   * Returns a request builder for querying all `HouseBankAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `HouseBankAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<HouseBankAccounts<T>, T> {
    return new GetAllRequestBuilder<HouseBankAccounts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `HouseBankAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HouseBankAccounts`.
   */
  create(
    entity: HouseBankAccounts<T>
  ): CreateRequestBuilder<HouseBankAccounts<T>, T> {
    return new CreateRequestBuilder<HouseBankAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `HouseBankAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HouseBankAccounts`.
   */
  update(
    entity: HouseBankAccounts<T>
  ): UpdateRequestBuilder<HouseBankAccounts<T>, T> {
    return new UpdateRequestBuilder<HouseBankAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `HouseBankAccounts`.
   * @param absoluteEntry Key property. See {@link HouseBankAccounts.absoluteEntry}.
   * @returns A request builder for creating requests that delete an entity of type `HouseBankAccounts`.
   */
  delete(absoluteEntry: number): DeleteRequestBuilder<HouseBankAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HouseBankAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HouseBankAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: HouseBankAccounts<T>
  ): DeleteRequestBuilder<HouseBankAccounts<T>, T>;
  delete(
    absoluteEntryOrEntity: any
  ): DeleteRequestBuilder<HouseBankAccounts<T>, T> {
    return new DeleteRequestBuilder<HouseBankAccounts<T>, T>(
      this.entityApi,
      absoluteEntryOrEntity instanceof HouseBankAccounts
        ? absoluteEntryOrEntity
        : { AbsoluteEntry: absoluteEntryOrEntity! }
    );
  }
}
