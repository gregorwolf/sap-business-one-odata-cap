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
import { PriceLists } from './PriceLists';

/**
 * Request builder class for operations supported on the {@link PriceLists} entity.
 */
export class PriceListsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PriceLists<T>, T> {
  /**
   * Returns a request builder for retrieving one `PriceLists` entity based on its keys.
   * @param priceListNo Key property. See {@link PriceLists.priceListNo}.
   * @returns A request builder for creating requests to retrieve one `PriceLists` entity based on its keys.
   */
  getByKey(
    priceListNo: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PriceLists<T>, T> {
    return new GetByKeyRequestBuilder<PriceLists<T>, T>(this.entityApi, {
      PriceListNo: priceListNo
    });
  }

  /**
   * Returns a request builder for querying all `PriceLists` entities.
   * @returns A request builder for creating requests to retrieve all `PriceLists` entities.
   */
  getAll(): GetAllRequestBuilder<PriceLists<T>, T> {
    return new GetAllRequestBuilder<PriceLists<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PriceLists` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PriceLists`.
   */
  create(entity: PriceLists<T>): CreateRequestBuilder<PriceLists<T>, T> {
    return new CreateRequestBuilder<PriceLists<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PriceLists`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PriceLists`.
   */
  update(entity: PriceLists<T>): UpdateRequestBuilder<PriceLists<T>, T> {
    return new UpdateRequestBuilder<PriceLists<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PriceLists`.
   * @param priceListNo Key property. See {@link PriceLists.priceListNo}.
   * @returns A request builder for creating requests that delete an entity of type `PriceLists`.
   */
  delete(priceListNo: number): DeleteRequestBuilder<PriceLists<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PriceLists`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PriceLists` by taking the entity as a parameter.
   */
  delete(entity: PriceLists<T>): DeleteRequestBuilder<PriceLists<T>, T>;
  delete(priceListNoOrEntity: any): DeleteRequestBuilder<PriceLists<T>, T> {
    return new DeleteRequestBuilder<PriceLists<T>, T>(
      this.entityApi,
      priceListNoOrEntity instanceof PriceLists
        ? priceListNoOrEntity
        : { PriceListNo: priceListNoOrEntity! }
    );
  }
}
