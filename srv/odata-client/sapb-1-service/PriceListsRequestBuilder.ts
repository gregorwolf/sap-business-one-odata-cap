/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { PriceLists } from './PriceLists';

/**
 * Request builder class for operations supported on the [[PriceLists]] entity.
 */
export class PriceListsRequestBuilder extends RequestBuilder<PriceLists> {
  /**
   * Returns a request builder for retrieving one `PriceLists` entity based on its keys.
   * @param priceListNo Key property. See [[PriceLists.priceListNo]].
   * @returns A request builder for creating requests to retrieve one `PriceLists` entity based on its keys.
   */
  getByKey(priceListNo: number): GetByKeyRequestBuilderV4<PriceLists> {
    return new GetByKeyRequestBuilderV4(PriceLists, { PriceListNo: priceListNo });
  }

  /**
   * Returns a request builder for querying all `PriceLists` entities.
   * @returns A request builder for creating requests to retrieve all `PriceLists` entities.
   */
  getAll(): GetAllRequestBuilderV4<PriceLists> {
    return new GetAllRequestBuilderV4(PriceLists);
  }

  /**
   * Returns a request builder for creating a `PriceLists` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PriceLists`.
   */
  create(entity: PriceLists): CreateRequestBuilderV4<PriceLists> {
    return new CreateRequestBuilderV4(PriceLists, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PriceLists`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PriceLists`.
   */
  update(entity: PriceLists): UpdateRequestBuilderV4<PriceLists> {
    return new UpdateRequestBuilderV4(PriceLists, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PriceLists`.
   * @param priceListNo Key property. See [[PriceLists.priceListNo]].
   * @returns A request builder for creating requests that delete an entity of type `PriceLists`.
   */
  delete(priceListNo: number): DeleteRequestBuilderV4<PriceLists>;
  /**
   * Returns a request builder for deleting an entity of type `PriceLists`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PriceLists` by taking the entity as a parameter.
   */
  delete(entity: PriceLists): DeleteRequestBuilderV4<PriceLists>;
  delete(priceListNoOrEntity: any): DeleteRequestBuilderV4<PriceLists> {
    return new DeleteRequestBuilderV4(PriceLists, priceListNoOrEntity instanceof PriceLists ? priceListNoOrEntity : { PriceListNo: priceListNoOrEntity! });
  }
}
