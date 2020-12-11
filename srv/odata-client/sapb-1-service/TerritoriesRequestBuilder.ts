/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(territoryId: number): GetByKeyRequestBuilderV4<Territories> {
    return new GetByKeyRequestBuilderV4(Territories, { TerritoryID: territoryId });
  }

  /**
   * Returns a request builder for querying all `Territories` entities.
   * @returns A request builder for creating requests to retrieve all `Territories` entities.
   */
  getAll(): GetAllRequestBuilderV4<Territories> {
    return new GetAllRequestBuilderV4(Territories);
  }

  /**
   * Returns a request builder for creating a `Territories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Territories`.
   */
  create(entity: Territories): CreateRequestBuilderV4<Territories> {
    return new CreateRequestBuilderV4(Territories, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Territories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Territories`.
   */
  update(entity: Territories): UpdateRequestBuilderV4<Territories> {
    return new UpdateRequestBuilderV4(Territories, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Territories`.
   * @param territoryId Key property. See [[Territories.territoryId]].
   * @returns A request builder for creating requests that delete an entity of type `Territories`.
   */
  delete(territoryId: number): DeleteRequestBuilderV4<Territories>;
  /**
   * Returns a request builder for deleting an entity of type `Territories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Territories` by taking the entity as a parameter.
   */
  delete(entity: Territories): DeleteRequestBuilderV4<Territories>;
  delete(territoryIdOrEntity: any): DeleteRequestBuilderV4<Territories> {
    return new DeleteRequestBuilderV4(Territories, territoryIdOrEntity instanceof Territories ? territoryIdOrEntity : { TerritoryID: territoryIdOrEntity! });
  }
}
