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
import { TransactionCodes } from './TransactionCodes';

/**
 * Request builder class for operations supported on the {@link TransactionCodes} entity.
 */
export class TransactionCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransactionCodes<T>, T> {
  /**
   * Returns a request builder for retrieving one `TransactionCodes` entity based on its keys.
   * @param code Key property. See {@link TransactionCodes.code}.
   * @returns A request builder for creating requests to retrieve one `TransactionCodes` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TransactionCodes<T>, T> {
    return new GetByKeyRequestBuilder<TransactionCodes<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `TransactionCodes` entities.
   * @returns A request builder for creating requests to retrieve all `TransactionCodes` entities.
   */
  getAll(): GetAllRequestBuilder<TransactionCodes<T>, T> {
    return new GetAllRequestBuilder<TransactionCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TransactionCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransactionCodes`.
   */
  create(
    entity: TransactionCodes<T>
  ): CreateRequestBuilder<TransactionCodes<T>, T> {
    return new CreateRequestBuilder<TransactionCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransactionCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransactionCodes`.
   */
  update(
    entity: TransactionCodes<T>
  ): UpdateRequestBuilder<TransactionCodes<T>, T> {
    return new UpdateRequestBuilder<TransactionCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransactionCodes`.
   * @param code Key property. See {@link TransactionCodes.code}.
   * @returns A request builder for creating requests that delete an entity of type `TransactionCodes`.
   */
  delete(code: string): DeleteRequestBuilder<TransactionCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransactionCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransactionCodes` by taking the entity as a parameter.
   */
  delete(
    entity: TransactionCodes<T>
  ): DeleteRequestBuilder<TransactionCodes<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<TransactionCodes<T>, T> {
    return new DeleteRequestBuilder<TransactionCodes<T>, T>(
      this.entityApi,
      codeOrEntity instanceof TransactionCodes
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
