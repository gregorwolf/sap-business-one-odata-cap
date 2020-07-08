/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { TransactionCodes } from './TransactionCodes';

/**
 * Request builder class for operations supported on the [[TransactionCodes]] entity.
 */
export class TransactionCodesRequestBuilder extends RequestBuilder<TransactionCodes> {
  /**
   * Returns a request builder for retrieving one `TransactionCodes` entity based on its keys.
   * @param code Key property. See [[TransactionCodes.code]].
   * @returns A request builder for creating requests to retrieve one `TransactionCodes` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilder<TransactionCodes> {
    return new GetByKeyRequestBuilder(TransactionCodes, { Code: code });
  }

  /**
   * Returns a request builder for querying all `TransactionCodes` entities.
   * @returns A request builder for creating requests to retrieve all `TransactionCodes` entities.
   */
  getAll(): GetAllRequestBuilder<TransactionCodes> {
    return new GetAllRequestBuilder(TransactionCodes);
  }

  /**
   * Returns a request builder for creating a `TransactionCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransactionCodes`.
   */
  create(entity: TransactionCodes): CreateRequestBuilder<TransactionCodes> {
    return new CreateRequestBuilder(TransactionCodes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `TransactionCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransactionCodes`.
   */
  update(entity: TransactionCodes): UpdateRequestBuilder<TransactionCodes> {
    return new UpdateRequestBuilder(TransactionCodes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TransactionCodes`.
   * @param code Key property. See [[TransactionCodes.code]].
   * @returns A request builder for creating requests that delete an entity of type `TransactionCodes`.
   */
  delete(code: string): DeleteRequestBuilder<TransactionCodes>;
  /**
   * Returns a request builder for deleting an entity of type `TransactionCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransactionCodes` by taking the entity as a parameter.
   */
  delete(entity: TransactionCodes): DeleteRequestBuilder<TransactionCodes>;
  delete(codeOrEntity: any): DeleteRequestBuilder<TransactionCodes> {
    return new DeleteRequestBuilder(TransactionCodes, codeOrEntity instanceof TransactionCodes ? codeOrEntity : { Code: codeOrEntity! });
  }
}
