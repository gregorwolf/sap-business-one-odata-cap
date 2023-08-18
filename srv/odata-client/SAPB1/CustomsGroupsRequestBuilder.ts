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
import { CustomsGroups } from './CustomsGroups';

/**
 * Request builder class for operations supported on the {@link CustomsGroups} entity.
 */
export class CustomsGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomsGroups<T>, T> {
  /**
   * Returns a request builder for retrieving one `CustomsGroups` entity based on its keys.
   * @param code Key property. See {@link CustomsGroups.code}.
   * @returns A request builder for creating requests to retrieve one `CustomsGroups` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<CustomsGroups<T>, T> {
    return new GetByKeyRequestBuilder<CustomsGroups<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `CustomsGroups` entities.
   * @returns A request builder for creating requests to retrieve all `CustomsGroups` entities.
   */
  getAll(): GetAllRequestBuilder<CustomsGroups<T>, T> {
    return new GetAllRequestBuilder<CustomsGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomsGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomsGroups`.
   */
  create(entity: CustomsGroups<T>): CreateRequestBuilder<CustomsGroups<T>, T> {
    return new CreateRequestBuilder<CustomsGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomsGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomsGroups`.
   */
  update(entity: CustomsGroups<T>): UpdateRequestBuilder<CustomsGroups<T>, T> {
    return new UpdateRequestBuilder<CustomsGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomsGroups`.
   * @param code Key property. See {@link CustomsGroups.code}.
   * @returns A request builder for creating requests that delete an entity of type `CustomsGroups`.
   */
  delete(code: number): DeleteRequestBuilder<CustomsGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomsGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomsGroups` by taking the entity as a parameter.
   */
  delete(entity: CustomsGroups<T>): DeleteRequestBuilder<CustomsGroups<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<CustomsGroups<T>, T> {
    return new DeleteRequestBuilder<CustomsGroups<T>, T>(
      this.entityApi,
      codeOrEntity instanceof CustomsGroups
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
