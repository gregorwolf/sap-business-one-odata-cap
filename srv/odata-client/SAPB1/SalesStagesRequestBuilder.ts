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
import { SalesStages } from './SalesStages';

/**
 * Request builder class for operations supported on the {@link SalesStages} entity.
 */
export class SalesStagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesStages<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesStages` entity based on its keys.
   * @param sequenceNo Key property. See {@link SalesStages.sequenceNo}.
   * @returns A request builder for creating requests to retrieve one `SalesStages` entity based on its keys.
   */
  getByKey(
    sequenceNo: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<SalesStages<T>, T> {
    return new GetByKeyRequestBuilder<SalesStages<T>, T>(this.entityApi, {
      SequenceNo: sequenceNo
    });
  }

  /**
   * Returns a request builder for querying all `SalesStages` entities.
   * @returns A request builder for creating requests to retrieve all `SalesStages` entities.
   */
  getAll(): GetAllRequestBuilder<SalesStages<T>, T> {
    return new GetAllRequestBuilder<SalesStages<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesStages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesStages`.
   */
  create(entity: SalesStages<T>): CreateRequestBuilder<SalesStages<T>, T> {
    return new CreateRequestBuilder<SalesStages<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SalesStages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesStages`.
   */
  update(entity: SalesStages<T>): UpdateRequestBuilder<SalesStages<T>, T> {
    return new UpdateRequestBuilder<SalesStages<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesStages`.
   * @param sequenceNo Key property. See {@link SalesStages.sequenceNo}.
   * @returns A request builder for creating requests that delete an entity of type `SalesStages`.
   */
  delete(sequenceNo: number): DeleteRequestBuilder<SalesStages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesStages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesStages` by taking the entity as a parameter.
   */
  delete(entity: SalesStages<T>): DeleteRequestBuilder<SalesStages<T>, T>;
  delete(sequenceNoOrEntity: any): DeleteRequestBuilder<SalesStages<T>, T> {
    return new DeleteRequestBuilder<SalesStages<T>, T>(
      this.entityApi,
      sequenceNoOrEntity instanceof SalesStages
        ? sequenceNoOrEntity
        : { SequenceNo: sequenceNoOrEntity! }
    );
  }
}
