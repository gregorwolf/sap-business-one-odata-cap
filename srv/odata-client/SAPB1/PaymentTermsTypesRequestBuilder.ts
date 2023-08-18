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
import { PaymentTermsTypes } from './PaymentTermsTypes';

/**
 * Request builder class for operations supported on the {@link PaymentTermsTypes} entity.
 */
export class PaymentTermsTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymentTermsTypes<T>, T> {
  /**
   * Returns a request builder for retrieving one `PaymentTermsTypes` entity based on its keys.
   * @param groupNumber Key property. See {@link PaymentTermsTypes.groupNumber}.
   * @returns A request builder for creating requests to retrieve one `PaymentTermsTypes` entity based on its keys.
   */
  getByKey(
    groupNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PaymentTermsTypes<T>, T> {
    return new GetByKeyRequestBuilder<PaymentTermsTypes<T>, T>(this.entityApi, {
      GroupNumber: groupNumber
    });
  }

  /**
   * Returns a request builder for querying all `PaymentTermsTypes` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentTermsTypes` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentTermsTypes<T>, T> {
    return new GetAllRequestBuilder<PaymentTermsTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PaymentTermsTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentTermsTypes`.
   */
  create(
    entity: PaymentTermsTypes<T>
  ): CreateRequestBuilder<PaymentTermsTypes<T>, T> {
    return new CreateRequestBuilder<PaymentTermsTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentTermsTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentTermsTypes`.
   */
  update(
    entity: PaymentTermsTypes<T>
  ): UpdateRequestBuilder<PaymentTermsTypes<T>, T> {
    return new UpdateRequestBuilder<PaymentTermsTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentTermsTypes`.
   * @param groupNumber Key property. See {@link PaymentTermsTypes.groupNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PaymentTermsTypes`.
   */
  delete(groupNumber: number): DeleteRequestBuilder<PaymentTermsTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentTermsTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentTermsTypes` by taking the entity as a parameter.
   */
  delete(
    entity: PaymentTermsTypes<T>
  ): DeleteRequestBuilder<PaymentTermsTypes<T>, T>;
  delete(
    groupNumberOrEntity: any
  ): DeleteRequestBuilder<PaymentTermsTypes<T>, T> {
    return new DeleteRequestBuilder<PaymentTermsTypes<T>, T>(
      this.entityApi,
      groupNumberOrEntity instanceof PaymentTermsTypes
        ? groupNumberOrEntity
        : { GroupNumber: groupNumberOrEntity! }
    );
  }
}
