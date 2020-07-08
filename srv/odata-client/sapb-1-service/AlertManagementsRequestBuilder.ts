/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { AlertManagements } from './AlertManagements';

/**
 * Request builder class for operations supported on the [[AlertManagements]] entity.
 */
export class AlertManagementsRequestBuilder extends RequestBuilder<AlertManagements> {
  /**
   * Returns a request builder for retrieving one `AlertManagements` entity based on its keys.
   * @param code Key property. See [[AlertManagements.code]].
   * @returns A request builder for creating requests to retrieve one `AlertManagements` entity based on its keys.
   */
  getByKey(code: number): GetByKeyRequestBuilder<AlertManagements> {
    return new GetByKeyRequestBuilder(AlertManagements, { Code: code });
  }

  /**
   * Returns a request builder for querying all `AlertManagements` entities.
   * @returns A request builder for creating requests to retrieve all `AlertManagements` entities.
   */
  getAll(): GetAllRequestBuilder<AlertManagements> {
    return new GetAllRequestBuilder(AlertManagements);
  }

  /**
   * Returns a request builder for creating a `AlertManagements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AlertManagements`.
   */
  create(entity: AlertManagements): CreateRequestBuilder<AlertManagements> {
    return new CreateRequestBuilder(AlertManagements, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AlertManagements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AlertManagements`.
   */
  update(entity: AlertManagements): UpdateRequestBuilder<AlertManagements> {
    return new UpdateRequestBuilder(AlertManagements, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AlertManagements`.
   * @param code Key property. See [[AlertManagements.code]].
   * @returns A request builder for creating requests that delete an entity of type `AlertManagements`.
   */
  delete(code: number): DeleteRequestBuilder<AlertManagements>;
  /**
   * Returns a request builder for deleting an entity of type `AlertManagements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AlertManagements` by taking the entity as a parameter.
   */
  delete(entity: AlertManagements): DeleteRequestBuilder<AlertManagements>;
  delete(codeOrEntity: any): DeleteRequestBuilder<AlertManagements> {
    return new DeleteRequestBuilder(AlertManagements, codeOrEntity instanceof AlertManagements ? codeOrEntity : { Code: codeOrEntity! });
  }
}
