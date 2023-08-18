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
import { BankStatements } from './BankStatements';

/**
 * Request builder class for operations supported on the {@link BankStatements} entity.
 */
export class BankStatementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankStatements<T>, T> {
  /**
   * Returns a request builder for retrieving one `BankStatements` entity based on its keys.
   * @param internalNumber Key property. See {@link BankStatements.internalNumber}.
   * @returns A request builder for creating requests to retrieve one `BankStatements` entity based on its keys.
   */
  getByKey(
    internalNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BankStatements<T>, T> {
    return new GetByKeyRequestBuilder<BankStatements<T>, T>(this.entityApi, {
      InternalNumber: internalNumber
    });
  }

  /**
   * Returns a request builder for querying all `BankStatements` entities.
   * @returns A request builder for creating requests to retrieve all `BankStatements` entities.
   */
  getAll(): GetAllRequestBuilder<BankStatements<T>, T> {
    return new GetAllRequestBuilder<BankStatements<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BankStatements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankStatements`.
   */
  create(
    entity: BankStatements<T>
  ): CreateRequestBuilder<BankStatements<T>, T> {
    return new CreateRequestBuilder<BankStatements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BankStatements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankStatements`.
   */
  update(
    entity: BankStatements<T>
  ): UpdateRequestBuilder<BankStatements<T>, T> {
    return new UpdateRequestBuilder<BankStatements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BankStatements`.
   * @param internalNumber Key property. See {@link BankStatements.internalNumber}.
   * @returns A request builder for creating requests that delete an entity of type `BankStatements`.
   */
  delete(internalNumber: number): DeleteRequestBuilder<BankStatements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankStatements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankStatements` by taking the entity as a parameter.
   */
  delete(entity: BankStatements<T>): DeleteRequestBuilder<BankStatements<T>, T>;
  delete(
    internalNumberOrEntity: any
  ): DeleteRequestBuilder<BankStatements<T>, T> {
    return new DeleteRequestBuilder<BankStatements<T>, T>(
      this.entityApi,
      internalNumberOrEntity instanceof BankStatements
        ? internalNumberOrEntity
        : { InternalNumber: internalNumberOrEntity! }
    );
  }
}
