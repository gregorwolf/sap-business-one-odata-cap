/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { RouteStages } from './RouteStages';

/**
 * Request builder class for operations supported on the [[RouteStages]] entity.
 */
export class RouteStagesRequestBuilder extends RequestBuilder<RouteStages> {
  /**
   * Returns a request builder for retrieving one `RouteStages` entity based on its keys.
   * @param internalNumber Key property. See [[RouteStages.internalNumber]].
   * @returns A request builder for creating requests to retrieve one `RouteStages` entity based on its keys.
   */
  getByKey(internalNumber: number): GetByKeyRequestBuilderV4<RouteStages> {
    return new GetByKeyRequestBuilderV4(RouteStages, { InternalNumber: internalNumber });
  }

  /**
   * Returns a request builder for querying all `RouteStages` entities.
   * @returns A request builder for creating requests to retrieve all `RouteStages` entities.
   */
  getAll(): GetAllRequestBuilderV4<RouteStages> {
    return new GetAllRequestBuilderV4(RouteStages);
  }

  /**
   * Returns a request builder for creating a `RouteStages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RouteStages`.
   */
  create(entity: RouteStages): CreateRequestBuilderV4<RouteStages> {
    return new CreateRequestBuilderV4(RouteStages, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `RouteStages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RouteStages`.
   */
  update(entity: RouteStages): UpdateRequestBuilderV4<RouteStages> {
    return new UpdateRequestBuilderV4(RouteStages, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RouteStages`.
   * @param internalNumber Key property. See [[RouteStages.internalNumber]].
   * @returns A request builder for creating requests that delete an entity of type `RouteStages`.
   */
  delete(internalNumber: number): DeleteRequestBuilderV4<RouteStages>;
  /**
   * Returns a request builder for deleting an entity of type `RouteStages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RouteStages` by taking the entity as a parameter.
   */
  delete(entity: RouteStages): DeleteRequestBuilderV4<RouteStages>;
  delete(internalNumberOrEntity: any): DeleteRequestBuilderV4<RouteStages> {
    return new DeleteRequestBuilderV4(RouteStages, internalNumberOrEntity instanceof RouteStages ? internalNumberOrEntity : { InternalNumber: internalNumberOrEntity! });
  }
}
