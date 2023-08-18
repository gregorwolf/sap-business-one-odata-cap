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
import { Sections } from './Sections';

/**
 * Request builder class for operations supported on the {@link Sections} entity.
 */
export class SectionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Sections<T>, T> {
  /**
   * Returns a request builder for retrieving one `Sections` entity based on its keys.
   * @param absEntry Key property. See {@link Sections.absEntry}.
   * @returns A request builder for creating requests to retrieve one `Sections` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Sections<T>, T> {
    return new GetByKeyRequestBuilder<Sections<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `Sections` entities.
   * @returns A request builder for creating requests to retrieve all `Sections` entities.
   */
  getAll(): GetAllRequestBuilder<Sections<T>, T> {
    return new GetAllRequestBuilder<Sections<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Sections` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Sections`.
   */
  create(entity: Sections<T>): CreateRequestBuilder<Sections<T>, T> {
    return new CreateRequestBuilder<Sections<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Sections`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Sections`.
   */
  update(entity: Sections<T>): UpdateRequestBuilder<Sections<T>, T> {
    return new UpdateRequestBuilder<Sections<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Sections`.
   * @param absEntry Key property. See {@link Sections.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `Sections`.
   */
  delete(absEntry: number): DeleteRequestBuilder<Sections<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Sections`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Sections` by taking the entity as a parameter.
   */
  delete(entity: Sections<T>): DeleteRequestBuilder<Sections<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<Sections<T>, T> {
    return new DeleteRequestBuilder<Sections<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof Sections
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
