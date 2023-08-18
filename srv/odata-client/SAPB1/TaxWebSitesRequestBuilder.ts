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
import { TaxWebSites } from './TaxWebSites';

/**
 * Request builder class for operations supported on the {@link TaxWebSites} entity.
 */
export class TaxWebSitesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxWebSites<T>, T> {
  /**
   * Returns a request builder for retrieving one `TaxWebSites` entity based on its keys.
   * @param absEntry Key property. See {@link TaxWebSites.absEntry}.
   * @returns A request builder for creating requests to retrieve one `TaxWebSites` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<TaxWebSites<T>, T> {
    return new GetByKeyRequestBuilder<TaxWebSites<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `TaxWebSites` entities.
   * @returns A request builder for creating requests to retrieve all `TaxWebSites` entities.
   */
  getAll(): GetAllRequestBuilder<TaxWebSites<T>, T> {
    return new GetAllRequestBuilder<TaxWebSites<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxWebSites` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxWebSites`.
   */
  create(entity: TaxWebSites<T>): CreateRequestBuilder<TaxWebSites<T>, T> {
    return new CreateRequestBuilder<TaxWebSites<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `TaxWebSites`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxWebSites`.
   */
  update(entity: TaxWebSites<T>): UpdateRequestBuilder<TaxWebSites<T>, T> {
    return new UpdateRequestBuilder<TaxWebSites<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxWebSites`.
   * @param absEntry Key property. See {@link TaxWebSites.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `TaxWebSites`.
   */
  delete(absEntry: number): DeleteRequestBuilder<TaxWebSites<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxWebSites`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxWebSites` by taking the entity as a parameter.
   */
  delete(entity: TaxWebSites<T>): DeleteRequestBuilder<TaxWebSites<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<TaxWebSites<T>, T> {
    return new DeleteRequestBuilder<TaxWebSites<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof TaxWebSites
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
