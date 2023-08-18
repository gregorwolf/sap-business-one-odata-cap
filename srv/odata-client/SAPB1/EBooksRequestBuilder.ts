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
import { EBooks } from './EBooks';

/**
 * Request builder class for operations supported on the {@link EBooks} entity.
 */
export class EBooksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EBooks<T>, T> {
  /**
   * Returns a request builder for retrieving one `EBooks` entity based on its keys.
   * @param absEntry Key property. See {@link EBooks.absEntry}.
   * @returns A request builder for creating requests to retrieve one `EBooks` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<EBooks<T>, T> {
    return new GetByKeyRequestBuilder<EBooks<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `EBooks` entities.
   * @returns A request builder for creating requests to retrieve all `EBooks` entities.
   */
  getAll(): GetAllRequestBuilder<EBooks<T>, T> {
    return new GetAllRequestBuilder<EBooks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EBooks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EBooks`.
   */
  create(entity: EBooks<T>): CreateRequestBuilder<EBooks<T>, T> {
    return new CreateRequestBuilder<EBooks<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `EBooks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EBooks`.
   */
  update(entity: EBooks<T>): UpdateRequestBuilder<EBooks<T>, T> {
    return new UpdateRequestBuilder<EBooks<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EBooks`.
   * @param absEntry Key property. See {@link EBooks.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `EBooks`.
   */
  delete(absEntry: number): DeleteRequestBuilder<EBooks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EBooks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EBooks` by taking the entity as a parameter.
   */
  delete(entity: EBooks<T>): DeleteRequestBuilder<EBooks<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<EBooks<T>, T> {
    return new DeleteRequestBuilder<EBooks<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof EBooks
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
