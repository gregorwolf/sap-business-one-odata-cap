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
import { WeightMeasures } from './WeightMeasures';

/**
 * Request builder class for operations supported on the {@link WeightMeasures} entity.
 */
export class WeightMeasuresRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WeightMeasures<T>, T> {
  /**
   * Returns a request builder for retrieving one `WeightMeasures` entity based on its keys.
   * @param unitCode Key property. See {@link WeightMeasures.unitCode}.
   * @returns A request builder for creating requests to retrieve one `WeightMeasures` entity based on its keys.
   */
  getByKey(
    unitCode: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<WeightMeasures<T>, T> {
    return new GetByKeyRequestBuilder<WeightMeasures<T>, T>(this.entityApi, {
      UnitCode: unitCode
    });
  }

  /**
   * Returns a request builder for querying all `WeightMeasures` entities.
   * @returns A request builder for creating requests to retrieve all `WeightMeasures` entities.
   */
  getAll(): GetAllRequestBuilder<WeightMeasures<T>, T> {
    return new GetAllRequestBuilder<WeightMeasures<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WeightMeasures` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WeightMeasures`.
   */
  create(
    entity: WeightMeasures<T>
  ): CreateRequestBuilder<WeightMeasures<T>, T> {
    return new CreateRequestBuilder<WeightMeasures<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WeightMeasures`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WeightMeasures`.
   */
  update(
    entity: WeightMeasures<T>
  ): UpdateRequestBuilder<WeightMeasures<T>, T> {
    return new UpdateRequestBuilder<WeightMeasures<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WeightMeasures`.
   * @param unitCode Key property. See {@link WeightMeasures.unitCode}.
   * @returns A request builder for creating requests that delete an entity of type `WeightMeasures`.
   */
  delete(unitCode: number): DeleteRequestBuilder<WeightMeasures<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WeightMeasures`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WeightMeasures` by taking the entity as a parameter.
   */
  delete(entity: WeightMeasures<T>): DeleteRequestBuilder<WeightMeasures<T>, T>;
  delete(unitCodeOrEntity: any): DeleteRequestBuilder<WeightMeasures<T>, T> {
    return new DeleteRequestBuilder<WeightMeasures<T>, T>(
      this.entityApi,
      unitCodeOrEntity instanceof WeightMeasures
        ? unitCodeOrEntity
        : { UnitCode: unitCodeOrEntity! }
    );
  }
}
