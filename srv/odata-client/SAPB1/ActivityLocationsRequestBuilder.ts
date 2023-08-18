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
import { ActivityLocations } from './ActivityLocations';

/**
 * Request builder class for operations supported on the {@link ActivityLocations} entity.
 */
export class ActivityLocationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ActivityLocations<T>, T> {
  /**
   * Returns a request builder for retrieving one `ActivityLocations` entity based on its keys.
   * @param code Key property. See {@link ActivityLocations.code}.
   * @returns A request builder for creating requests to retrieve one `ActivityLocations` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ActivityLocations<T>, T> {
    return new GetByKeyRequestBuilder<ActivityLocations<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `ActivityLocations` entities.
   * @returns A request builder for creating requests to retrieve all `ActivityLocations` entities.
   */
  getAll(): GetAllRequestBuilder<ActivityLocations<T>, T> {
    return new GetAllRequestBuilder<ActivityLocations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ActivityLocations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ActivityLocations`.
   */
  create(
    entity: ActivityLocations<T>
  ): CreateRequestBuilder<ActivityLocations<T>, T> {
    return new CreateRequestBuilder<ActivityLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ActivityLocations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ActivityLocations`.
   */
  update(
    entity: ActivityLocations<T>
  ): UpdateRequestBuilder<ActivityLocations<T>, T> {
    return new UpdateRequestBuilder<ActivityLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ActivityLocations`.
   * @param code Key property. See {@link ActivityLocations.code}.
   * @returns A request builder for creating requests that delete an entity of type `ActivityLocations`.
   */
  delete(code: number): DeleteRequestBuilder<ActivityLocations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ActivityLocations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ActivityLocations` by taking the entity as a parameter.
   */
  delete(
    entity: ActivityLocations<T>
  ): DeleteRequestBuilder<ActivityLocations<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<ActivityLocations<T>, T> {
    return new DeleteRequestBuilder<ActivityLocations<T>, T>(
      this.entityApi,
      codeOrEntity instanceof ActivityLocations
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
