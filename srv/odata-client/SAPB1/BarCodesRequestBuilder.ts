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
import { BarCodes } from './BarCodes';

/**
 * Request builder class for operations supported on the {@link BarCodes} entity.
 */
export class BarCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BarCodes<T>, T> {
  /**
   * Returns a request builder for retrieving one `BarCodes` entity based on its keys.
   * @param absEntry Key property. See {@link BarCodes.absEntry}.
   * @returns A request builder for creating requests to retrieve one `BarCodes` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BarCodes<T>, T> {
    return new GetByKeyRequestBuilder<BarCodes<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `BarCodes` entities.
   * @returns A request builder for creating requests to retrieve all `BarCodes` entities.
   */
  getAll(): GetAllRequestBuilder<BarCodes<T>, T> {
    return new GetAllRequestBuilder<BarCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BarCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BarCodes`.
   */
  create(entity: BarCodes<T>): CreateRequestBuilder<BarCodes<T>, T> {
    return new CreateRequestBuilder<BarCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BarCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BarCodes`.
   */
  update(entity: BarCodes<T>): UpdateRequestBuilder<BarCodes<T>, T> {
    return new UpdateRequestBuilder<BarCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BarCodes`.
   * @param absEntry Key property. See {@link BarCodes.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `BarCodes`.
   */
  delete(absEntry: number): DeleteRequestBuilder<BarCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BarCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BarCodes` by taking the entity as a parameter.
   */
  delete(entity: BarCodes<T>): DeleteRequestBuilder<BarCodes<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<BarCodes<T>, T> {
    return new DeleteRequestBuilder<BarCodes<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof BarCodes
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
