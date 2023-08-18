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
import { Territories } from './Territories';

/**
 * Request builder class for operations supported on the {@link Territories} entity.
 */
export class TerritoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Territories<T>, T> {
  /**
   * Returns a request builder for retrieving one `Territories` entity based on its keys.
   * @param territoryId Key property. See {@link Territories.territoryId}.
   * @returns A request builder for creating requests to retrieve one `Territories` entity based on its keys.
   */
  getByKey(
    territoryId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Territories<T>, T> {
    return new GetByKeyRequestBuilder<Territories<T>, T>(this.entityApi, {
      TerritoryID: territoryId
    });
  }

  /**
   * Returns a request builder for querying all `Territories` entities.
   * @returns A request builder for creating requests to retrieve all `Territories` entities.
   */
  getAll(): GetAllRequestBuilder<Territories<T>, T> {
    return new GetAllRequestBuilder<Territories<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Territories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Territories`.
   */
  create(entity: Territories<T>): CreateRequestBuilder<Territories<T>, T> {
    return new CreateRequestBuilder<Territories<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Territories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Territories`.
   */
  update(entity: Territories<T>): UpdateRequestBuilder<Territories<T>, T> {
    return new UpdateRequestBuilder<Territories<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Territories`.
   * @param territoryId Key property. See {@link Territories.territoryId}.
   * @returns A request builder for creating requests that delete an entity of type `Territories`.
   */
  delete(territoryId: number): DeleteRequestBuilder<Territories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Territories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Territories` by taking the entity as a parameter.
   */
  delete(entity: Territories<T>): DeleteRequestBuilder<Territories<T>, T>;
  delete(territoryIdOrEntity: any): DeleteRequestBuilder<Territories<T>, T> {
    return new DeleteRequestBuilder<Territories<T>, T>(
      this.entityApi,
      territoryIdOrEntity instanceof Territories
        ? territoryIdOrEntity
        : { TerritoryID: territoryIdOrEntity! }
    );
  }
}
