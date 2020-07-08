/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ApprovalRequests } from './ApprovalRequests';

/**
 * Request builder class for operations supported on the [[ApprovalRequests]] entity.
 */
export class ApprovalRequestsRequestBuilder extends RequestBuilder<ApprovalRequests> {
  /**
   * Returns a request builder for retrieving one `ApprovalRequests` entity based on its keys.
   * @param code Key property. See [[ApprovalRequests.code]].
   * @returns A request builder for creating requests to retrieve one `ApprovalRequests` entity based on its keys.
   */
  getByKey(code: number): GetByKeyRequestBuilder<ApprovalRequests> {
    return new GetByKeyRequestBuilder(ApprovalRequests, { Code: code });
  }

  /**
   * Returns a request builder for querying all `ApprovalRequests` entities.
   * @returns A request builder for creating requests to retrieve all `ApprovalRequests` entities.
   */
  getAll(): GetAllRequestBuilder<ApprovalRequests> {
    return new GetAllRequestBuilder(ApprovalRequests);
  }

  /**
   * Returns a request builder for creating a `ApprovalRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApprovalRequests`.
   */
  create(entity: ApprovalRequests): CreateRequestBuilder<ApprovalRequests> {
    return new CreateRequestBuilder(ApprovalRequests, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ApprovalRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApprovalRequests`.
   */
  update(entity: ApprovalRequests): UpdateRequestBuilder<ApprovalRequests> {
    return new UpdateRequestBuilder(ApprovalRequests, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ApprovalRequests`.
   * @param code Key property. See [[ApprovalRequests.code]].
   * @returns A request builder for creating requests that delete an entity of type `ApprovalRequests`.
   */
  delete(code: number): DeleteRequestBuilder<ApprovalRequests>;
  /**
   * Returns a request builder for deleting an entity of type `ApprovalRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApprovalRequests` by taking the entity as a parameter.
   */
  delete(entity: ApprovalRequests): DeleteRequestBuilder<ApprovalRequests>;
  delete(codeOrEntity: any): DeleteRequestBuilder<ApprovalRequests> {
    return new DeleteRequestBuilder(ApprovalRequests, codeOrEntity instanceof ApprovalRequests ? codeOrEntity : { Code: codeOrEntity! });
  }
}
