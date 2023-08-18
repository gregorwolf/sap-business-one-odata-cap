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
import { AssetDepreciationGroups } from './AssetDepreciationGroups';

/**
 * Request builder class for operations supported on the {@link AssetDepreciationGroups} entity.
 */
export class AssetDepreciationGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetDepreciationGroups<T>, T> {
  /**
   * Returns a request builder for retrieving one `AssetDepreciationGroups` entity based on its keys.
   * @param code Key property. See {@link AssetDepreciationGroups.code}.
   * @returns A request builder for creating requests to retrieve one `AssetDepreciationGroups` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetDepreciationGroups<T>, T> {
    return new GetByKeyRequestBuilder<AssetDepreciationGroups<T>, T>(
      this.entityApi,
      { Code: code }
    );
  }

  /**
   * Returns a request builder for querying all `AssetDepreciationGroups` entities.
   * @returns A request builder for creating requests to retrieve all `AssetDepreciationGroups` entities.
   */
  getAll(): GetAllRequestBuilder<AssetDepreciationGroups<T>, T> {
    return new GetAllRequestBuilder<AssetDepreciationGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetDepreciationGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetDepreciationGroups`.
   */
  create(
    entity: AssetDepreciationGroups<T>
  ): CreateRequestBuilder<AssetDepreciationGroups<T>, T> {
    return new CreateRequestBuilder<AssetDepreciationGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetDepreciationGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetDepreciationGroups`.
   */
  update(
    entity: AssetDepreciationGroups<T>
  ): UpdateRequestBuilder<AssetDepreciationGroups<T>, T> {
    return new UpdateRequestBuilder<AssetDepreciationGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetDepreciationGroups`.
   * @param code Key property. See {@link AssetDepreciationGroups.code}.
   * @returns A request builder for creating requests that delete an entity of type `AssetDepreciationGroups`.
   */
  delete(code: string): DeleteRequestBuilder<AssetDepreciationGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetDepreciationGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetDepreciationGroups` by taking the entity as a parameter.
   */
  delete(
    entity: AssetDepreciationGroups<T>
  ): DeleteRequestBuilder<AssetDepreciationGroups<T>, T>;
  delete(
    codeOrEntity: any
  ): DeleteRequestBuilder<AssetDepreciationGroups<T>, T> {
    return new DeleteRequestBuilder<AssetDepreciationGroups<T>, T>(
      this.entityApi,
      codeOrEntity instanceof AssetDepreciationGroups
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
