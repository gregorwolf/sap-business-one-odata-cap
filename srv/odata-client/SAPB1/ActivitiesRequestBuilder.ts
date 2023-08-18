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
import { Activities } from './Activities';

/**
 * Request builder class for operations supported on the {@link Activities} entity.
 */
export class ActivitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Activities<T>, T> {
  /**
   * Returns a request builder for retrieving one `Activities` entity based on its keys.
   * @param activityCode Key property. See {@link Activities.activityCode}.
   * @returns A request builder for creating requests to retrieve one `Activities` entity based on its keys.
   */
  getByKey(
    activityCode: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Activities<T>, T> {
    return new GetByKeyRequestBuilder<Activities<T>, T>(this.entityApi, {
      ActivityCode: activityCode
    });
  }

  /**
   * Returns a request builder for querying all `Activities` entities.
   * @returns A request builder for creating requests to retrieve all `Activities` entities.
   */
  getAll(): GetAllRequestBuilder<Activities<T>, T> {
    return new GetAllRequestBuilder<Activities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Activities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Activities`.
   */
  create(entity: Activities<T>): CreateRequestBuilder<Activities<T>, T> {
    return new CreateRequestBuilder<Activities<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Activities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Activities`.
   */
  update(entity: Activities<T>): UpdateRequestBuilder<Activities<T>, T> {
    return new UpdateRequestBuilder<Activities<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Activities`.
   * @param activityCode Key property. See {@link Activities.activityCode}.
   * @returns A request builder for creating requests that delete an entity of type `Activities`.
   */
  delete(activityCode: number): DeleteRequestBuilder<Activities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Activities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Activities` by taking the entity as a parameter.
   */
  delete(entity: Activities<T>): DeleteRequestBuilder<Activities<T>, T>;
  delete(activityCodeOrEntity: any): DeleteRequestBuilder<Activities<T>, T> {
    return new DeleteRequestBuilder<Activities<T>, T>(
      this.entityApi,
      activityCodeOrEntity instanceof Activities
        ? activityCodeOrEntity
        : { ActivityCode: activityCodeOrEntity! }
    );
  }
}
