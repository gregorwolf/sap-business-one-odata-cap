/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { DepreciationTypePools } from './DepreciationTypePools';

/**
 * Request builder class for operations supported on the [[DepreciationTypePools]] entity.
 */
export class DepreciationTypePoolsRequestBuilder extends RequestBuilder<DepreciationTypePools> {
  /**
   * Returns a request builder for retrieving one `DepreciationTypePools` entity based on its keys.
   * @param code Key property. See [[DepreciationTypePools.code]].
   * @returns A request builder for creating requests to retrieve one `DepreciationTypePools` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilder<DepreciationTypePools> {
    return new GetByKeyRequestBuilder(DepreciationTypePools, { Code: code });
  }

  /**
   * Returns a request builder for querying all `DepreciationTypePools` entities.
   * @returns A request builder for creating requests to retrieve all `DepreciationTypePools` entities.
   */
  getAll(): GetAllRequestBuilder<DepreciationTypePools> {
    return new GetAllRequestBuilder(DepreciationTypePools);
  }

  /**
   * Returns a request builder for creating a `DepreciationTypePools` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DepreciationTypePools`.
   */
  create(entity: DepreciationTypePools): CreateRequestBuilder<DepreciationTypePools> {
    return new CreateRequestBuilder(DepreciationTypePools, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `DepreciationTypePools`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DepreciationTypePools`.
   */
  update(entity: DepreciationTypePools): UpdateRequestBuilder<DepreciationTypePools> {
    return new UpdateRequestBuilder(DepreciationTypePools, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DepreciationTypePools`.
   * @param code Key property. See [[DepreciationTypePools.code]].
   * @returns A request builder for creating requests that delete an entity of type `DepreciationTypePools`.
   */
  delete(code: string): DeleteRequestBuilder<DepreciationTypePools>;
  /**
   * Returns a request builder for deleting an entity of type `DepreciationTypePools`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DepreciationTypePools` by taking the entity as a parameter.
   */
  delete(entity: DepreciationTypePools): DeleteRequestBuilder<DepreciationTypePools>;
  delete(codeOrEntity: any): DeleteRequestBuilder<DepreciationTypePools> {
    return new DeleteRequestBuilder(DepreciationTypePools, codeOrEntity instanceof DepreciationTypePools ? codeOrEntity : { Code: codeOrEntity! });
  }
}
