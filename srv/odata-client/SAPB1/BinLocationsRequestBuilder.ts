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
import { BinLocations } from './BinLocations';

/**
 * Request builder class for operations supported on the {@link BinLocations} entity.
 */
export class BinLocationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BinLocations<T>, T> {
  /**
   * Returns a request builder for retrieving one `BinLocations` entity based on its keys.
   * @param absEntry Key property. See {@link BinLocations.absEntry}.
   * @returns A request builder for creating requests to retrieve one `BinLocations` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BinLocations<T>, T> {
    return new GetByKeyRequestBuilder<BinLocations<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `BinLocations` entities.
   * @returns A request builder for creating requests to retrieve all `BinLocations` entities.
   */
  getAll(): GetAllRequestBuilder<BinLocations<T>, T> {
    return new GetAllRequestBuilder<BinLocations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BinLocations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BinLocations`.
   */
  create(entity: BinLocations<T>): CreateRequestBuilder<BinLocations<T>, T> {
    return new CreateRequestBuilder<BinLocations<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BinLocations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BinLocations`.
   */
  update(entity: BinLocations<T>): UpdateRequestBuilder<BinLocations<T>, T> {
    return new UpdateRequestBuilder<BinLocations<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BinLocations`.
   * @param absEntry Key property. See {@link BinLocations.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `BinLocations`.
   */
  delete(absEntry: number): DeleteRequestBuilder<BinLocations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BinLocations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BinLocations` by taking the entity as a parameter.
   */
  delete(entity: BinLocations<T>): DeleteRequestBuilder<BinLocations<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<BinLocations<T>, T> {
    return new DeleteRequestBuilder<BinLocations<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof BinLocations
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
