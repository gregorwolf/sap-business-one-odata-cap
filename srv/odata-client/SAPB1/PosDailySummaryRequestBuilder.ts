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
import { PosDailySummary } from './PosDailySummary';

/**
 * Request builder class for operations supported on the {@link PosDailySummary} entity.
 */
export class PosDailySummaryRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PosDailySummary<T>, T> {
  /**
   * Returns a request builder for retrieving one `PosDailySummary` entity based on its keys.
   * @param absEntry Key property. See {@link PosDailySummary.absEntry}.
   * @returns A request builder for creating requests to retrieve one `PosDailySummary` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PosDailySummary<T>, T> {
    return new GetByKeyRequestBuilder<PosDailySummary<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `PosDailySummary` entities.
   * @returns A request builder for creating requests to retrieve all `PosDailySummary` entities.
   */
  getAll(): GetAllRequestBuilder<PosDailySummary<T>, T> {
    return new GetAllRequestBuilder<PosDailySummary<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PosDailySummary` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PosDailySummary`.
   */
  create(
    entity: PosDailySummary<T>
  ): CreateRequestBuilder<PosDailySummary<T>, T> {
    return new CreateRequestBuilder<PosDailySummary<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PosDailySummary`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PosDailySummary`.
   */
  update(
    entity: PosDailySummary<T>
  ): UpdateRequestBuilder<PosDailySummary<T>, T> {
    return new UpdateRequestBuilder<PosDailySummary<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PosDailySummary`.
   * @param absEntry Key property. See {@link PosDailySummary.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `PosDailySummary`.
   */
  delete(absEntry: number): DeleteRequestBuilder<PosDailySummary<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PosDailySummary`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PosDailySummary` by taking the entity as a parameter.
   */
  delete(
    entity: PosDailySummary<T>
  ): DeleteRequestBuilder<PosDailySummary<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<PosDailySummary<T>, T> {
    return new DeleteRequestBuilder<PosDailySummary<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof PosDailySummary
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
