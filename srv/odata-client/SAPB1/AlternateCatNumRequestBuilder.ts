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
import { AlternateCatNum } from './AlternateCatNum';

/**
 * Request builder class for operations supported on the {@link AlternateCatNum} entity.
 */
export class AlternateCatNumRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AlternateCatNum<T>, T> {
  /**
   * Returns a request builder for retrieving one `AlternateCatNum` entity based on its keys.
   * @param itemCode Key property. See {@link AlternateCatNum.itemCode}.
   * @param cardCode Key property. See {@link AlternateCatNum.cardCode}.
   * @param substitute Key property. See {@link AlternateCatNum.substitute}.
   * @returns A request builder for creating requests to retrieve one `AlternateCatNum` entity based on its keys.
   */
  getByKey(
    itemCode: DeserializedType<T, 'Edm.String'>,
    cardCode: DeserializedType<T, 'Edm.String'>,
    substitute: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AlternateCatNum<T>, T> {
    return new GetByKeyRequestBuilder<AlternateCatNum<T>, T>(this.entityApi, {
      ItemCode: itemCode,
      CardCode: cardCode,
      Substitute: substitute
    });
  }

  /**
   * Returns a request builder for querying all `AlternateCatNum` entities.
   * @returns A request builder for creating requests to retrieve all `AlternateCatNum` entities.
   */
  getAll(): GetAllRequestBuilder<AlternateCatNum<T>, T> {
    return new GetAllRequestBuilder<AlternateCatNum<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AlternateCatNum` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AlternateCatNum`.
   */
  create(
    entity: AlternateCatNum<T>
  ): CreateRequestBuilder<AlternateCatNum<T>, T> {
    return new CreateRequestBuilder<AlternateCatNum<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AlternateCatNum`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AlternateCatNum`.
   */
  update(
    entity: AlternateCatNum<T>
  ): UpdateRequestBuilder<AlternateCatNum<T>, T> {
    return new UpdateRequestBuilder<AlternateCatNum<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AlternateCatNum`.
   * @param itemCode Key property. See {@link AlternateCatNum.itemCode}.
   * @param cardCode Key property. See {@link AlternateCatNum.cardCode}.
   * @param substitute Key property. See {@link AlternateCatNum.substitute}.
   * @returns A request builder for creating requests that delete an entity of type `AlternateCatNum`.
   */
  delete(
    itemCode: string,
    cardCode: string,
    substitute: string
  ): DeleteRequestBuilder<AlternateCatNum<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AlternateCatNum`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AlternateCatNum` by taking the entity as a parameter.
   */
  delete(
    entity: AlternateCatNum<T>
  ): DeleteRequestBuilder<AlternateCatNum<T>, T>;
  delete(
    itemCodeOrEntity: any,
    cardCode?: string,
    substitute?: string
  ): DeleteRequestBuilder<AlternateCatNum<T>, T> {
    return new DeleteRequestBuilder<AlternateCatNum<T>, T>(
      this.entityApi,
      itemCodeOrEntity instanceof AlternateCatNum
        ? itemCodeOrEntity
        : {
            ItemCode: itemCodeOrEntity!,
            CardCode: cardCode!,
            Substitute: substitute!
          }
    );
  }
}
