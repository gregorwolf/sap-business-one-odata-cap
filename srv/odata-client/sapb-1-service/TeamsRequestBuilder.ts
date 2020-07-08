/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Teams } from './Teams';

/**
 * Request builder class for operations supported on the [[Teams]] entity.
 */
export class TeamsRequestBuilder extends RequestBuilder<Teams> {
  /**
   * Returns a request builder for retrieving one `Teams` entity based on its keys.
   * @param teamId Key property. See [[Teams.teamId]].
   * @returns A request builder for creating requests to retrieve one `Teams` entity based on its keys.
   */
  getByKey(teamId: number): GetByKeyRequestBuilder<Teams> {
    return new GetByKeyRequestBuilder(Teams, { TeamID: teamId });
  }

  /**
   * Returns a request builder for querying all `Teams` entities.
   * @returns A request builder for creating requests to retrieve all `Teams` entities.
   */
  getAll(): GetAllRequestBuilder<Teams> {
    return new GetAllRequestBuilder(Teams);
  }

  /**
   * Returns a request builder for creating a `Teams` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Teams`.
   */
  create(entity: Teams): CreateRequestBuilder<Teams> {
    return new CreateRequestBuilder(Teams, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Teams`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Teams`.
   */
  update(entity: Teams): UpdateRequestBuilder<Teams> {
    return new UpdateRequestBuilder(Teams, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Teams`.
   * @param teamId Key property. See [[Teams.teamId]].
   * @returns A request builder for creating requests that delete an entity of type `Teams`.
   */
  delete(teamId: number): DeleteRequestBuilder<Teams>;
  /**
   * Returns a request builder for deleting an entity of type `Teams`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Teams` by taking the entity as a parameter.
   */
  delete(entity: Teams): DeleteRequestBuilder<Teams>;
  delete(teamIdOrEntity: any): DeleteRequestBuilder<Teams> {
    return new DeleteRequestBuilder(Teams, teamIdOrEntity instanceof Teams ? teamIdOrEntity : { TeamID: teamIdOrEntity! });
  }
}
