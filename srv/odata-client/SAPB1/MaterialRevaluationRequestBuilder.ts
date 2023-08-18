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
import { MaterialRevaluation } from './MaterialRevaluation';

/**
 * Request builder class for operations supported on the {@link MaterialRevaluation} entity.
 */
export class MaterialRevaluationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaterialRevaluation<T>, T> {
  /**
   * Returns a request builder for retrieving one `MaterialRevaluation` entity based on its keys.
   * @param docEntry Key property. See {@link MaterialRevaluation.docEntry}.
   * @returns A request builder for creating requests to retrieve one `MaterialRevaluation` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<MaterialRevaluation<T>, T> {
    return new GetByKeyRequestBuilder<MaterialRevaluation<T>, T>(
      this.entityApi,
      { DocEntry: docEntry }
    );
  }

  /**
   * Returns a request builder for querying all `MaterialRevaluation` entities.
   * @returns A request builder for creating requests to retrieve all `MaterialRevaluation` entities.
   */
  getAll(): GetAllRequestBuilder<MaterialRevaluation<T>, T> {
    return new GetAllRequestBuilder<MaterialRevaluation<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MaterialRevaluation` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaterialRevaluation`.
   */
  create(
    entity: MaterialRevaluation<T>
  ): CreateRequestBuilder<MaterialRevaluation<T>, T> {
    return new CreateRequestBuilder<MaterialRevaluation<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaterialRevaluation`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaterialRevaluation`.
   */
  update(
    entity: MaterialRevaluation<T>
  ): UpdateRequestBuilder<MaterialRevaluation<T>, T> {
    return new UpdateRequestBuilder<MaterialRevaluation<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaterialRevaluation`.
   * @param docEntry Key property. See {@link MaterialRevaluation.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `MaterialRevaluation`.
   */
  delete(docEntry: number): DeleteRequestBuilder<MaterialRevaluation<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaterialRevaluation`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaterialRevaluation` by taking the entity as a parameter.
   */
  delete(
    entity: MaterialRevaluation<T>
  ): DeleteRequestBuilder<MaterialRevaluation<T>, T>;
  delete(
    docEntryOrEntity: any
  ): DeleteRequestBuilder<MaterialRevaluation<T>, T> {
    return new DeleteRequestBuilder<MaterialRevaluation<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof MaterialRevaluation
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
