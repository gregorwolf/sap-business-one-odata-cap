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
import { AccountSegmentations } from './AccountSegmentations';

/**
 * Request builder class for operations supported on the {@link AccountSegmentations} entity.
 */
export class AccountSegmentationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AccountSegmentations<T>, T> {
  /**
   * Returns a request builder for retrieving one `AccountSegmentations` entity based on its keys.
   * @param numerator Key property. See {@link AccountSegmentations.numerator}.
   * @returns A request builder for creating requests to retrieve one `AccountSegmentations` entity based on its keys.
   */
  getByKey(
    numerator: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<AccountSegmentations<T>, T> {
    return new GetByKeyRequestBuilder<AccountSegmentations<T>, T>(
      this.entityApi,
      { Numerator: numerator }
    );
  }

  /**
   * Returns a request builder for querying all `AccountSegmentations` entities.
   * @returns A request builder for creating requests to retrieve all `AccountSegmentations` entities.
   */
  getAll(): GetAllRequestBuilder<AccountSegmentations<T>, T> {
    return new GetAllRequestBuilder<AccountSegmentations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AccountSegmentations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccountSegmentations`.
   */
  create(
    entity: AccountSegmentations<T>
  ): CreateRequestBuilder<AccountSegmentations<T>, T> {
    return new CreateRequestBuilder<AccountSegmentations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AccountSegmentations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccountSegmentations`.
   */
  update(
    entity: AccountSegmentations<T>
  ): UpdateRequestBuilder<AccountSegmentations<T>, T> {
    return new UpdateRequestBuilder<AccountSegmentations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AccountSegmentations`.
   * @param numerator Key property. See {@link AccountSegmentations.numerator}.
   * @returns A request builder for creating requests that delete an entity of type `AccountSegmentations`.
   */
  delete(numerator: number): DeleteRequestBuilder<AccountSegmentations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AccountSegmentations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccountSegmentations` by taking the entity as a parameter.
   */
  delete(
    entity: AccountSegmentations<T>
  ): DeleteRequestBuilder<AccountSegmentations<T>, T>;
  delete(
    numeratorOrEntity: any
  ): DeleteRequestBuilder<AccountSegmentations<T>, T> {
    return new DeleteRequestBuilder<AccountSegmentations<T>, T>(
      this.entityApi,
      numeratorOrEntity instanceof AccountSegmentations
        ? numeratorOrEntity
        : { Numerator: numeratorOrEntity! }
    );
  }
}
