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
import { PaymentBlocks } from './PaymentBlocks';

/**
 * Request builder class for operations supported on the {@link PaymentBlocks} entity.
 */
export class PaymentBlocksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymentBlocks<T>, T> {
  /**
   * Returns a request builder for retrieving one `PaymentBlocks` entity based on its keys.
   * @param absEntry Key property. See {@link PaymentBlocks.absEntry}.
   * @returns A request builder for creating requests to retrieve one `PaymentBlocks` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PaymentBlocks<T>, T> {
    return new GetByKeyRequestBuilder<PaymentBlocks<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `PaymentBlocks` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentBlocks` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentBlocks<T>, T> {
    return new GetAllRequestBuilder<PaymentBlocks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PaymentBlocks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentBlocks`.
   */
  create(entity: PaymentBlocks<T>): CreateRequestBuilder<PaymentBlocks<T>, T> {
    return new CreateRequestBuilder<PaymentBlocks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentBlocks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentBlocks`.
   */
  update(entity: PaymentBlocks<T>): UpdateRequestBuilder<PaymentBlocks<T>, T> {
    return new UpdateRequestBuilder<PaymentBlocks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentBlocks`.
   * @param absEntry Key property. See {@link PaymentBlocks.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `PaymentBlocks`.
   */
  delete(absEntry: number): DeleteRequestBuilder<PaymentBlocks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentBlocks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentBlocks` by taking the entity as a parameter.
   */
  delete(entity: PaymentBlocks<T>): DeleteRequestBuilder<PaymentBlocks<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<PaymentBlocks<T>, T> {
    return new DeleteRequestBuilder<PaymentBlocks<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof PaymentBlocks
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
