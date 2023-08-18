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
import { Quotations } from './Quotations';

/**
 * Request builder class for operations supported on the {@link Quotations} entity.
 */
export class QuotationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Quotations<T>, T> {
  /**
   * Returns a request builder for retrieving one `Quotations` entity based on its keys.
   * @param docEntry Key property. See {@link Quotations.docEntry}.
   * @returns A request builder for creating requests to retrieve one `Quotations` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Quotations<T>, T> {
    return new GetByKeyRequestBuilder<Quotations<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `Quotations` entities.
   * @returns A request builder for creating requests to retrieve all `Quotations` entities.
   */
  getAll(): GetAllRequestBuilder<Quotations<T>, T> {
    return new GetAllRequestBuilder<Quotations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Quotations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Quotations`.
   */
  create(entity: Quotations<T>): CreateRequestBuilder<Quotations<T>, T> {
    return new CreateRequestBuilder<Quotations<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Quotations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Quotations`.
   */
  update(entity: Quotations<T>): UpdateRequestBuilder<Quotations<T>, T> {
    return new UpdateRequestBuilder<Quotations<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Quotations`.
   * @param docEntry Key property. See {@link Quotations.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `Quotations`.
   */
  delete(docEntry: number): DeleteRequestBuilder<Quotations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Quotations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Quotations` by taking the entity as a parameter.
   */
  delete(entity: Quotations<T>): DeleteRequestBuilder<Quotations<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<Quotations<T>, T> {
    return new DeleteRequestBuilder<Quotations<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof Quotations
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
