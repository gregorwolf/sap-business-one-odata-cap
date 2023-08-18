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
import { SalesForecast } from './SalesForecast';

/**
 * Request builder class for operations supported on the {@link SalesForecast} entity.
 */
export class SalesForecastRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesForecast<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesForecast` entity based on its keys.
   * @param numerator Key property. See {@link SalesForecast.numerator}.
   * @returns A request builder for creating requests to retrieve one `SalesForecast` entity based on its keys.
   */
  getByKey(
    numerator: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<SalesForecast<T>, T> {
    return new GetByKeyRequestBuilder<SalesForecast<T>, T>(this.entityApi, {
      Numerator: numerator
    });
  }

  /**
   * Returns a request builder for querying all `SalesForecast` entities.
   * @returns A request builder for creating requests to retrieve all `SalesForecast` entities.
   */
  getAll(): GetAllRequestBuilder<SalesForecast<T>, T> {
    return new GetAllRequestBuilder<SalesForecast<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesForecast` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesForecast`.
   */
  create(entity: SalesForecast<T>): CreateRequestBuilder<SalesForecast<T>, T> {
    return new CreateRequestBuilder<SalesForecast<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesForecast`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesForecast`.
   */
  update(entity: SalesForecast<T>): UpdateRequestBuilder<SalesForecast<T>, T> {
    return new UpdateRequestBuilder<SalesForecast<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesForecast`.
   * @param numerator Key property. See {@link SalesForecast.numerator}.
   * @returns A request builder for creating requests that delete an entity of type `SalesForecast`.
   */
  delete(numerator: number): DeleteRequestBuilder<SalesForecast<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesForecast`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesForecast` by taking the entity as a parameter.
   */
  delete(entity: SalesForecast<T>): DeleteRequestBuilder<SalesForecast<T>, T>;
  delete(numeratorOrEntity: any): DeleteRequestBuilder<SalesForecast<T>, T> {
    return new DeleteRequestBuilder<SalesForecast<T>, T>(
      this.entityApi,
      numeratorOrEntity instanceof SalesForecast
        ? numeratorOrEntity
        : { Numerator: numeratorOrEntity! }
    );
  }
}
