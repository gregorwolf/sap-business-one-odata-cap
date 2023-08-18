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
import { WarehouseSublevelCodes } from './WarehouseSublevelCodes';

/**
 * Request builder class for operations supported on the {@link WarehouseSublevelCodes} entity.
 */
export class WarehouseSublevelCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseSublevelCodes<T>, T> {
  /**
   * Returns a request builder for retrieving one `WarehouseSublevelCodes` entity based on its keys.
   * @param absEntry Key property. See {@link WarehouseSublevelCodes.absEntry}.
   * @returns A request builder for creating requests to retrieve one `WarehouseSublevelCodes` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<WarehouseSublevelCodes<T>, T> {
    return new GetByKeyRequestBuilder<WarehouseSublevelCodes<T>, T>(
      this.entityApi,
      { AbsEntry: absEntry }
    );
  }

  /**
   * Returns a request builder for querying all `WarehouseSublevelCodes` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseSublevelCodes` entities.
   */
  getAll(): GetAllRequestBuilder<WarehouseSublevelCodes<T>, T> {
    return new GetAllRequestBuilder<WarehouseSublevelCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WarehouseSublevelCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseSublevelCodes`.
   */
  create(
    entity: WarehouseSublevelCodes<T>
  ): CreateRequestBuilder<WarehouseSublevelCodes<T>, T> {
    return new CreateRequestBuilder<WarehouseSublevelCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseSublevelCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseSublevelCodes`.
   */
  update(
    entity: WarehouseSublevelCodes<T>
  ): UpdateRequestBuilder<WarehouseSublevelCodes<T>, T> {
    return new UpdateRequestBuilder<WarehouseSublevelCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseSublevelCodes`.
   * @param absEntry Key property. See {@link WarehouseSublevelCodes.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseSublevelCodes`.
   */
  delete(absEntry: number): DeleteRequestBuilder<WarehouseSublevelCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseSublevelCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseSublevelCodes` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseSublevelCodes<T>
  ): DeleteRequestBuilder<WarehouseSublevelCodes<T>, T>;
  delete(
    absEntryOrEntity: any
  ): DeleteRequestBuilder<WarehouseSublevelCodes<T>, T> {
    return new DeleteRequestBuilder<WarehouseSublevelCodes<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof WarehouseSublevelCodes
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
