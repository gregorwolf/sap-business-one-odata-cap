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
import { FinancialYears } from './FinancialYears';

/**
 * Request builder class for operations supported on the {@link FinancialYears} entity.
 */
export class FinancialYearsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FinancialYears<T>, T> {
  /**
   * Returns a request builder for retrieving one `FinancialYears` entity based on its keys.
   * @param absEntry Key property. See {@link FinancialYears.absEntry}.
   * @returns A request builder for creating requests to retrieve one `FinancialYears` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<FinancialYears<T>, T> {
    return new GetByKeyRequestBuilder<FinancialYears<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `FinancialYears` entities.
   * @returns A request builder for creating requests to retrieve all `FinancialYears` entities.
   */
  getAll(): GetAllRequestBuilder<FinancialYears<T>, T> {
    return new GetAllRequestBuilder<FinancialYears<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FinancialYears` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FinancialYears`.
   */
  create(
    entity: FinancialYears<T>
  ): CreateRequestBuilder<FinancialYears<T>, T> {
    return new CreateRequestBuilder<FinancialYears<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FinancialYears`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FinancialYears`.
   */
  update(
    entity: FinancialYears<T>
  ): UpdateRequestBuilder<FinancialYears<T>, T> {
    return new UpdateRequestBuilder<FinancialYears<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FinancialYears`.
   * @param absEntry Key property. See {@link FinancialYears.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `FinancialYears`.
   */
  delete(absEntry: number): DeleteRequestBuilder<FinancialYears<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FinancialYears`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FinancialYears` by taking the entity as a parameter.
   */
  delete(entity: FinancialYears<T>): DeleteRequestBuilder<FinancialYears<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<FinancialYears<T>, T> {
    return new DeleteRequestBuilder<FinancialYears<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof FinancialYears
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
