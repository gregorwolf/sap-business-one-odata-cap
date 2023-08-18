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
import { BankChargesAllocationCodes } from './BankChargesAllocationCodes';

/**
 * Request builder class for operations supported on the {@link BankChargesAllocationCodes} entity.
 */
export class BankChargesAllocationCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankChargesAllocationCodes<T>, T> {
  /**
   * Returns a request builder for retrieving one `BankChargesAllocationCodes` entity based on its keys.
   * @param code Key property. See {@link BankChargesAllocationCodes.code}.
   * @returns A request builder for creating requests to retrieve one `BankChargesAllocationCodes` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BankChargesAllocationCodes<T>, T> {
    return new GetByKeyRequestBuilder<BankChargesAllocationCodes<T>, T>(
      this.entityApi,
      { Code: code }
    );
  }

  /**
   * Returns a request builder for querying all `BankChargesAllocationCodes` entities.
   * @returns A request builder for creating requests to retrieve all `BankChargesAllocationCodes` entities.
   */
  getAll(): GetAllRequestBuilder<BankChargesAllocationCodes<T>, T> {
    return new GetAllRequestBuilder<BankChargesAllocationCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BankChargesAllocationCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankChargesAllocationCodes`.
   */
  create(
    entity: BankChargesAllocationCodes<T>
  ): CreateRequestBuilder<BankChargesAllocationCodes<T>, T> {
    return new CreateRequestBuilder<BankChargesAllocationCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BankChargesAllocationCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankChargesAllocationCodes`.
   */
  update(
    entity: BankChargesAllocationCodes<T>
  ): UpdateRequestBuilder<BankChargesAllocationCodes<T>, T> {
    return new UpdateRequestBuilder<BankChargesAllocationCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BankChargesAllocationCodes`.
   * @param code Key property. See {@link BankChargesAllocationCodes.code}.
   * @returns A request builder for creating requests that delete an entity of type `BankChargesAllocationCodes`.
   */
  delete(code: string): DeleteRequestBuilder<BankChargesAllocationCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankChargesAllocationCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankChargesAllocationCodes` by taking the entity as a parameter.
   */
  delete(
    entity: BankChargesAllocationCodes<T>
  ): DeleteRequestBuilder<BankChargesAllocationCodes<T>, T>;
  delete(
    codeOrEntity: any
  ): DeleteRequestBuilder<BankChargesAllocationCodes<T>, T> {
    return new DeleteRequestBuilder<BankChargesAllocationCodes<T>, T>(
      this.entityApi,
      codeOrEntity instanceof BankChargesAllocationCodes
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
