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
import { AssetCapitalizationCreditMemo } from './AssetCapitalizationCreditMemo';

/**
 * Request builder class for operations supported on the {@link AssetCapitalizationCreditMemo} entity.
 */
export class AssetCapitalizationCreditMemoRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetCapitalizationCreditMemo<T>, T> {
  /**
   * Returns a request builder for retrieving one `AssetCapitalizationCreditMemo` entity based on its keys.
   * @param docEntry Key property. See {@link AssetCapitalizationCreditMemo.docEntry}.
   * @returns A request builder for creating requests to retrieve one `AssetCapitalizationCreditMemo` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<AssetCapitalizationCreditMemo<T>, T> {
    return new GetByKeyRequestBuilder<AssetCapitalizationCreditMemo<T>, T>(
      this.entityApi,
      { DocEntry: docEntry }
    );
  }

  /**
   * Returns a request builder for querying all `AssetCapitalizationCreditMemo` entities.
   * @returns A request builder for creating requests to retrieve all `AssetCapitalizationCreditMemo` entities.
   */
  getAll(): GetAllRequestBuilder<AssetCapitalizationCreditMemo<T>, T> {
    return new GetAllRequestBuilder<AssetCapitalizationCreditMemo<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetCapitalizationCreditMemo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetCapitalizationCreditMemo`.
   */
  create(
    entity: AssetCapitalizationCreditMemo<T>
  ): CreateRequestBuilder<AssetCapitalizationCreditMemo<T>, T> {
    return new CreateRequestBuilder<AssetCapitalizationCreditMemo<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetCapitalizationCreditMemo`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetCapitalizationCreditMemo`.
   */
  update(
    entity: AssetCapitalizationCreditMemo<T>
  ): UpdateRequestBuilder<AssetCapitalizationCreditMemo<T>, T> {
    return new UpdateRequestBuilder<AssetCapitalizationCreditMemo<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetCapitalizationCreditMemo`.
   * @param docEntry Key property. See {@link AssetCapitalizationCreditMemo.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `AssetCapitalizationCreditMemo`.
   */
  delete(
    docEntry: number
  ): DeleteRequestBuilder<AssetCapitalizationCreditMemo<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetCapitalizationCreditMemo`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetCapitalizationCreditMemo` by taking the entity as a parameter.
   */
  delete(
    entity: AssetCapitalizationCreditMemo<T>
  ): DeleteRequestBuilder<AssetCapitalizationCreditMemo<T>, T>;
  delete(
    docEntryOrEntity: any
  ): DeleteRequestBuilder<AssetCapitalizationCreditMemo<T>, T> {
    return new DeleteRequestBuilder<AssetCapitalizationCreditMemo<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof AssetCapitalizationCreditMemo
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
