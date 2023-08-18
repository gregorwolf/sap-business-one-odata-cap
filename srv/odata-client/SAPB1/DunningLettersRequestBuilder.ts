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
import { DunningLetters } from './DunningLetters';

/**
 * Request builder class for operations supported on the {@link DunningLetters} entity.
 */
export class DunningLettersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DunningLetters<T>, T> {
  /**
   * Returns a request builder for retrieving one `DunningLetters` entity based on its keys.
   * @param rowNumber Key property. See {@link DunningLetters.rowNumber}.
   * @returns A request builder for creating requests to retrieve one `DunningLetters` entity based on its keys.
   */
  getByKey(
    rowNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<DunningLetters<T>, T> {
    return new GetByKeyRequestBuilder<DunningLetters<T>, T>(this.entityApi, {
      RowNumber: rowNumber
    });
  }

  /**
   * Returns a request builder for querying all `DunningLetters` entities.
   * @returns A request builder for creating requests to retrieve all `DunningLetters` entities.
   */
  getAll(): GetAllRequestBuilder<DunningLetters<T>, T> {
    return new GetAllRequestBuilder<DunningLetters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DunningLetters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DunningLetters`.
   */
  create(
    entity: DunningLetters<T>
  ): CreateRequestBuilder<DunningLetters<T>, T> {
    return new CreateRequestBuilder<DunningLetters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DunningLetters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DunningLetters`.
   */
  update(
    entity: DunningLetters<T>
  ): UpdateRequestBuilder<DunningLetters<T>, T> {
    return new UpdateRequestBuilder<DunningLetters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DunningLetters`.
   * @param rowNumber Key property. See {@link DunningLetters.rowNumber}.
   * @returns A request builder for creating requests that delete an entity of type `DunningLetters`.
   */
  delete(rowNumber: number): DeleteRequestBuilder<DunningLetters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DunningLetters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DunningLetters` by taking the entity as a parameter.
   */
  delete(entity: DunningLetters<T>): DeleteRequestBuilder<DunningLetters<T>, T>;
  delete(rowNumberOrEntity: any): DeleteRequestBuilder<DunningLetters<T>, T> {
    return new DeleteRequestBuilder<DunningLetters<T>, T>(
      this.entityApi,
      rowNumberOrEntity instanceof DunningLetters
        ? rowNumberOrEntity
        : { RowNumber: rowNumberOrEntity! }
    );
  }
}
