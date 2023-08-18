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
import { PurchaseQuotations } from './PurchaseQuotations';

/**
 * Request builder class for operations supported on the {@link PurchaseQuotations} entity.
 */
export class PurchaseQuotationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseQuotations<T>, T> {
  /**
   * Returns a request builder for retrieving one `PurchaseQuotations` entity based on its keys.
   * @param docEntry Key property. See {@link PurchaseQuotations.docEntry}.
   * @returns A request builder for creating requests to retrieve one `PurchaseQuotations` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PurchaseQuotations<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseQuotations<T>, T>(
      this.entityApi,
      { DocEntry: docEntry }
    );
  }

  /**
   * Returns a request builder for querying all `PurchaseQuotations` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseQuotations` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseQuotations<T>, T> {
    return new GetAllRequestBuilder<PurchaseQuotations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchaseQuotations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseQuotations`.
   */
  create(
    entity: PurchaseQuotations<T>
  ): CreateRequestBuilder<PurchaseQuotations<T>, T> {
    return new CreateRequestBuilder<PurchaseQuotations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseQuotations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseQuotations`.
   */
  update(
    entity: PurchaseQuotations<T>
  ): UpdateRequestBuilder<PurchaseQuotations<T>, T> {
    return new UpdateRequestBuilder<PurchaseQuotations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseQuotations`.
   * @param docEntry Key property. See {@link PurchaseQuotations.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseQuotations`.
   */
  delete(docEntry: number): DeleteRequestBuilder<PurchaseQuotations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseQuotations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseQuotations` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseQuotations<T>
  ): DeleteRequestBuilder<PurchaseQuotations<T>, T>;
  delete(
    docEntryOrEntity: any
  ): DeleteRequestBuilder<PurchaseQuotations<T>, T> {
    return new DeleteRequestBuilder<PurchaseQuotations<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof PurchaseQuotations
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
