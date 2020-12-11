/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { AccrualTypes } from './AccrualTypes';

/**
 * Request builder class for operations supported on the [[AccrualTypes]] entity.
 */
export class AccrualTypesRequestBuilder extends RequestBuilder<AccrualTypes> {
  /**
   * Returns a request builder for retrieving one `AccrualTypes` entity based on its keys.
   * @param code Key property. See [[AccrualTypes.code]].
   * @returns A request builder for creating requests to retrieve one `AccrualTypes` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilderV4<AccrualTypes> {
    return new GetByKeyRequestBuilderV4(AccrualTypes, { Code: code });
  }

  /**
   * Returns a request builder for querying all `AccrualTypes` entities.
   * @returns A request builder for creating requests to retrieve all `AccrualTypes` entities.
   */
  getAll(): GetAllRequestBuilderV4<AccrualTypes> {
    return new GetAllRequestBuilderV4(AccrualTypes);
  }

  /**
   * Returns a request builder for creating a `AccrualTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccrualTypes`.
   */
  create(entity: AccrualTypes): CreateRequestBuilderV4<AccrualTypes> {
    return new CreateRequestBuilderV4(AccrualTypes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AccrualTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccrualTypes`.
   */
  update(entity: AccrualTypes): UpdateRequestBuilderV4<AccrualTypes> {
    return new UpdateRequestBuilderV4(AccrualTypes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AccrualTypes`.
   * @param code Key property. See [[AccrualTypes.code]].
   * @returns A request builder for creating requests that delete an entity of type `AccrualTypes`.
   */
  delete(code: string): DeleteRequestBuilderV4<AccrualTypes>;
  /**
   * Returns a request builder for deleting an entity of type `AccrualTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccrualTypes` by taking the entity as a parameter.
   */
  delete(entity: AccrualTypes): DeleteRequestBuilderV4<AccrualTypes>;
  delete(codeOrEntity: any): DeleteRequestBuilderV4<AccrualTypes> {
    return new DeleteRequestBuilderV4(AccrualTypes, codeOrEntity instanceof AccrualTypes ? codeOrEntity : { Code: codeOrEntity! });
  }
}
