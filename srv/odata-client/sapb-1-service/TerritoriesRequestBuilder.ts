/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Territories } from './Territories';

/**
 * Request builder class for operations supported on the [[Territories]] entity.
 */
export class TerritoriesRequestBuilder extends RequestBuilder<Territories> {
  /**
   * Returns a request builder for retrieving one `Territories` entity based on its keys.
   * @param territoryId Key property. See [[Territories.territoryId]].
   * @returns A request builder for creating requests to retrieve one `Territories` entity based on its keys.
   */
  getByKey(territoryId: number): GetByKeyRequestBuilder<Territories> {
    return new GetByKeyRequestBuilder(Territories, { TerritoryID: territoryId });
  }

  /**
   * Returns a request builder for querying all `Territories` entities.
   * @returns A request builder for creating requests to retrieve all `Territories` entities.
   */
  getAll(): GetAllRequestBuilder<Territories> {
    return new GetAllRequestBuilder(Territories);
  }

  /**
   * Returns a request builder for creating a `Territories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Territories`.
   */
  create(entity: Territories): CreateRequestBuilder<Territories> {
    return new CreateRequestBuilder(Territories, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Territories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Territories`.
   */
  update(entity: Territories): UpdateRequestBuilder<Territories> {
    return new UpdateRequestBuilder(Territories, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Territories`.
   * @param territoryId Key property. See [[Territories.territoryId]].
   * @returns A request builder for creating requests that delete an entity of type `Territories`.
   */
  delete(territoryId: number): DeleteRequestBuilder<Territories>;
  /**
   * Returns a request builder for deleting an entity of type `Territories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Territories` by taking the entity as a parameter.
   */
  delete(entity: Territories): DeleteRequestBuilder<Territories>;
  delete(territoryIdOrEntity: any): DeleteRequestBuilder<Territories> {
    return new DeleteRequestBuilder(Territories, territoryIdOrEntity instanceof Territories ? territoryIdOrEntity : { TerritoryID: territoryIdOrEntity! });
  }
}
