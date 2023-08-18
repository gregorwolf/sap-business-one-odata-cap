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
import { BinLocationFields } from './BinLocationFields';

/**
 * Request builder class for operations supported on the {@link BinLocationFields} entity.
 */
export class BinLocationFieldsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BinLocationFields<T>, T> {
  /**
   * Returns a request builder for retrieving one `BinLocationFields` entity based on its keys.
   * @param absEntry Key property. See {@link BinLocationFields.absEntry}.
   * @returns A request builder for creating requests to retrieve one `BinLocationFields` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BinLocationFields<T>, T> {
    return new GetByKeyRequestBuilder<BinLocationFields<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `BinLocationFields` entities.
   * @returns A request builder for creating requests to retrieve all `BinLocationFields` entities.
   */
  getAll(): GetAllRequestBuilder<BinLocationFields<T>, T> {
    return new GetAllRequestBuilder<BinLocationFields<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BinLocationFields` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BinLocationFields`.
   */
  create(
    entity: BinLocationFields<T>
  ): CreateRequestBuilder<BinLocationFields<T>, T> {
    return new CreateRequestBuilder<BinLocationFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BinLocationFields`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BinLocationFields`.
   */
  update(
    entity: BinLocationFields<T>
  ): UpdateRequestBuilder<BinLocationFields<T>, T> {
    return new UpdateRequestBuilder<BinLocationFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BinLocationFields`.
   * @param absEntry Key property. See {@link BinLocationFields.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `BinLocationFields`.
   */
  delete(absEntry: number): DeleteRequestBuilder<BinLocationFields<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BinLocationFields`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BinLocationFields` by taking the entity as a parameter.
   */
  delete(
    entity: BinLocationFields<T>
  ): DeleteRequestBuilder<BinLocationFields<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<BinLocationFields<T>, T> {
    return new DeleteRequestBuilder<BinLocationFields<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof BinLocationFields
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
