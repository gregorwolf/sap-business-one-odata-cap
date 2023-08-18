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
import { ActivityTypes } from './ActivityTypes';

/**
 * Request builder class for operations supported on the {@link ActivityTypes} entity.
 */
export class ActivityTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ActivityTypes<T>, T> {
  /**
   * Returns a request builder for retrieving one `ActivityTypes` entity based on its keys.
   * @param code Key property. See {@link ActivityTypes.code}.
   * @returns A request builder for creating requests to retrieve one `ActivityTypes` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ActivityTypes<T>, T> {
    return new GetByKeyRequestBuilder<ActivityTypes<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `ActivityTypes` entities.
   * @returns A request builder for creating requests to retrieve all `ActivityTypes` entities.
   */
  getAll(): GetAllRequestBuilder<ActivityTypes<T>, T> {
    return new GetAllRequestBuilder<ActivityTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ActivityTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ActivityTypes`.
   */
  create(entity: ActivityTypes<T>): CreateRequestBuilder<ActivityTypes<T>, T> {
    return new CreateRequestBuilder<ActivityTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ActivityTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ActivityTypes`.
   */
  update(entity: ActivityTypes<T>): UpdateRequestBuilder<ActivityTypes<T>, T> {
    return new UpdateRequestBuilder<ActivityTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ActivityTypes`.
   * @param code Key property. See {@link ActivityTypes.code}.
   * @returns A request builder for creating requests that delete an entity of type `ActivityTypes`.
   */
  delete(code: number): DeleteRequestBuilder<ActivityTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ActivityTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ActivityTypes` by taking the entity as a parameter.
   */
  delete(entity: ActivityTypes<T>): DeleteRequestBuilder<ActivityTypes<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<ActivityTypes<T>, T> {
    return new DeleteRequestBuilder<ActivityTypes<T>, T>(
      this.entityApi,
      codeOrEntity instanceof ActivityTypes
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
