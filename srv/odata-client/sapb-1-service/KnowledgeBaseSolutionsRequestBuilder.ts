/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { KnowledgeBaseSolutions } from './KnowledgeBaseSolutions';

/**
 * Request builder class for operations supported on the [[KnowledgeBaseSolutions]] entity.
 */
export class KnowledgeBaseSolutionsRequestBuilder extends RequestBuilder<KnowledgeBaseSolutions> {
  /**
   * Returns a request builder for retrieving one `KnowledgeBaseSolutions` entity based on its keys.
   * @param solutionCode Key property. See [[KnowledgeBaseSolutions.solutionCode]].
   * @returns A request builder for creating requests to retrieve one `KnowledgeBaseSolutions` entity based on its keys.
   */
  getByKey(solutionCode: number): GetByKeyRequestBuilderV4<KnowledgeBaseSolutions> {
    return new GetByKeyRequestBuilderV4(KnowledgeBaseSolutions, { SolutionCode: solutionCode });
  }

  /**
   * Returns a request builder for querying all `KnowledgeBaseSolutions` entities.
   * @returns A request builder for creating requests to retrieve all `KnowledgeBaseSolutions` entities.
   */
  getAll(): GetAllRequestBuilderV4<KnowledgeBaseSolutions> {
    return new GetAllRequestBuilderV4(KnowledgeBaseSolutions);
  }

  /**
   * Returns a request builder for creating a `KnowledgeBaseSolutions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `KnowledgeBaseSolutions`.
   */
  create(entity: KnowledgeBaseSolutions): CreateRequestBuilderV4<KnowledgeBaseSolutions> {
    return new CreateRequestBuilderV4(KnowledgeBaseSolutions, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `KnowledgeBaseSolutions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `KnowledgeBaseSolutions`.
   */
  update(entity: KnowledgeBaseSolutions): UpdateRequestBuilderV4<KnowledgeBaseSolutions> {
    return new UpdateRequestBuilderV4(KnowledgeBaseSolutions, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `KnowledgeBaseSolutions`.
   * @param solutionCode Key property. See [[KnowledgeBaseSolutions.solutionCode]].
   * @returns A request builder for creating requests that delete an entity of type `KnowledgeBaseSolutions`.
   */
  delete(solutionCode: number): DeleteRequestBuilderV4<KnowledgeBaseSolutions>;
  /**
   * Returns a request builder for deleting an entity of type `KnowledgeBaseSolutions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `KnowledgeBaseSolutions` by taking the entity as a parameter.
   */
  delete(entity: KnowledgeBaseSolutions): DeleteRequestBuilderV4<KnowledgeBaseSolutions>;
  delete(solutionCodeOrEntity: any): DeleteRequestBuilderV4<KnowledgeBaseSolutions> {
    return new DeleteRequestBuilderV4(KnowledgeBaseSolutions, solutionCodeOrEntity instanceof KnowledgeBaseSolutions ? solutionCodeOrEntity : { SolutionCode: solutionCodeOrEntity! });
  }
}
