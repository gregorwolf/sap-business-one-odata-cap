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
import { BinLocationAttributes } from './BinLocationAttributes';

/**
 * Request builder class for operations supported on the {@link BinLocationAttributes} entity.
 */
export class BinLocationAttributesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BinLocationAttributes<T>, T> {
  /**
   * Returns a request builder for retrieving one `BinLocationAttributes` entity based on its keys.
   * @param absEntry Key property. See {@link BinLocationAttributes.absEntry}.
   * @returns A request builder for creating requests to retrieve one `BinLocationAttributes` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BinLocationAttributes<T>, T> {
    return new GetByKeyRequestBuilder<BinLocationAttributes<T>, T>(
      this.entityApi,
      { AbsEntry: absEntry }
    );
  }

  /**
   * Returns a request builder for querying all `BinLocationAttributes` entities.
   * @returns A request builder for creating requests to retrieve all `BinLocationAttributes` entities.
   */
  getAll(): GetAllRequestBuilder<BinLocationAttributes<T>, T> {
    return new GetAllRequestBuilder<BinLocationAttributes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BinLocationAttributes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BinLocationAttributes`.
   */
  create(
    entity: BinLocationAttributes<T>
  ): CreateRequestBuilder<BinLocationAttributes<T>, T> {
    return new CreateRequestBuilder<BinLocationAttributes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BinLocationAttributes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BinLocationAttributes`.
   */
  update(
    entity: BinLocationAttributes<T>
  ): UpdateRequestBuilder<BinLocationAttributes<T>, T> {
    return new UpdateRequestBuilder<BinLocationAttributes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BinLocationAttributes`.
   * @param absEntry Key property. See {@link BinLocationAttributes.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `BinLocationAttributes`.
   */
  delete(absEntry: number): DeleteRequestBuilder<BinLocationAttributes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BinLocationAttributes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BinLocationAttributes` by taking the entity as a parameter.
   */
  delete(
    entity: BinLocationAttributes<T>
  ): DeleteRequestBuilder<BinLocationAttributes<T>, T>;
  delete(
    absEntryOrEntity: any
  ): DeleteRequestBuilder<BinLocationAttributes<T>, T> {
    return new DeleteRequestBuilder<BinLocationAttributes<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof BinLocationAttributes
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
