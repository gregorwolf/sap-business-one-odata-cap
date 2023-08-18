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
import { SpecialPrices } from './SpecialPrices';

/**
 * Request builder class for operations supported on the {@link SpecialPrices} entity.
 */
export class SpecialPricesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SpecialPrices<T>, T> {
  /**
   * Returns a request builder for retrieving one `SpecialPrices` entity based on its keys.
   * @param itemCode Key property. See {@link SpecialPrices.itemCode}.
   * @param cardCode Key property. See {@link SpecialPrices.cardCode}.
   * @returns A request builder for creating requests to retrieve one `SpecialPrices` entity based on its keys.
   */
  getByKey(
    itemCode: DeserializedType<T, 'Edm.String'>,
    cardCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SpecialPrices<T>, T> {
    return new GetByKeyRequestBuilder<SpecialPrices<T>, T>(this.entityApi, {
      ItemCode: itemCode,
      CardCode: cardCode
    });
  }

  /**
   * Returns a request builder for querying all `SpecialPrices` entities.
   * @returns A request builder for creating requests to retrieve all `SpecialPrices` entities.
   */
  getAll(): GetAllRequestBuilder<SpecialPrices<T>, T> {
    return new GetAllRequestBuilder<SpecialPrices<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SpecialPrices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SpecialPrices`.
   */
  create(entity: SpecialPrices<T>): CreateRequestBuilder<SpecialPrices<T>, T> {
    return new CreateRequestBuilder<SpecialPrices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SpecialPrices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SpecialPrices`.
   */
  update(entity: SpecialPrices<T>): UpdateRequestBuilder<SpecialPrices<T>, T> {
    return new UpdateRequestBuilder<SpecialPrices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SpecialPrices`.
   * @param itemCode Key property. See {@link SpecialPrices.itemCode}.
   * @param cardCode Key property. See {@link SpecialPrices.cardCode}.
   * @returns A request builder for creating requests that delete an entity of type `SpecialPrices`.
   */
  delete(
    itemCode: string,
    cardCode: string
  ): DeleteRequestBuilder<SpecialPrices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SpecialPrices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SpecialPrices` by taking the entity as a parameter.
   */
  delete(entity: SpecialPrices<T>): DeleteRequestBuilder<SpecialPrices<T>, T>;
  delete(
    itemCodeOrEntity: any,
    cardCode?: string
  ): DeleteRequestBuilder<SpecialPrices<T>, T> {
    return new DeleteRequestBuilder<SpecialPrices<T>, T>(
      this.entityApi,
      itemCodeOrEntity instanceof SpecialPrices
        ? itemCodeOrEntity
        : {
            ItemCode: itemCodeOrEntity!,
            CardCode: cardCode!
          }
    );
  }
}
