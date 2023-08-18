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
import { Cockpits } from './Cockpits';

/**
 * Request builder class for operations supported on the {@link Cockpits} entity.
 */
export class CockpitsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Cockpits<T>, T> {
  /**
   * Returns a request builder for retrieving one `Cockpits` entity based on its keys.
   * @param absEntry Key property. See {@link Cockpits.absEntry}.
   * @returns A request builder for creating requests to retrieve one `Cockpits` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Cockpits<T>, T> {
    return new GetByKeyRequestBuilder<Cockpits<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `Cockpits` entities.
   * @returns A request builder for creating requests to retrieve all `Cockpits` entities.
   */
  getAll(): GetAllRequestBuilder<Cockpits<T>, T> {
    return new GetAllRequestBuilder<Cockpits<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Cockpits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Cockpits`.
   */
  create(entity: Cockpits<T>): CreateRequestBuilder<Cockpits<T>, T> {
    return new CreateRequestBuilder<Cockpits<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Cockpits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Cockpits`.
   */
  update(entity: Cockpits<T>): UpdateRequestBuilder<Cockpits<T>, T> {
    return new UpdateRequestBuilder<Cockpits<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Cockpits`.
   * @param absEntry Key property. See {@link Cockpits.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `Cockpits`.
   */
  delete(absEntry: number): DeleteRequestBuilder<Cockpits<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Cockpits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Cockpits` by taking the entity as a parameter.
   */
  delete(entity: Cockpits<T>): DeleteRequestBuilder<Cockpits<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<Cockpits<T>, T> {
    return new DeleteRequestBuilder<Cockpits<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof Cockpits
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
