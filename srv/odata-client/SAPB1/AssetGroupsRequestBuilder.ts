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
import { AssetGroups } from './AssetGroups';

/**
 * Request builder class for operations supported on the {@link AssetGroups} entity.
 */
export class AssetGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetGroups<T>, T> {
  /**
   * Returns a request builder for retrieving one `AssetGroups` entity based on its keys.
   * @param code Key property. See {@link AssetGroups.code}.
   * @returns A request builder for creating requests to retrieve one `AssetGroups` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetGroups<T>, T> {
    return new GetByKeyRequestBuilder<AssetGroups<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `AssetGroups` entities.
   * @returns A request builder for creating requests to retrieve all `AssetGroups` entities.
   */
  getAll(): GetAllRequestBuilder<AssetGroups<T>, T> {
    return new GetAllRequestBuilder<AssetGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetGroups`.
   */
  create(entity: AssetGroups<T>): CreateRequestBuilder<AssetGroups<T>, T> {
    return new CreateRequestBuilder<AssetGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AssetGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetGroups`.
   */
  update(entity: AssetGroups<T>): UpdateRequestBuilder<AssetGroups<T>, T> {
    return new UpdateRequestBuilder<AssetGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetGroups`.
   * @param code Key property. See {@link AssetGroups.code}.
   * @returns A request builder for creating requests that delete an entity of type `AssetGroups`.
   */
  delete(code: string): DeleteRequestBuilder<AssetGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetGroups` by taking the entity as a parameter.
   */
  delete(entity: AssetGroups<T>): DeleteRequestBuilder<AssetGroups<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<AssetGroups<T>, T> {
    return new DeleteRequestBuilder<AssetGroups<T>, T>(
      this.entityApi,
      codeOrEntity instanceof AssetGroups
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
