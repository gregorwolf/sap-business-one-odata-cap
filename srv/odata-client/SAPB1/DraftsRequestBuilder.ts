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
import { Drafts } from './Drafts';

/**
 * Request builder class for operations supported on the {@link Drafts} entity.
 */
export class DraftsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Drafts<T>, T> {
  /**
   * Returns a request builder for retrieving one `Drafts` entity based on its keys.
   * @param docEntry Key property. See {@link Drafts.docEntry}.
   * @returns A request builder for creating requests to retrieve one `Drafts` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Drafts<T>, T> {
    return new GetByKeyRequestBuilder<Drafts<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `Drafts` entities.
   * @returns A request builder for creating requests to retrieve all `Drafts` entities.
   */
  getAll(): GetAllRequestBuilder<Drafts<T>, T> {
    return new GetAllRequestBuilder<Drafts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Drafts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Drafts`.
   */
  create(entity: Drafts<T>): CreateRequestBuilder<Drafts<T>, T> {
    return new CreateRequestBuilder<Drafts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Drafts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Drafts`.
   */
  update(entity: Drafts<T>): UpdateRequestBuilder<Drafts<T>, T> {
    return new UpdateRequestBuilder<Drafts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Drafts`.
   * @param docEntry Key property. See {@link Drafts.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `Drafts`.
   */
  delete(docEntry: number): DeleteRequestBuilder<Drafts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Drafts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Drafts` by taking the entity as a parameter.
   */
  delete(entity: Drafts<T>): DeleteRequestBuilder<Drafts<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<Drafts<T>, T> {
    return new DeleteRequestBuilder<Drafts<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof Drafts
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
