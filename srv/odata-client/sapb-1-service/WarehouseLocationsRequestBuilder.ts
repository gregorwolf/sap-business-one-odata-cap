/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { WarehouseLocations } from './WarehouseLocations';

/**
 * Request builder class for operations supported on the [[WarehouseLocations]] entity.
 */
export class WarehouseLocationsRequestBuilder extends RequestBuilder<WarehouseLocations> {
  /**
   * Returns a request builder for retrieving one `WarehouseLocations` entity based on its keys.
   * @param code Key property. See [[WarehouseLocations.code]].
   * @returns A request builder for creating requests to retrieve one `WarehouseLocations` entity based on its keys.
   */
  getByKey(code: number): GetByKeyRequestBuilder<WarehouseLocations> {
    return new GetByKeyRequestBuilder(WarehouseLocations, { Code: code });
  }

  /**
   * Returns a request builder for querying all `WarehouseLocations` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseLocations` entities.
   */
  getAll(): GetAllRequestBuilder<WarehouseLocations> {
    return new GetAllRequestBuilder(WarehouseLocations);
  }

  /**
   * Returns a request builder for creating a `WarehouseLocations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseLocations`.
   */
  create(entity: WarehouseLocations): CreateRequestBuilder<WarehouseLocations> {
    return new CreateRequestBuilder(WarehouseLocations, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseLocations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseLocations`.
   */
  update(entity: WarehouseLocations): UpdateRequestBuilder<WarehouseLocations> {
    return new UpdateRequestBuilder(WarehouseLocations, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseLocations`.
   * @param code Key property. See [[WarehouseLocations.code]].
   * @returns A request builder for creating requests that delete an entity of type `WarehouseLocations`.
   */
  delete(code: number): DeleteRequestBuilder<WarehouseLocations>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseLocations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseLocations` by taking the entity as a parameter.
   */
  delete(entity: WarehouseLocations): DeleteRequestBuilder<WarehouseLocations>;
  delete(codeOrEntity: any): DeleteRequestBuilder<WarehouseLocations> {
    return new DeleteRequestBuilder(WarehouseLocations, codeOrEntity instanceof WarehouseLocations ? codeOrEntity : { Code: codeOrEntity! });
  }
}
