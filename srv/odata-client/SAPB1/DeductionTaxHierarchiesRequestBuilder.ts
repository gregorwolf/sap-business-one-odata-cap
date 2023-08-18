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
import { DeductionTaxHierarchies } from './DeductionTaxHierarchies';

/**
 * Request builder class for operations supported on the {@link DeductionTaxHierarchies} entity.
 */
export class DeductionTaxHierarchiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DeductionTaxHierarchies<T>, T> {
  /**
   * Returns a request builder for retrieving one `DeductionTaxHierarchies` entity based on its keys.
   * @param absEntry Key property. See {@link DeductionTaxHierarchies.absEntry}.
   * @returns A request builder for creating requests to retrieve one `DeductionTaxHierarchies` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<DeductionTaxHierarchies<T>, T> {
    return new GetByKeyRequestBuilder<DeductionTaxHierarchies<T>, T>(
      this.entityApi,
      { AbsEntry: absEntry }
    );
  }

  /**
   * Returns a request builder for querying all `DeductionTaxHierarchies` entities.
   * @returns A request builder for creating requests to retrieve all `DeductionTaxHierarchies` entities.
   */
  getAll(): GetAllRequestBuilder<DeductionTaxHierarchies<T>, T> {
    return new GetAllRequestBuilder<DeductionTaxHierarchies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DeductionTaxHierarchies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DeductionTaxHierarchies`.
   */
  create(
    entity: DeductionTaxHierarchies<T>
  ): CreateRequestBuilder<DeductionTaxHierarchies<T>, T> {
    return new CreateRequestBuilder<DeductionTaxHierarchies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DeductionTaxHierarchies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DeductionTaxHierarchies`.
   */
  update(
    entity: DeductionTaxHierarchies<T>
  ): UpdateRequestBuilder<DeductionTaxHierarchies<T>, T> {
    return new UpdateRequestBuilder<DeductionTaxHierarchies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DeductionTaxHierarchies`.
   * @param absEntry Key property. See {@link DeductionTaxHierarchies.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `DeductionTaxHierarchies`.
   */
  delete(absEntry: number): DeleteRequestBuilder<DeductionTaxHierarchies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DeductionTaxHierarchies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DeductionTaxHierarchies` by taking the entity as a parameter.
   */
  delete(
    entity: DeductionTaxHierarchies<T>
  ): DeleteRequestBuilder<DeductionTaxHierarchies<T>, T>;
  delete(
    absEntryOrEntity: any
  ): DeleteRequestBuilder<DeductionTaxHierarchies<T>, T> {
    return new DeleteRequestBuilder<DeductionTaxHierarchies<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof DeductionTaxHierarchies
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
