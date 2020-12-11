/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ApprovalStages } from './ApprovalStages';

/**
 * Request builder class for operations supported on the [[ApprovalStages]] entity.
 */
export class ApprovalStagesRequestBuilder extends RequestBuilder<ApprovalStages> {
  /**
   * Returns a request builder for retrieving one `ApprovalStages` entity based on its keys.
   * @param code Key property. See [[ApprovalStages.code]].
   * @returns A request builder for creating requests to retrieve one `ApprovalStages` entity based on its keys.
   */
  getByKey(code: number): GetByKeyRequestBuilderV4<ApprovalStages> {
    return new GetByKeyRequestBuilderV4(ApprovalStages, { Code: code });
  }

  /**
   * Returns a request builder for querying all `ApprovalStages` entities.
   * @returns A request builder for creating requests to retrieve all `ApprovalStages` entities.
   */
  getAll(): GetAllRequestBuilderV4<ApprovalStages> {
    return new GetAllRequestBuilderV4(ApprovalStages);
  }

  /**
   * Returns a request builder for creating a `ApprovalStages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApprovalStages`.
   */
  create(entity: ApprovalStages): CreateRequestBuilderV4<ApprovalStages> {
    return new CreateRequestBuilderV4(ApprovalStages, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ApprovalStages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApprovalStages`.
   */
  update(entity: ApprovalStages): UpdateRequestBuilderV4<ApprovalStages> {
    return new UpdateRequestBuilderV4(ApprovalStages, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ApprovalStages`.
   * @param code Key property. See [[ApprovalStages.code]].
   * @returns A request builder for creating requests that delete an entity of type `ApprovalStages`.
   */
  delete(code: number): DeleteRequestBuilderV4<ApprovalStages>;
  /**
   * Returns a request builder for deleting an entity of type `ApprovalStages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApprovalStages` by taking the entity as a parameter.
   */
  delete(entity: ApprovalStages): DeleteRequestBuilderV4<ApprovalStages>;
  delete(codeOrEntity: any): DeleteRequestBuilderV4<ApprovalStages> {
    return new DeleteRequestBuilderV4(ApprovalStages, codeOrEntity instanceof ApprovalStages ? codeOrEntity : { Code: codeOrEntity! });
  }
}
