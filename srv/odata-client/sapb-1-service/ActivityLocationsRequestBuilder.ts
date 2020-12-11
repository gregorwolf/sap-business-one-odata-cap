/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ActivityLocations } from './ActivityLocations';

/**
 * Request builder class for operations supported on the [[ActivityLocations]] entity.
 */
export class ActivityLocationsRequestBuilder extends RequestBuilder<ActivityLocations> {
  /**
   * Returns a request builder for retrieving one `ActivityLocations` entity based on its keys.
   * @param code Key property. See [[ActivityLocations.code]].
   * @returns A request builder for creating requests to retrieve one `ActivityLocations` entity based on its keys.
   */
  getByKey(code: number): GetByKeyRequestBuilderV4<ActivityLocations> {
    return new GetByKeyRequestBuilderV4(ActivityLocations, { Code: code });
  }

  /**
   * Returns a request builder for querying all `ActivityLocations` entities.
   * @returns A request builder for creating requests to retrieve all `ActivityLocations` entities.
   */
  getAll(): GetAllRequestBuilderV4<ActivityLocations> {
    return new GetAllRequestBuilderV4(ActivityLocations);
  }

  /**
   * Returns a request builder for creating a `ActivityLocations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ActivityLocations`.
   */
  create(entity: ActivityLocations): CreateRequestBuilderV4<ActivityLocations> {
    return new CreateRequestBuilderV4(ActivityLocations, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ActivityLocations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ActivityLocations`.
   */
  update(entity: ActivityLocations): UpdateRequestBuilderV4<ActivityLocations> {
    return new UpdateRequestBuilderV4(ActivityLocations, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ActivityLocations`.
   * @param code Key property. See [[ActivityLocations.code]].
   * @returns A request builder for creating requests that delete an entity of type `ActivityLocations`.
   */
  delete(code: number): DeleteRequestBuilderV4<ActivityLocations>;
  /**
   * Returns a request builder for deleting an entity of type `ActivityLocations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ActivityLocations` by taking the entity as a parameter.
   */
  delete(entity: ActivityLocations): DeleteRequestBuilderV4<ActivityLocations>;
  delete(codeOrEntity: any): DeleteRequestBuilderV4<ActivityLocations> {
    return new DeleteRequestBuilderV4(ActivityLocations, codeOrEntity instanceof ActivityLocations ? codeOrEntity : { Code: codeOrEntity! });
  }
}
