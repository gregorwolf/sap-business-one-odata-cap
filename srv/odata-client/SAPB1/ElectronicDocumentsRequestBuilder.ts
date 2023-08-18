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
import { ElectronicDocuments } from './ElectronicDocuments';
import { ElectronicDocProtocolCodeStrEnum } from './ElectronicDocProtocolCodeStrEnum';

/**
 * Request builder class for operations supported on the {@link ElectronicDocuments} entity.
 */
export class ElectronicDocumentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ElectronicDocuments<T>, T> {
  /**
   * Returns a request builder for retrieving one `ElectronicDocuments` entity based on its keys.
   * @param code Key property. See {@link ElectronicDocuments.code}.
   * @returns A request builder for creating requests to retrieve one `ElectronicDocuments` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'SAPB1.ElectronicDocProtocolCodeStrEnum'>
  ): GetByKeyRequestBuilder<ElectronicDocuments<T>, T> {
    return new GetByKeyRequestBuilder<ElectronicDocuments<T>, T>(
      this.entityApi,
      { Code: code }
    );
  }

  /**
   * Returns a request builder for querying all `ElectronicDocuments` entities.
   * @returns A request builder for creating requests to retrieve all `ElectronicDocuments` entities.
   */
  getAll(): GetAllRequestBuilder<ElectronicDocuments<T>, T> {
    return new GetAllRequestBuilder<ElectronicDocuments<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ElectronicDocuments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ElectronicDocuments`.
   */
  create(
    entity: ElectronicDocuments<T>
  ): CreateRequestBuilder<ElectronicDocuments<T>, T> {
    return new CreateRequestBuilder<ElectronicDocuments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ElectronicDocuments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ElectronicDocuments`.
   */
  update(
    entity: ElectronicDocuments<T>
  ): UpdateRequestBuilder<ElectronicDocuments<T>, T> {
    return new UpdateRequestBuilder<ElectronicDocuments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ElectronicDocuments`.
   * @param code Key property. See {@link ElectronicDocuments.code}.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicDocuments`.
   */
  delete(
    code: ElectronicDocProtocolCodeStrEnum
  ): DeleteRequestBuilder<ElectronicDocuments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ElectronicDocuments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicDocuments` by taking the entity as a parameter.
   */
  delete(
    entity: ElectronicDocuments<T>
  ): DeleteRequestBuilder<ElectronicDocuments<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<ElectronicDocuments<T>, T> {
    return new DeleteRequestBuilder<ElectronicDocuments<T>, T>(
      this.entityApi,
      codeOrEntity instanceof ElectronicDocuments
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
