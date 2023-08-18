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
import { AttributeGroups } from './AttributeGroups';

/**
 * Request builder class for operations supported on the {@link AttributeGroups} entity.
 */
export class AttributeGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AttributeGroups<T>, T> {
  /**
   * Returns a request builder for retrieving one `AttributeGroups` entity based on its keys.
   * @param code Key property. See {@link AttributeGroups.code}.
   * @returns A request builder for creating requests to retrieve one `AttributeGroups` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<AttributeGroups<T>, T> {
    return new GetByKeyRequestBuilder<AttributeGroups<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `AttributeGroups` entities.
   * @returns A request builder for creating requests to retrieve all `AttributeGroups` entities.
   */
  getAll(): GetAllRequestBuilder<AttributeGroups<T>, T> {
    return new GetAllRequestBuilder<AttributeGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AttributeGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AttributeGroups`.
   */
  create(
    entity: AttributeGroups<T>
  ): CreateRequestBuilder<AttributeGroups<T>, T> {
    return new CreateRequestBuilder<AttributeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AttributeGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AttributeGroups`.
   */
  update(
    entity: AttributeGroups<T>
  ): UpdateRequestBuilder<AttributeGroups<T>, T> {
    return new UpdateRequestBuilder<AttributeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AttributeGroups`.
   * @param code Key property. See {@link AttributeGroups.code}.
   * @returns A request builder for creating requests that delete an entity of type `AttributeGroups`.
   */
  delete(code: number): DeleteRequestBuilder<AttributeGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AttributeGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AttributeGroups` by taking the entity as a parameter.
   */
  delete(
    entity: AttributeGroups<T>
  ): DeleteRequestBuilder<AttributeGroups<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<AttributeGroups<T>, T> {
    return new DeleteRequestBuilder<AttributeGroups<T>, T>(
      this.entityApi,
      codeOrEntity instanceof AttributeGroups
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
