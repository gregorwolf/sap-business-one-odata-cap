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
import { WarehouseLocations } from './WarehouseLocations';

/**
 * Request builder class for operations supported on the {@link WarehouseLocations} entity.
 */
export class WarehouseLocationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseLocations<T>, T> {
  /**
   * Returns a request builder for retrieving one `WarehouseLocations` entity based on its keys.
   * @param code Key property. See {@link WarehouseLocations.code}.
   * @returns A request builder for creating requests to retrieve one `WarehouseLocations` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<WarehouseLocations<T>, T> {
    return new GetByKeyRequestBuilder<WarehouseLocations<T>, T>(
      this.entityApi,
      { Code: code }
    );
  }

  /**
   * Returns a request builder for querying all `WarehouseLocations` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseLocations` entities.
   */
  getAll(): GetAllRequestBuilder<WarehouseLocations<T>, T> {
    return new GetAllRequestBuilder<WarehouseLocations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WarehouseLocations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseLocations`.
   */
  create(
    entity: WarehouseLocations<T>
  ): CreateRequestBuilder<WarehouseLocations<T>, T> {
    return new CreateRequestBuilder<WarehouseLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseLocations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseLocations`.
   */
  update(
    entity: WarehouseLocations<T>
  ): UpdateRequestBuilder<WarehouseLocations<T>, T> {
    return new UpdateRequestBuilder<WarehouseLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseLocations`.
   * @param code Key property. See {@link WarehouseLocations.code}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseLocations`.
   */
  delete(code: number): DeleteRequestBuilder<WarehouseLocations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseLocations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseLocations` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseLocations<T>
  ): DeleteRequestBuilder<WarehouseLocations<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<WarehouseLocations<T>, T> {
    return new DeleteRequestBuilder<WarehouseLocations<T>, T>(
      this.entityApi,
      codeOrEntity instanceof WarehouseLocations
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
