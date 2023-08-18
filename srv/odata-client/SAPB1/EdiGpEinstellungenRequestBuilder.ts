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
import { EdiGpEinstellungen } from './EdiGpEinstellungen';

/**
 * Request builder class for operations supported on the {@link EdiGpEinstellungen} entity.
 */
export class EdiGpEinstellungenRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EdiGpEinstellungen<T>, T> {
  /**
   * Returns a request builder for retrieving one `EdiGpEinstellungen` entity based on its keys.
   * @param code Key property. See {@link EdiGpEinstellungen.code}.
   * @returns A request builder for creating requests to retrieve one `EdiGpEinstellungen` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EdiGpEinstellungen<T>, T> {
    return new GetByKeyRequestBuilder<EdiGpEinstellungen<T>, T>(
      this.entityApi,
      { Code: code }
    );
  }

  /**
   * Returns a request builder for querying all `EdiGpEinstellungen` entities.
   * @returns A request builder for creating requests to retrieve all `EdiGpEinstellungen` entities.
   */
  getAll(): GetAllRequestBuilder<EdiGpEinstellungen<T>, T> {
    return new GetAllRequestBuilder<EdiGpEinstellungen<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EdiGpEinstellungen` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EdiGpEinstellungen`.
   */
  create(
    entity: EdiGpEinstellungen<T>
  ): CreateRequestBuilder<EdiGpEinstellungen<T>, T> {
    return new CreateRequestBuilder<EdiGpEinstellungen<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EdiGpEinstellungen`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EdiGpEinstellungen`.
   */
  update(
    entity: EdiGpEinstellungen<T>
  ): UpdateRequestBuilder<EdiGpEinstellungen<T>, T> {
    return new UpdateRequestBuilder<EdiGpEinstellungen<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EdiGpEinstellungen`.
   * @param code Key property. See {@link EdiGpEinstellungen.code}.
   * @returns A request builder for creating requests that delete an entity of type `EdiGpEinstellungen`.
   */
  delete(code: string): DeleteRequestBuilder<EdiGpEinstellungen<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EdiGpEinstellungen`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EdiGpEinstellungen` by taking the entity as a parameter.
   */
  delete(
    entity: EdiGpEinstellungen<T>
  ): DeleteRequestBuilder<EdiGpEinstellungen<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<EdiGpEinstellungen<T>, T> {
    return new DeleteRequestBuilder<EdiGpEinstellungen<T>, T>(
      this.entityApi,
      codeOrEntity instanceof EdiGpEinstellungen
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
