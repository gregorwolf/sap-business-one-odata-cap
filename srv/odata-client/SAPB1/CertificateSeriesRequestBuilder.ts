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
import { CertificateSeries } from './CertificateSeries';

/**
 * Request builder class for operations supported on the {@link CertificateSeries} entity.
 */
export class CertificateSeriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CertificateSeries<T>, T> {
  /**
   * Returns a request builder for retrieving one `CertificateSeries` entity based on its keys.
   * @param absEntry Key property. See {@link CertificateSeries.absEntry}.
   * @returns A request builder for creating requests to retrieve one `CertificateSeries` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<CertificateSeries<T>, T> {
    return new GetByKeyRequestBuilder<CertificateSeries<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `CertificateSeries` entities.
   * @returns A request builder for creating requests to retrieve all `CertificateSeries` entities.
   */
  getAll(): GetAllRequestBuilder<CertificateSeries<T>, T> {
    return new GetAllRequestBuilder<CertificateSeries<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CertificateSeries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CertificateSeries`.
   */
  create(
    entity: CertificateSeries<T>
  ): CreateRequestBuilder<CertificateSeries<T>, T> {
    return new CreateRequestBuilder<CertificateSeries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CertificateSeries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CertificateSeries`.
   */
  update(
    entity: CertificateSeries<T>
  ): UpdateRequestBuilder<CertificateSeries<T>, T> {
    return new UpdateRequestBuilder<CertificateSeries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CertificateSeries`.
   * @param absEntry Key property. See {@link CertificateSeries.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `CertificateSeries`.
   */
  delete(absEntry: number): DeleteRequestBuilder<CertificateSeries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CertificateSeries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CertificateSeries` by taking the entity as a parameter.
   */
  delete(
    entity: CertificateSeries<T>
  ): DeleteRequestBuilder<CertificateSeries<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<CertificateSeries<T>, T> {
    return new DeleteRequestBuilder<CertificateSeries<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof CertificateSeries
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
