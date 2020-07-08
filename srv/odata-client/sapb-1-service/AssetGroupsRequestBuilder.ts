/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { AssetGroups } from './AssetGroups';

/**
 * Request builder class for operations supported on the [[AssetGroups]] entity.
 */
export class AssetGroupsRequestBuilder extends RequestBuilder<AssetGroups> {
  /**
   * Returns a request builder for retrieving one `AssetGroups` entity based on its keys.
   * @param code Key property. See [[AssetGroups.code]].
   * @returns A request builder for creating requests to retrieve one `AssetGroups` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilder<AssetGroups> {
    return new GetByKeyRequestBuilder(AssetGroups, { Code: code });
  }

  /**
   * Returns a request builder for querying all `AssetGroups` entities.
   * @returns A request builder for creating requests to retrieve all `AssetGroups` entities.
   */
  getAll(): GetAllRequestBuilder<AssetGroups> {
    return new GetAllRequestBuilder(AssetGroups);
  }

  /**
   * Returns a request builder for creating a `AssetGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetGroups`.
   */
  create(entity: AssetGroups): CreateRequestBuilder<AssetGroups> {
    return new CreateRequestBuilder(AssetGroups, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AssetGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetGroups`.
   */
  update(entity: AssetGroups): UpdateRequestBuilder<AssetGroups> {
    return new UpdateRequestBuilder(AssetGroups, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetGroups`.
   * @param code Key property. See [[AssetGroups.code]].
   * @returns A request builder for creating requests that delete an entity of type `AssetGroups`.
   */
  delete(code: string): DeleteRequestBuilder<AssetGroups>;
  /**
   * Returns a request builder for deleting an entity of type `AssetGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetGroups` by taking the entity as a parameter.
   */
  delete(entity: AssetGroups): DeleteRequestBuilder<AssetGroups>;
  delete(codeOrEntity: any): DeleteRequestBuilder<AssetGroups> {
    return new DeleteRequestBuilder(AssetGroups, codeOrEntity instanceof AssetGroups ? codeOrEntity : { Code: codeOrEntity! });
  }
}
