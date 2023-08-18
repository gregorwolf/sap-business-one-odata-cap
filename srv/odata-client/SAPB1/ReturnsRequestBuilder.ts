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
import { Returns } from './Returns';

/**
 * Request builder class for operations supported on the {@link Returns} entity.
 */
export class ReturnsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Returns<T>, T> {
  /**
   * Returns a request builder for retrieving one `Returns` entity based on its keys.
   * @param docEntry Key property. See {@link Returns.docEntry}.
   * @returns A request builder for creating requests to retrieve one `Returns` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Returns<T>, T> {
    return new GetByKeyRequestBuilder<Returns<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `Returns` entities.
   * @returns A request builder for creating requests to retrieve all `Returns` entities.
   */
  getAll(): GetAllRequestBuilder<Returns<T>, T> {
    return new GetAllRequestBuilder<Returns<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Returns` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Returns`.
   */
  create(entity: Returns<T>): CreateRequestBuilder<Returns<T>, T> {
    return new CreateRequestBuilder<Returns<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Returns`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Returns`.
   */
  update(entity: Returns<T>): UpdateRequestBuilder<Returns<T>, T> {
    return new UpdateRequestBuilder<Returns<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Returns`.
   * @param docEntry Key property. See {@link Returns.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `Returns`.
   */
  delete(docEntry: number): DeleteRequestBuilder<Returns<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Returns`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Returns` by taking the entity as a parameter.
   */
  delete(entity: Returns<T>): DeleteRequestBuilder<Returns<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<Returns<T>, T> {
    return new DeleteRequestBuilder<Returns<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof Returns
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
