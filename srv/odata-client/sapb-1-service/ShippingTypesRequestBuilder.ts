/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ShippingTypes } from './ShippingTypes';

/**
 * Request builder class for operations supported on the [[ShippingTypes]] entity.
 */
export class ShippingTypesRequestBuilder extends RequestBuilder<ShippingTypes> {
  /**
   * Returns a request builder for retrieving one `ShippingTypes` entity based on its keys.
   * @param code Key property. See [[ShippingTypes.code]].
   * @returns A request builder for creating requests to retrieve one `ShippingTypes` entity based on its keys.
   */
  getByKey(code: number): GetByKeyRequestBuilderV4<ShippingTypes> {
    return new GetByKeyRequestBuilderV4(ShippingTypes, { Code: code });
  }

  /**
   * Returns a request builder for querying all `ShippingTypes` entities.
   * @returns A request builder for creating requests to retrieve all `ShippingTypes` entities.
   */
  getAll(): GetAllRequestBuilderV4<ShippingTypes> {
    return new GetAllRequestBuilderV4(ShippingTypes);
  }

  /**
   * Returns a request builder for creating a `ShippingTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShippingTypes`.
   */
  create(entity: ShippingTypes): CreateRequestBuilderV4<ShippingTypes> {
    return new CreateRequestBuilderV4(ShippingTypes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ShippingTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShippingTypes`.
   */
  update(entity: ShippingTypes): UpdateRequestBuilderV4<ShippingTypes> {
    return new UpdateRequestBuilderV4(ShippingTypes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ShippingTypes`.
   * @param code Key property. See [[ShippingTypes.code]].
   * @returns A request builder for creating requests that delete an entity of type `ShippingTypes`.
   */
  delete(code: number): DeleteRequestBuilderV4<ShippingTypes>;
  /**
   * Returns a request builder for deleting an entity of type `ShippingTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShippingTypes` by taking the entity as a parameter.
   */
  delete(entity: ShippingTypes): DeleteRequestBuilderV4<ShippingTypes>;
  delete(codeOrEntity: any): DeleteRequestBuilderV4<ShippingTypes> {
    return new DeleteRequestBuilderV4(ShippingTypes, codeOrEntity instanceof ShippingTypes ? codeOrEntity : { Code: codeOrEntity! });
  }
}
