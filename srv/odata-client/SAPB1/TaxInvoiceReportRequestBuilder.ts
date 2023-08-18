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
import { TaxInvoiceReport } from './TaxInvoiceReport';

/**
 * Request builder class for operations supported on the {@link TaxInvoiceReport} entity.
 */
export class TaxInvoiceReportRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxInvoiceReport<T>, T> {
  /**
   * Returns a request builder for retrieving one `TaxInvoiceReport` entity based on its keys.
   * @param taxInvoiceReportNumber Key property. See {@link TaxInvoiceReport.taxInvoiceReportNumber}.
   * @returns A request builder for creating requests to retrieve one `TaxInvoiceReport` entity based on its keys.
   */
  getByKey(
    taxInvoiceReportNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxInvoiceReport<T>, T> {
    return new GetByKeyRequestBuilder<TaxInvoiceReport<T>, T>(this.entityApi, {
      TaxInvoiceReportNumber: taxInvoiceReportNumber
    });
  }

  /**
   * Returns a request builder for querying all `TaxInvoiceReport` entities.
   * @returns A request builder for creating requests to retrieve all `TaxInvoiceReport` entities.
   */
  getAll(): GetAllRequestBuilder<TaxInvoiceReport<T>, T> {
    return new GetAllRequestBuilder<TaxInvoiceReport<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxInvoiceReport` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxInvoiceReport`.
   */
  create(
    entity: TaxInvoiceReport<T>
  ): CreateRequestBuilder<TaxInvoiceReport<T>, T> {
    return new CreateRequestBuilder<TaxInvoiceReport<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxInvoiceReport`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxInvoiceReport`.
   */
  update(
    entity: TaxInvoiceReport<T>
  ): UpdateRequestBuilder<TaxInvoiceReport<T>, T> {
    return new UpdateRequestBuilder<TaxInvoiceReport<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxInvoiceReport`.
   * @param taxInvoiceReportNumber Key property. See {@link TaxInvoiceReport.taxInvoiceReportNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TaxInvoiceReport`.
   */
  delete(
    taxInvoiceReportNumber: string
  ): DeleteRequestBuilder<TaxInvoiceReport<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxInvoiceReport`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxInvoiceReport` by taking the entity as a parameter.
   */
  delete(
    entity: TaxInvoiceReport<T>
  ): DeleteRequestBuilder<TaxInvoiceReport<T>, T>;
  delete(
    taxInvoiceReportNumberOrEntity: any
  ): DeleteRequestBuilder<TaxInvoiceReport<T>, T> {
    return new DeleteRequestBuilder<TaxInvoiceReport<T>, T>(
      this.entityApi,
      taxInvoiceReportNumberOrEntity instanceof TaxInvoiceReport
        ? taxInvoiceReportNumberOrEntity
        : { TaxInvoiceReportNumber: taxInvoiceReportNumberOrEntity! }
    );
  }
}
