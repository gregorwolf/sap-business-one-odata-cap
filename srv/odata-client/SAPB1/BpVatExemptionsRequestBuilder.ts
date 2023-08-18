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
import { BpVatExemptions } from './BpVatExemptions';

/**
 * Request builder class for operations supported on the {@link BpVatExemptions} entity.
 */
export class BpVatExemptionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BpVatExemptions<T>, T> {
  /**
   * Returns a request builder for retrieving one `BpVatExemptions` entity based on its keys.
   * @param absoluteEntry Key property. See {@link BpVatExemptions.absoluteEntry}.
   * @returns A request builder for creating requests to retrieve one `BpVatExemptions` entity based on its keys.
   */
  getByKey(
    absoluteEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BpVatExemptions<T>, T> {
    return new GetByKeyRequestBuilder<BpVatExemptions<T>, T>(this.entityApi, {
      AbsoluteEntry: absoluteEntry
    });
  }

  /**
   * Returns a request builder for querying all `BpVatExemptions` entities.
   * @returns A request builder for creating requests to retrieve all `BpVatExemptions` entities.
   */
  getAll(): GetAllRequestBuilder<BpVatExemptions<T>, T> {
    return new GetAllRequestBuilder<BpVatExemptions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BpVatExemptions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BpVatExemptions`.
   */
  create(
    entity: BpVatExemptions<T>
  ): CreateRequestBuilder<BpVatExemptions<T>, T> {
    return new CreateRequestBuilder<BpVatExemptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BpVatExemptions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BpVatExemptions`.
   */
  update(
    entity: BpVatExemptions<T>
  ): UpdateRequestBuilder<BpVatExemptions<T>, T> {
    return new UpdateRequestBuilder<BpVatExemptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BpVatExemptions`.
   * @param absoluteEntry Key property. See {@link BpVatExemptions.absoluteEntry}.
   * @returns A request builder for creating requests that delete an entity of type `BpVatExemptions`.
   */
  delete(absoluteEntry: number): DeleteRequestBuilder<BpVatExemptions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BpVatExemptions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BpVatExemptions` by taking the entity as a parameter.
   */
  delete(
    entity: BpVatExemptions<T>
  ): DeleteRequestBuilder<BpVatExemptions<T>, T>;
  delete(
    absoluteEntryOrEntity: any
  ): DeleteRequestBuilder<BpVatExemptions<T>, T> {
    return new DeleteRequestBuilder<BpVatExemptions<T>, T>(
      this.entityApi,
      absoluteEntryOrEntity instanceof BpVatExemptions
        ? absoluteEntryOrEntity
        : { AbsoluteEntry: absoluteEntryOrEntity! }
    );
  }
}
