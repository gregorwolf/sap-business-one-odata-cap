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
import { BrazilFuelIndexers } from './BrazilFuelIndexers';

/**
 * Request builder class for operations supported on the {@link BrazilFuelIndexers} entity.
 */
export class BrazilFuelIndexersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BrazilFuelIndexers<T>, T> {
  /**
   * Returns a request builder for retrieving one `BrazilFuelIndexers` entity based on its keys.
   * @param fuelId Key property. See {@link BrazilFuelIndexers.fuelId}.
   * @returns A request builder for creating requests to retrieve one `BrazilFuelIndexers` entity based on its keys.
   */
  getByKey(
    fuelId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BrazilFuelIndexers<T>, T> {
    return new GetByKeyRequestBuilder<BrazilFuelIndexers<T>, T>(
      this.entityApi,
      { FuelID: fuelId }
    );
  }

  /**
   * Returns a request builder for querying all `BrazilFuelIndexers` entities.
   * @returns A request builder for creating requests to retrieve all `BrazilFuelIndexers` entities.
   */
  getAll(): GetAllRequestBuilder<BrazilFuelIndexers<T>, T> {
    return new GetAllRequestBuilder<BrazilFuelIndexers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BrazilFuelIndexers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BrazilFuelIndexers`.
   */
  create(
    entity: BrazilFuelIndexers<T>
  ): CreateRequestBuilder<BrazilFuelIndexers<T>, T> {
    return new CreateRequestBuilder<BrazilFuelIndexers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BrazilFuelIndexers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BrazilFuelIndexers`.
   */
  update(
    entity: BrazilFuelIndexers<T>
  ): UpdateRequestBuilder<BrazilFuelIndexers<T>, T> {
    return new UpdateRequestBuilder<BrazilFuelIndexers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BrazilFuelIndexers`.
   * @param fuelId Key property. See {@link BrazilFuelIndexers.fuelId}.
   * @returns A request builder for creating requests that delete an entity of type `BrazilFuelIndexers`.
   */
  delete(fuelId: number): DeleteRequestBuilder<BrazilFuelIndexers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BrazilFuelIndexers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BrazilFuelIndexers` by taking the entity as a parameter.
   */
  delete(
    entity: BrazilFuelIndexers<T>
  ): DeleteRequestBuilder<BrazilFuelIndexers<T>, T>;
  delete(fuelIdOrEntity: any): DeleteRequestBuilder<BrazilFuelIndexers<T>, T> {
    return new DeleteRequestBuilder<BrazilFuelIndexers<T>, T>(
      this.entityApi,
      fuelIdOrEntity instanceof BrazilFuelIndexers
        ? fuelIdOrEntity
        : { FuelID: fuelIdOrEntity! }
    );
  }
}
