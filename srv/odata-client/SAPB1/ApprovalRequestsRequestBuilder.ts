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
import { ApprovalRequests } from './ApprovalRequests';

/**
 * Request builder class for operations supported on the {@link ApprovalRequests} entity.
 */
export class ApprovalRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApprovalRequests<T>, T> {
  /**
   * Returns a request builder for retrieving one `ApprovalRequests` entity based on its keys.
   * @param code Key property. See {@link ApprovalRequests.code}.
   * @returns A request builder for creating requests to retrieve one `ApprovalRequests` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ApprovalRequests<T>, T> {
    return new GetByKeyRequestBuilder<ApprovalRequests<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `ApprovalRequests` entities.
   * @returns A request builder for creating requests to retrieve all `ApprovalRequests` entities.
   */
  getAll(): GetAllRequestBuilder<ApprovalRequests<T>, T> {
    return new GetAllRequestBuilder<ApprovalRequests<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ApprovalRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApprovalRequests`.
   */
  create(
    entity: ApprovalRequests<T>
  ): CreateRequestBuilder<ApprovalRequests<T>, T> {
    return new CreateRequestBuilder<ApprovalRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ApprovalRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApprovalRequests`.
   */
  update(
    entity: ApprovalRequests<T>
  ): UpdateRequestBuilder<ApprovalRequests<T>, T> {
    return new UpdateRequestBuilder<ApprovalRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApprovalRequests`.
   * @param code Key property. See {@link ApprovalRequests.code}.
   * @returns A request builder for creating requests that delete an entity of type `ApprovalRequests`.
   */
  delete(code: number): DeleteRequestBuilder<ApprovalRequests<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApprovalRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApprovalRequests` by taking the entity as a parameter.
   */
  delete(
    entity: ApprovalRequests<T>
  ): DeleteRequestBuilder<ApprovalRequests<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<ApprovalRequests<T>, T> {
    return new DeleteRequestBuilder<ApprovalRequests<T>, T>(
      this.entityApi,
      codeOrEntity instanceof ApprovalRequests
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
