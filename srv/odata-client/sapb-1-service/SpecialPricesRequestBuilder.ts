/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { SpecialPrices } from './SpecialPrices';

/**
 * Request builder class for operations supported on the [[SpecialPrices]] entity.
 */
export class SpecialPricesRequestBuilder extends RequestBuilder<SpecialPrices> {
  /**
   * Returns a request builder for retrieving one `SpecialPrices` entity based on its keys.
   * @param itemCode Key property. See [[SpecialPrices.itemCode]].
   * @param cardCode Key property. See [[SpecialPrices.cardCode]].
   * @returns A request builder for creating requests to retrieve one `SpecialPrices` entity based on its keys.
   */
  getByKey(itemCode: string, cardCode: string): GetByKeyRequestBuilderV4<SpecialPrices> {
    return new GetByKeyRequestBuilderV4(SpecialPrices, {
      ItemCode: itemCode,
      CardCode: cardCode
    });
  }

  /**
   * Returns a request builder for querying all `SpecialPrices` entities.
   * @returns A request builder for creating requests to retrieve all `SpecialPrices` entities.
   */
  getAll(): GetAllRequestBuilderV4<SpecialPrices> {
    return new GetAllRequestBuilderV4(SpecialPrices);
  }

  /**
   * Returns a request builder for creating a `SpecialPrices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SpecialPrices`.
   */
  create(entity: SpecialPrices): CreateRequestBuilderV4<SpecialPrices> {
    return new CreateRequestBuilderV4(SpecialPrices, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SpecialPrices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SpecialPrices`.
   */
  update(entity: SpecialPrices): UpdateRequestBuilderV4<SpecialPrices> {
    return new UpdateRequestBuilderV4(SpecialPrices, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SpecialPrices`.
   * @param itemCode Key property. See [[SpecialPrices.itemCode]].
   * @param cardCode Key property. See [[SpecialPrices.cardCode]].
   * @returns A request builder for creating requests that delete an entity of type `SpecialPrices`.
   */
  delete(itemCode: string, cardCode: string): DeleteRequestBuilderV4<SpecialPrices>;
  /**
   * Returns a request builder for deleting an entity of type `SpecialPrices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SpecialPrices` by taking the entity as a parameter.
   */
  delete(entity: SpecialPrices): DeleteRequestBuilderV4<SpecialPrices>;
  delete(itemCodeOrEntity: any, cardCode?: string): DeleteRequestBuilderV4<SpecialPrices> {
    return new DeleteRequestBuilderV4(SpecialPrices, itemCodeOrEntity instanceof SpecialPrices ? itemCodeOrEntity : {
      ItemCode: itemCodeOrEntity!,
      CardCode: cardCode!
    });
  }
}
