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
import { Dimensions } from './Dimensions';

/**
 * Request builder class for operations supported on the {@link Dimensions} entity.
 */
export class DimensionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Dimensions<T>, T> {
  /**
   * Returns a request builder for retrieving one `Dimensions` entity based on its keys.
   * @param dimensionCode Key property. See {@link Dimensions.dimensionCode}.
   * @returns A request builder for creating requests to retrieve one `Dimensions` entity based on its keys.
   */
  getByKey(
    dimensionCode: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Dimensions<T>, T> {
    return new GetByKeyRequestBuilder<Dimensions<T>, T>(this.entityApi, {
      DimensionCode: dimensionCode
    });
  }

  /**
   * Returns a request builder for querying all `Dimensions` entities.
   * @returns A request builder for creating requests to retrieve all `Dimensions` entities.
   */
  getAll(): GetAllRequestBuilder<Dimensions<T>, T> {
    return new GetAllRequestBuilder<Dimensions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Dimensions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Dimensions`.
   */
  create(entity: Dimensions<T>): CreateRequestBuilder<Dimensions<T>, T> {
    return new CreateRequestBuilder<Dimensions<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Dimensions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Dimensions`.
   */
  update(entity: Dimensions<T>): UpdateRequestBuilder<Dimensions<T>, T> {
    return new UpdateRequestBuilder<Dimensions<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Dimensions`.
   * @param dimensionCode Key property. See {@link Dimensions.dimensionCode}.
   * @returns A request builder for creating requests that delete an entity of type `Dimensions`.
   */
  delete(dimensionCode: number): DeleteRequestBuilder<Dimensions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Dimensions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Dimensions` by taking the entity as a parameter.
   */
  delete(entity: Dimensions<T>): DeleteRequestBuilder<Dimensions<T>, T>;
  delete(dimensionCodeOrEntity: any): DeleteRequestBuilder<Dimensions<T>, T> {
    return new DeleteRequestBuilder<Dimensions<T>, T>(
      this.entityApi,
      dimensionCodeOrEntity instanceof Dimensions
        ? dimensionCodeOrEntity
        : { DimensionCode: dimensionCodeOrEntity! }
    );
  }
}
