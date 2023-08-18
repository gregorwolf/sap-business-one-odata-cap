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
import { Teams } from './Teams';

/**
 * Request builder class for operations supported on the {@link Teams} entity.
 */
export class TeamsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Teams<T>, T> {
  /**
   * Returns a request builder for retrieving one `Teams` entity based on its keys.
   * @param teamId Key property. See {@link Teams.teamId}.
   * @returns A request builder for creating requests to retrieve one `Teams` entity based on its keys.
   */
  getByKey(
    teamId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Teams<T>, T> {
    return new GetByKeyRequestBuilder<Teams<T>, T>(this.entityApi, {
      TeamID: teamId
    });
  }

  /**
   * Returns a request builder for querying all `Teams` entities.
   * @returns A request builder for creating requests to retrieve all `Teams` entities.
   */
  getAll(): GetAllRequestBuilder<Teams<T>, T> {
    return new GetAllRequestBuilder<Teams<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Teams` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Teams`.
   */
  create(entity: Teams<T>): CreateRequestBuilder<Teams<T>, T> {
    return new CreateRequestBuilder<Teams<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Teams`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Teams`.
   */
  update(entity: Teams<T>): UpdateRequestBuilder<Teams<T>, T> {
    return new UpdateRequestBuilder<Teams<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Teams`.
   * @param teamId Key property. See {@link Teams.teamId}.
   * @returns A request builder for creating requests that delete an entity of type `Teams`.
   */
  delete(teamId: number): DeleteRequestBuilder<Teams<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Teams`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Teams` by taking the entity as a parameter.
   */
  delete(entity: Teams<T>): DeleteRequestBuilder<Teams<T>, T>;
  delete(teamIdOrEntity: any): DeleteRequestBuilder<Teams<T>, T> {
    return new DeleteRequestBuilder<Teams<T>, T>(
      this.entityApi,
      teamIdOrEntity instanceof Teams
        ? teamIdOrEntity
        : { TeamID: teamIdOrEntity! }
    );
  }
}
