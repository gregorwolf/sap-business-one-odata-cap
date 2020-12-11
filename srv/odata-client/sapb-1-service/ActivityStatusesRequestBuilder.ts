/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ActivityStatuses } from './ActivityStatuses';

/**
 * Request builder class for operations supported on the [[ActivityStatuses]] entity.
 */
export class ActivityStatusesRequestBuilder extends RequestBuilder<ActivityStatuses> {
  /**
   * Returns a request builder for retrieving one `ActivityStatuses` entity based on its keys.
   * @param statusId Key property. See [[ActivityStatuses.statusId]].
   * @returns A request builder for creating requests to retrieve one `ActivityStatuses` entity based on its keys.
   */
  getByKey(statusId: number): GetByKeyRequestBuilderV4<ActivityStatuses> {
    return new GetByKeyRequestBuilderV4(ActivityStatuses, { StatusId: statusId });
  }

  /**
   * Returns a request builder for querying all `ActivityStatuses` entities.
   * @returns A request builder for creating requests to retrieve all `ActivityStatuses` entities.
   */
  getAll(): GetAllRequestBuilderV4<ActivityStatuses> {
    return new GetAllRequestBuilderV4(ActivityStatuses);
  }

  /**
   * Returns a request builder for creating a `ActivityStatuses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ActivityStatuses`.
   */
  create(entity: ActivityStatuses): CreateRequestBuilderV4<ActivityStatuses> {
    return new CreateRequestBuilderV4(ActivityStatuses, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ActivityStatuses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ActivityStatuses`.
   */
  update(entity: ActivityStatuses): UpdateRequestBuilderV4<ActivityStatuses> {
    return new UpdateRequestBuilderV4(ActivityStatuses, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ActivityStatuses`.
   * @param statusId Key property. See [[ActivityStatuses.statusId]].
   * @returns A request builder for creating requests that delete an entity of type `ActivityStatuses`.
   */
  delete(statusId: number): DeleteRequestBuilderV4<ActivityStatuses>;
  /**
   * Returns a request builder for deleting an entity of type `ActivityStatuses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ActivityStatuses` by taking the entity as a parameter.
   */
  delete(entity: ActivityStatuses): DeleteRequestBuilderV4<ActivityStatuses>;
  delete(statusIdOrEntity: any): DeleteRequestBuilderV4<ActivityStatuses> {
    return new DeleteRequestBuilderV4(ActivityStatuses, statusIdOrEntity instanceof ActivityStatuses ? statusIdOrEntity : { StatusId: statusIdOrEntity! });
  }
}
