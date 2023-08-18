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
import { ApprovalTemplates } from './ApprovalTemplates';

/**
 * Request builder class for operations supported on the {@link ApprovalTemplates} entity.
 */
export class ApprovalTemplatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApprovalTemplates<T>, T> {
  /**
   * Returns a request builder for retrieving one `ApprovalTemplates` entity based on its keys.
   * @param code Key property. See {@link ApprovalTemplates.code}.
   * @returns A request builder for creating requests to retrieve one `ApprovalTemplates` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ApprovalTemplates<T>, T> {
    return new GetByKeyRequestBuilder<ApprovalTemplates<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `ApprovalTemplates` entities.
   * @returns A request builder for creating requests to retrieve all `ApprovalTemplates` entities.
   */
  getAll(): GetAllRequestBuilder<ApprovalTemplates<T>, T> {
    return new GetAllRequestBuilder<ApprovalTemplates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ApprovalTemplates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApprovalTemplates`.
   */
  create(
    entity: ApprovalTemplates<T>
  ): CreateRequestBuilder<ApprovalTemplates<T>, T> {
    return new CreateRequestBuilder<ApprovalTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ApprovalTemplates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApprovalTemplates`.
   */
  update(
    entity: ApprovalTemplates<T>
  ): UpdateRequestBuilder<ApprovalTemplates<T>, T> {
    return new UpdateRequestBuilder<ApprovalTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApprovalTemplates`.
   * @param code Key property. See {@link ApprovalTemplates.code}.
   * @returns A request builder for creating requests that delete an entity of type `ApprovalTemplates`.
   */
  delete(code: number): DeleteRequestBuilder<ApprovalTemplates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApprovalTemplates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApprovalTemplates` by taking the entity as a parameter.
   */
  delete(
    entity: ApprovalTemplates<T>
  ): DeleteRequestBuilder<ApprovalTemplates<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<ApprovalTemplates<T>, T> {
    return new DeleteRequestBuilder<ApprovalTemplates<T>, T>(
      this.entityApi,
      codeOrEntity instanceof ApprovalTemplates
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
