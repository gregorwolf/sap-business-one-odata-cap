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
import { ChartOfAccounts } from './ChartOfAccounts';

/**
 * Request builder class for operations supported on the {@link ChartOfAccounts} entity.
 */
export class ChartOfAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ChartOfAccounts<T>, T> {
  /**
   * Returns a request builder for retrieving one `ChartOfAccounts` entity based on its keys.
   * @param code Key property. See {@link ChartOfAccounts.code}.
   * @returns A request builder for creating requests to retrieve one `ChartOfAccounts` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ChartOfAccounts<T>, T> {
    return new GetByKeyRequestBuilder<ChartOfAccounts<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `ChartOfAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `ChartOfAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<ChartOfAccounts<T>, T> {
    return new GetAllRequestBuilder<ChartOfAccounts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ChartOfAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ChartOfAccounts`.
   */
  create(
    entity: ChartOfAccounts<T>
  ): CreateRequestBuilder<ChartOfAccounts<T>, T> {
    return new CreateRequestBuilder<ChartOfAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ChartOfAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ChartOfAccounts`.
   */
  update(
    entity: ChartOfAccounts<T>
  ): UpdateRequestBuilder<ChartOfAccounts<T>, T> {
    return new UpdateRequestBuilder<ChartOfAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ChartOfAccounts`.
   * @param code Key property. See {@link ChartOfAccounts.code}.
   * @returns A request builder for creating requests that delete an entity of type `ChartOfAccounts`.
   */
  delete(code: string): DeleteRequestBuilder<ChartOfAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ChartOfAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ChartOfAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: ChartOfAccounts<T>
  ): DeleteRequestBuilder<ChartOfAccounts<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<ChartOfAccounts<T>, T> {
    return new DeleteRequestBuilder<ChartOfAccounts<T>, T>(
      this.entityApi,
      codeOrEntity instanceof ChartOfAccounts
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
