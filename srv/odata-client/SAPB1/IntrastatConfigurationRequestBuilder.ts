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
import { IntrastatConfiguration } from './IntrastatConfiguration';

/**
 * Request builder class for operations supported on the {@link IntrastatConfiguration} entity.
 */
export class IntrastatConfigurationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IntrastatConfiguration<T>, T> {
  /**
   * Returns a request builder for retrieving one `IntrastatConfiguration` entity based on its keys.
   * @param absEntry Key property. See {@link IntrastatConfiguration.absEntry}.
   * @returns A request builder for creating requests to retrieve one `IntrastatConfiguration` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<IntrastatConfiguration<T>, T> {
    return new GetByKeyRequestBuilder<IntrastatConfiguration<T>, T>(
      this.entityApi,
      { AbsEntry: absEntry }
    );
  }

  /**
   * Returns a request builder for querying all `IntrastatConfiguration` entities.
   * @returns A request builder for creating requests to retrieve all `IntrastatConfiguration` entities.
   */
  getAll(): GetAllRequestBuilder<IntrastatConfiguration<T>, T> {
    return new GetAllRequestBuilder<IntrastatConfiguration<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `IntrastatConfiguration` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IntrastatConfiguration`.
   */
  create(
    entity: IntrastatConfiguration<T>
  ): CreateRequestBuilder<IntrastatConfiguration<T>, T> {
    return new CreateRequestBuilder<IntrastatConfiguration<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IntrastatConfiguration`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IntrastatConfiguration`.
   */
  update(
    entity: IntrastatConfiguration<T>
  ): UpdateRequestBuilder<IntrastatConfiguration<T>, T> {
    return new UpdateRequestBuilder<IntrastatConfiguration<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IntrastatConfiguration`.
   * @param absEntry Key property. See {@link IntrastatConfiguration.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `IntrastatConfiguration`.
   */
  delete(absEntry: number): DeleteRequestBuilder<IntrastatConfiguration<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IntrastatConfiguration`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IntrastatConfiguration` by taking the entity as a parameter.
   */
  delete(
    entity: IntrastatConfiguration<T>
  ): DeleteRequestBuilder<IntrastatConfiguration<T>, T>;
  delete(
    absEntryOrEntity: any
  ): DeleteRequestBuilder<IntrastatConfiguration<T>, T> {
    return new DeleteRequestBuilder<IntrastatConfiguration<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof IntrastatConfiguration
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
