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
import { RouteStages } from './RouteStages';

/**
 * Request builder class for operations supported on the {@link RouteStages} entity.
 */
export class RouteStagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RouteStages<T>, T> {
  /**
   * Returns a request builder for retrieving one `RouteStages` entity based on its keys.
   * @param internalNumber Key property. See {@link RouteStages.internalNumber}.
   * @returns A request builder for creating requests to retrieve one `RouteStages` entity based on its keys.
   */
  getByKey(
    internalNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RouteStages<T>, T> {
    return new GetByKeyRequestBuilder<RouteStages<T>, T>(this.entityApi, {
      InternalNumber: internalNumber
    });
  }

  /**
   * Returns a request builder for querying all `RouteStages` entities.
   * @returns A request builder for creating requests to retrieve all `RouteStages` entities.
   */
  getAll(): GetAllRequestBuilder<RouteStages<T>, T> {
    return new GetAllRequestBuilder<RouteStages<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RouteStages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RouteStages`.
   */
  create(entity: RouteStages<T>): CreateRequestBuilder<RouteStages<T>, T> {
    return new CreateRequestBuilder<RouteStages<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `RouteStages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RouteStages`.
   */
  update(entity: RouteStages<T>): UpdateRequestBuilder<RouteStages<T>, T> {
    return new UpdateRequestBuilder<RouteStages<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RouteStages`.
   * @param internalNumber Key property. See {@link RouteStages.internalNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RouteStages`.
   */
  delete(internalNumber: number): DeleteRequestBuilder<RouteStages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RouteStages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RouteStages` by taking the entity as a parameter.
   */
  delete(entity: RouteStages<T>): DeleteRequestBuilder<RouteStages<T>, T>;
  delete(internalNumberOrEntity: any): DeleteRequestBuilder<RouteStages<T>, T> {
    return new DeleteRequestBuilder<RouteStages<T>, T>(
      this.entityApi,
      internalNumberOrEntity instanceof RouteStages
        ? internalNumberOrEntity
        : { InternalNumber: internalNumberOrEntity! }
    );
  }
}
