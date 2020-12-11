/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(code: string): GetByKeyRequestBuilderV4<DepreciationTypePools> {
    return new GetByKeyRequestBuilderV4(DepreciationTypePools, { Code: code });
  }

  /**
   * Returns a request builder for querying all `DepreciationTypePools` entities.
   * @returns A request builder for creating requests to retrieve all `DepreciationTypePools` entities.
   */
  getAll(): GetAllRequestBuilderV4<DepreciationTypePools> {
    return new GetAllRequestBuilderV4(DepreciationTypePools);
  }

  /**
   * Returns a request builder for creating a `DepreciationTypePools` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DepreciationTypePools`.
   */
  create(entity: DepreciationTypePools): CreateRequestBuilderV4<DepreciationTypePools> {
    return new CreateRequestBuilderV4(DepreciationTypePools, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `DepreciationTypePools`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DepreciationTypePools`.
   */
  update(entity: DepreciationTypePools): UpdateRequestBuilderV4<DepreciationTypePools> {
    return new UpdateRequestBuilderV4(DepreciationTypePools, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DepreciationTypePools`.
   * @param code Key property. See [[DepreciationTypePools.code]].
   * @returns A request builder for creating requests that delete an entity of type `DepreciationTypePools`.
   */
  delete(code: string): DeleteRequestBuilderV4<DepreciationTypePools>;
  /**
   * Returns a request builder for deleting an entity of type `DepreciationTypePools`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DepreciationTypePools` by taking the entity as a parameter.
   */
  delete(entity: DepreciationTypePools): DeleteRequestBuilderV4<DepreciationTypePools>;
  delete(codeOrEntity: any): DeleteRequestBuilderV4<DepreciationTypePools> {
    return new DeleteRequestBuilderV4(DepreciationTypePools, codeOrEntity instanceof DepreciationTypePools ? codeOrEntity : { Code: codeOrEntity! });
  }
}
