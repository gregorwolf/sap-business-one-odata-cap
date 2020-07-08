/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
  getByKey(code: number): GetByKeyRequestBuilder<ActivityLocations> {
    return new GetByKeyRequestBuilder(ActivityLocations, { Code: code });
  }

  /**
   * Returns a request builder for querying all `ActivityLocations` entities.
   * @returns A request builder for creating requests to retrieve all `ActivityLocations` entities.
   */
  getAll(): GetAllRequestBuilder<ActivityLocations> {
    return new GetAllRequestBuilder(ActivityLocations);
  }

  /**
   * Returns a request builder for creating a `ActivityLocations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ActivityLocations`.
   */
  create(entity: ActivityLocations): CreateRequestBuilder<ActivityLocations> {
    return new CreateRequestBuilder(ActivityLocations, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ActivityLocations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ActivityLocations`.
   */
  update(entity: ActivityLocations): UpdateRequestBuilder<ActivityLocations> {
    return new UpdateRequestBuilder(ActivityLocations, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ActivityLocations`.
   * @param code Key property. See [[ActivityLocations.code]].
   * @returns A request builder for creating requests that delete an entity of type `ActivityLocations`.
   */
  delete(code: number): DeleteRequestBuilder<ActivityLocations>;
  /**
   * Returns a request builder for deleting an entity of type `ActivityLocations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ActivityLocations` by taking the entity as a parameter.
   */
  delete(entity: ActivityLocations): DeleteRequestBuilder<ActivityLocations>;
  delete(codeOrEntity: any): DeleteRequestBuilder<ActivityLocations> {
    return new DeleteRequestBuilder(ActivityLocations, codeOrEntity instanceof ActivityLocations ? codeOrEntity : { Code: codeOrEntity! });
  }
}
