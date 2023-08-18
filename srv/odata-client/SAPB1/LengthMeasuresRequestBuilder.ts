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
import { LengthMeasures } from './LengthMeasures';

/**
 * Request builder class for operations supported on the {@link LengthMeasures} entity.
 */
export class LengthMeasuresRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LengthMeasures<T>, T> {
  /**
   * Returns a request builder for retrieving one `LengthMeasures` entity based on its keys.
   * @param unitCode Key property. See {@link LengthMeasures.unitCode}.
   * @returns A request builder for creating requests to retrieve one `LengthMeasures` entity based on its keys.
   */
  getByKey(
    unitCode: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<LengthMeasures<T>, T> {
    return new GetByKeyRequestBuilder<LengthMeasures<T>, T>(this.entityApi, {
      UnitCode: unitCode
    });
  }

  /**
   * Returns a request builder for querying all `LengthMeasures` entities.
   * @returns A request builder for creating requests to retrieve all `LengthMeasures` entities.
   */
  getAll(): GetAllRequestBuilder<LengthMeasures<T>, T> {
    return new GetAllRequestBuilder<LengthMeasures<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LengthMeasures` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LengthMeasures`.
   */
  create(
    entity: LengthMeasures<T>
  ): CreateRequestBuilder<LengthMeasures<T>, T> {
    return new CreateRequestBuilder<LengthMeasures<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LengthMeasures`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LengthMeasures`.
   */
  update(
    entity: LengthMeasures<T>
  ): UpdateRequestBuilder<LengthMeasures<T>, T> {
    return new UpdateRequestBuilder<LengthMeasures<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LengthMeasures`.
   * @param unitCode Key property. See {@link LengthMeasures.unitCode}.
   * @returns A request builder for creating requests that delete an entity of type `LengthMeasures`.
   */
  delete(unitCode: number): DeleteRequestBuilder<LengthMeasures<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LengthMeasures`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LengthMeasures` by taking the entity as a parameter.
   */
  delete(entity: LengthMeasures<T>): DeleteRequestBuilder<LengthMeasures<T>, T>;
  delete(unitCodeOrEntity: any): DeleteRequestBuilder<LengthMeasures<T>, T> {
    return new DeleteRequestBuilder<LengthMeasures<T>, T>(
      this.entityApi,
      unitCodeOrEntity instanceof LengthMeasures
        ? unitCodeOrEntity
        : { UnitCode: unitCodeOrEntity! }
    );
  }
}
