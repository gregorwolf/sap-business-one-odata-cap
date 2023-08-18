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
import { PaymentDrafts } from './PaymentDrafts';

/**
 * Request builder class for operations supported on the {@link PaymentDrafts} entity.
 */
export class PaymentDraftsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymentDrafts<T>, T> {
  /**
   * Returns a request builder for retrieving one `PaymentDrafts` entity based on its keys.
   * @param docEntry Key property. See {@link PaymentDrafts.docEntry}.
   * @returns A request builder for creating requests to retrieve one `PaymentDrafts` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PaymentDrafts<T>, T> {
    return new GetByKeyRequestBuilder<PaymentDrafts<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `PaymentDrafts` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentDrafts` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentDrafts<T>, T> {
    return new GetAllRequestBuilder<PaymentDrafts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PaymentDrafts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentDrafts`.
   */
  create(entity: PaymentDrafts<T>): CreateRequestBuilder<PaymentDrafts<T>, T> {
    return new CreateRequestBuilder<PaymentDrafts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentDrafts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentDrafts`.
   */
  update(entity: PaymentDrafts<T>): UpdateRequestBuilder<PaymentDrafts<T>, T> {
    return new UpdateRequestBuilder<PaymentDrafts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentDrafts`.
   * @param docEntry Key property. See {@link PaymentDrafts.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `PaymentDrafts`.
   */
  delete(docEntry: number): DeleteRequestBuilder<PaymentDrafts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentDrafts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentDrafts` by taking the entity as a parameter.
   */
  delete(entity: PaymentDrafts<T>): DeleteRequestBuilder<PaymentDrafts<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<PaymentDrafts<T>, T> {
    return new DeleteRequestBuilder<PaymentDrafts<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof PaymentDrafts
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
