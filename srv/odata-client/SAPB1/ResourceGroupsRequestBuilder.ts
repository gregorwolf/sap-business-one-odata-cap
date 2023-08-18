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
import { ResourceGroups } from './ResourceGroups';

/**
 * Request builder class for operations supported on the {@link ResourceGroups} entity.
 */
export class ResourceGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ResourceGroups<T>, T> {
  /**
   * Returns a request builder for retrieving one `ResourceGroups` entity based on its keys.
   * @param code Key property. See {@link ResourceGroups.code}.
   * @returns A request builder for creating requests to retrieve one `ResourceGroups` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ResourceGroups<T>, T> {
    return new GetByKeyRequestBuilder<ResourceGroups<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `ResourceGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ResourceGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ResourceGroups<T>, T> {
    return new GetAllRequestBuilder<ResourceGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ResourceGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ResourceGroups`.
   */
  create(
    entity: ResourceGroups<T>
  ): CreateRequestBuilder<ResourceGroups<T>, T> {
    return new CreateRequestBuilder<ResourceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ResourceGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ResourceGroups`.
   */
  update(
    entity: ResourceGroups<T>
  ): UpdateRequestBuilder<ResourceGroups<T>, T> {
    return new UpdateRequestBuilder<ResourceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ResourceGroups`.
   * @param code Key property. See {@link ResourceGroups.code}.
   * @returns A request builder for creating requests that delete an entity of type `ResourceGroups`.
   */
  delete(code: number): DeleteRequestBuilder<ResourceGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ResourceGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ResourceGroups` by taking the entity as a parameter.
   */
  delete(entity: ResourceGroups<T>): DeleteRequestBuilder<ResourceGroups<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<ResourceGroups<T>, T> {
    return new DeleteRequestBuilder<ResourceGroups<T>, T>(
      this.entityApi,
      codeOrEntity instanceof ResourceGroups
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
