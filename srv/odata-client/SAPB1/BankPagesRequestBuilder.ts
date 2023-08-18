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
import { BankPages } from './BankPages';

/**
 * Request builder class for operations supported on the {@link BankPages} entity.
 */
export class BankPagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankPages<T>, T> {
  /**
   * Returns a request builder for retrieving one `BankPages` entity based on its keys.
   * @param accountCode Key property. See {@link BankPages.accountCode}.
   * @param sequence Key property. See {@link BankPages.sequence}.
   * @returns A request builder for creating requests to retrieve one `BankPages` entity based on its keys.
   */
  getByKey(
    accountCode: DeserializedType<T, 'Edm.String'>,
    sequence: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BankPages<T>, T> {
    return new GetByKeyRequestBuilder<BankPages<T>, T>(this.entityApi, {
      AccountCode: accountCode,
      Sequence: sequence
    });
  }

  /**
   * Returns a request builder for querying all `BankPages` entities.
   * @returns A request builder for creating requests to retrieve all `BankPages` entities.
   */
  getAll(): GetAllRequestBuilder<BankPages<T>, T> {
    return new GetAllRequestBuilder<BankPages<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BankPages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankPages`.
   */
  create(entity: BankPages<T>): CreateRequestBuilder<BankPages<T>, T> {
    return new CreateRequestBuilder<BankPages<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BankPages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankPages`.
   */
  update(entity: BankPages<T>): UpdateRequestBuilder<BankPages<T>, T> {
    return new UpdateRequestBuilder<BankPages<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BankPages`.
   * @param accountCode Key property. See {@link BankPages.accountCode}.
   * @param sequence Key property. See {@link BankPages.sequence}.
   * @returns A request builder for creating requests that delete an entity of type `BankPages`.
   */
  delete(
    accountCode: string,
    sequence: number
  ): DeleteRequestBuilder<BankPages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankPages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankPages` by taking the entity as a parameter.
   */
  delete(entity: BankPages<T>): DeleteRequestBuilder<BankPages<T>, T>;
  delete(
    accountCodeOrEntity: any,
    sequence?: number
  ): DeleteRequestBuilder<BankPages<T>, T> {
    return new DeleteRequestBuilder<BankPages<T>, T>(
      this.entityApi,
      accountCodeOrEntity instanceof BankPages
        ? accountCodeOrEntity
        : {
            AccountCode: accountCodeOrEntity!,
            Sequence: sequence!
          }
    );
  }
}
