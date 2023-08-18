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
import { OccurrenceCodes } from './OccurrenceCodes';

/**
 * Request builder class for operations supported on the {@link OccurrenceCodes} entity.
 */
export class OccurrenceCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OccurrenceCodes<T>, T> {
  /**
   * Returns a request builder for retrieving one `OccurrenceCodes` entity based on its keys.
   * @param absEntry Key property. See {@link OccurrenceCodes.absEntry}.
   * @returns A request builder for creating requests to retrieve one `OccurrenceCodes` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<OccurrenceCodes<T>, T> {
    return new GetByKeyRequestBuilder<OccurrenceCodes<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `OccurrenceCodes` entities.
   * @returns A request builder for creating requests to retrieve all `OccurrenceCodes` entities.
   */
  getAll(): GetAllRequestBuilder<OccurrenceCodes<T>, T> {
    return new GetAllRequestBuilder<OccurrenceCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `OccurrenceCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OccurrenceCodes`.
   */
  create(
    entity: OccurrenceCodes<T>
  ): CreateRequestBuilder<OccurrenceCodes<T>, T> {
    return new CreateRequestBuilder<OccurrenceCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OccurrenceCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OccurrenceCodes`.
   */
  update(
    entity: OccurrenceCodes<T>
  ): UpdateRequestBuilder<OccurrenceCodes<T>, T> {
    return new UpdateRequestBuilder<OccurrenceCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OccurrenceCodes`.
   * @param absEntry Key property. See {@link OccurrenceCodes.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `OccurrenceCodes`.
   */
  delete(absEntry: number): DeleteRequestBuilder<OccurrenceCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OccurrenceCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OccurrenceCodes` by taking the entity as a parameter.
   */
  delete(
    entity: OccurrenceCodes<T>
  ): DeleteRequestBuilder<OccurrenceCodes<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<OccurrenceCodes<T>, T> {
    return new DeleteRequestBuilder<OccurrenceCodes<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof OccurrenceCodes
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
