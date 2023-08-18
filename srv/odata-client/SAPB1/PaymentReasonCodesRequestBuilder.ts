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
import { PaymentReasonCodes } from './PaymentReasonCodes';

/**
 * Request builder class for operations supported on the {@link PaymentReasonCodes} entity.
 */
export class PaymentReasonCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymentReasonCodes<T>, T> {
  /**
   * Returns a request builder for retrieving one `PaymentReasonCodes` entity based on its keys.
   * @param code Key property. See {@link PaymentReasonCodes.code}.
   * @returns A request builder for creating requests to retrieve one `PaymentReasonCodes` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PaymentReasonCodes<T>, T> {
    return new GetByKeyRequestBuilder<PaymentReasonCodes<T>, T>(
      this.entityApi,
      { Code: code }
    );
  }

  /**
   * Returns a request builder for querying all `PaymentReasonCodes` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentReasonCodes` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentReasonCodes<T>, T> {
    return new GetAllRequestBuilder<PaymentReasonCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PaymentReasonCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentReasonCodes`.
   */
  create(
    entity: PaymentReasonCodes<T>
  ): CreateRequestBuilder<PaymentReasonCodes<T>, T> {
    return new CreateRequestBuilder<PaymentReasonCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentReasonCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentReasonCodes`.
   */
  update(
    entity: PaymentReasonCodes<T>
  ): UpdateRequestBuilder<PaymentReasonCodes<T>, T> {
    return new UpdateRequestBuilder<PaymentReasonCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentReasonCodes`.
   * @param code Key property. See {@link PaymentReasonCodes.code}.
   * @returns A request builder for creating requests that delete an entity of type `PaymentReasonCodes`.
   */
  delete(code: string): DeleteRequestBuilder<PaymentReasonCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentReasonCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentReasonCodes` by taking the entity as a parameter.
   */
  delete(
    entity: PaymentReasonCodes<T>
  ): DeleteRequestBuilder<PaymentReasonCodes<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<PaymentReasonCodes<T>, T> {
    return new DeleteRequestBuilder<PaymentReasonCodes<T>, T>(
      this.entityApi,
      codeOrEntity instanceof PaymentReasonCodes
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
