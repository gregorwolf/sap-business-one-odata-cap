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
import { PaymentRunExport } from './PaymentRunExport';

/**
 * Request builder class for operations supported on the {@link PaymentRunExport} entity.
 */
export class PaymentRunExportRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymentRunExport<T>, T> {
  /**
   * Returns a request builder for retrieving one `PaymentRunExport` entity based on its keys.
   * @param absoluteEntry Key property. See {@link PaymentRunExport.absoluteEntry}.
   * @returns A request builder for creating requests to retrieve one `PaymentRunExport` entity based on its keys.
   */
  getByKey(
    absoluteEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PaymentRunExport<T>, T> {
    return new GetByKeyRequestBuilder<PaymentRunExport<T>, T>(this.entityApi, {
      AbsoluteEntry: absoluteEntry
    });
  }

  /**
   * Returns a request builder for querying all `PaymentRunExport` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentRunExport` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentRunExport<T>, T> {
    return new GetAllRequestBuilder<PaymentRunExport<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PaymentRunExport` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentRunExport`.
   */
  create(
    entity: PaymentRunExport<T>
  ): CreateRequestBuilder<PaymentRunExport<T>, T> {
    return new CreateRequestBuilder<PaymentRunExport<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentRunExport`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentRunExport`.
   */
  update(
    entity: PaymentRunExport<T>
  ): UpdateRequestBuilder<PaymentRunExport<T>, T> {
    return new UpdateRequestBuilder<PaymentRunExport<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentRunExport`.
   * @param absoluteEntry Key property. See {@link PaymentRunExport.absoluteEntry}.
   * @returns A request builder for creating requests that delete an entity of type `PaymentRunExport`.
   */
  delete(absoluteEntry: number): DeleteRequestBuilder<PaymentRunExport<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentRunExport`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentRunExport` by taking the entity as a parameter.
   */
  delete(
    entity: PaymentRunExport<T>
  ): DeleteRequestBuilder<PaymentRunExport<T>, T>;
  delete(
    absoluteEntryOrEntity: any
  ): DeleteRequestBuilder<PaymentRunExport<T>, T> {
    return new DeleteRequestBuilder<PaymentRunExport<T>, T>(
      this.entityApi,
      absoluteEntryOrEntity instanceof PaymentRunExport
        ? absoluteEntryOrEntity
        : { AbsoluteEntry: absoluteEntryOrEntity! }
    );
  }
}
