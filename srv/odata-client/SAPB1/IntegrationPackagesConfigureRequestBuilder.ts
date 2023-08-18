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
import { IntegrationPackagesConfigure } from './IntegrationPackagesConfigure';

/**
 * Request builder class for operations supported on the {@link IntegrationPackagesConfigure} entity.
 */
export class IntegrationPackagesConfigureRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IntegrationPackagesConfigure<T>, T> {
  /**
   * Returns a request builder for retrieving one `IntegrationPackagesConfigure` entity based on its keys.
   * @param absEntry Key property. See {@link IntegrationPackagesConfigure.absEntry}.
   * @returns A request builder for creating requests to retrieve one `IntegrationPackagesConfigure` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<IntegrationPackagesConfigure<T>, T> {
    return new GetByKeyRequestBuilder<IntegrationPackagesConfigure<T>, T>(
      this.entityApi,
      { AbsEntry: absEntry }
    );
  }

  /**
   * Returns a request builder for querying all `IntegrationPackagesConfigure` entities.
   * @returns A request builder for creating requests to retrieve all `IntegrationPackagesConfigure` entities.
   */
  getAll(): GetAllRequestBuilder<IntegrationPackagesConfigure<T>, T> {
    return new GetAllRequestBuilder<IntegrationPackagesConfigure<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `IntegrationPackagesConfigure` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IntegrationPackagesConfigure`.
   */
  create(
    entity: IntegrationPackagesConfigure<T>
  ): CreateRequestBuilder<IntegrationPackagesConfigure<T>, T> {
    return new CreateRequestBuilder<IntegrationPackagesConfigure<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IntegrationPackagesConfigure`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IntegrationPackagesConfigure`.
   */
  update(
    entity: IntegrationPackagesConfigure<T>
  ): UpdateRequestBuilder<IntegrationPackagesConfigure<T>, T> {
    return new UpdateRequestBuilder<IntegrationPackagesConfigure<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IntegrationPackagesConfigure`.
   * @param absEntry Key property. See {@link IntegrationPackagesConfigure.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `IntegrationPackagesConfigure`.
   */
  delete(
    absEntry: number
  ): DeleteRequestBuilder<IntegrationPackagesConfigure<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IntegrationPackagesConfigure`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IntegrationPackagesConfigure` by taking the entity as a parameter.
   */
  delete(
    entity: IntegrationPackagesConfigure<T>
  ): DeleteRequestBuilder<IntegrationPackagesConfigure<T>, T>;
  delete(
    absEntryOrEntity: any
  ): DeleteRequestBuilder<IntegrationPackagesConfigure<T>, T> {
    return new DeleteRequestBuilder<IntegrationPackagesConfigure<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof IntegrationPackagesConfigure
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
