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
import { ValueMapping } from './ValueMapping';

/**
 * Request builder class for operations supported on the {@link ValueMapping} entity.
 */
export class ValueMappingRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ValueMapping<T>, T> {
  /**
   * Returns a request builder for retrieving one `ValueMapping` entity based on its keys.
   * @param absEntry Key property. See {@link ValueMapping.absEntry}.
   * @returns A request builder for creating requests to retrieve one `ValueMapping` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ValueMapping<T>, T> {
    return new GetByKeyRequestBuilder<ValueMapping<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `ValueMapping` entities.
   * @returns A request builder for creating requests to retrieve all `ValueMapping` entities.
   */
  getAll(): GetAllRequestBuilder<ValueMapping<T>, T> {
    return new GetAllRequestBuilder<ValueMapping<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ValueMapping` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ValueMapping`.
   */
  create(entity: ValueMapping<T>): CreateRequestBuilder<ValueMapping<T>, T> {
    return new CreateRequestBuilder<ValueMapping<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ValueMapping`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ValueMapping`.
   */
  update(entity: ValueMapping<T>): UpdateRequestBuilder<ValueMapping<T>, T> {
    return new UpdateRequestBuilder<ValueMapping<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ValueMapping`.
   * @param absEntry Key property. See {@link ValueMapping.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `ValueMapping`.
   */
  delete(absEntry: number): DeleteRequestBuilder<ValueMapping<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ValueMapping`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ValueMapping` by taking the entity as a parameter.
   */
  delete(entity: ValueMapping<T>): DeleteRequestBuilder<ValueMapping<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<ValueMapping<T>, T> {
    return new DeleteRequestBuilder<ValueMapping<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof ValueMapping
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
