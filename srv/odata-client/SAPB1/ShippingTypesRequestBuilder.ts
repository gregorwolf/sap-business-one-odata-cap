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
import { ShippingTypes } from './ShippingTypes';

/**
 * Request builder class for operations supported on the {@link ShippingTypes} entity.
 */
export class ShippingTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShippingTypes<T>, T> {
  /**
   * Returns a request builder for retrieving one `ShippingTypes` entity based on its keys.
   * @param code Key property. See {@link ShippingTypes.code}.
   * @returns A request builder for creating requests to retrieve one `ShippingTypes` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ShippingTypes<T>, T> {
    return new GetByKeyRequestBuilder<ShippingTypes<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `ShippingTypes` entities.
   * @returns A request builder for creating requests to retrieve all `ShippingTypes` entities.
   */
  getAll(): GetAllRequestBuilder<ShippingTypes<T>, T> {
    return new GetAllRequestBuilder<ShippingTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ShippingTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShippingTypes`.
   */
  create(entity: ShippingTypes<T>): CreateRequestBuilder<ShippingTypes<T>, T> {
    return new CreateRequestBuilder<ShippingTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShippingTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShippingTypes`.
   */
  update(entity: ShippingTypes<T>): UpdateRequestBuilder<ShippingTypes<T>, T> {
    return new UpdateRequestBuilder<ShippingTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShippingTypes`.
   * @param code Key property. See {@link ShippingTypes.code}.
   * @returns A request builder for creating requests that delete an entity of type `ShippingTypes`.
   */
  delete(code: number): DeleteRequestBuilder<ShippingTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShippingTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShippingTypes` by taking the entity as a parameter.
   */
  delete(entity: ShippingTypes<T>): DeleteRequestBuilder<ShippingTypes<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<ShippingTypes<T>, T> {
    return new DeleteRequestBuilder<ShippingTypes<T>, T>(
      this.entityApi,
      codeOrEntity instanceof ShippingTypes
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
