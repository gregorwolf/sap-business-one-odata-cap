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
import { KnowledgeBaseSolutions } from './KnowledgeBaseSolutions';

/**
 * Request builder class for operations supported on the {@link KnowledgeBaseSolutions} entity.
 */
export class KnowledgeBaseSolutionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<KnowledgeBaseSolutions<T>, T> {
  /**
   * Returns a request builder for retrieving one `KnowledgeBaseSolutions` entity based on its keys.
   * @param solutionCode Key property. See {@link KnowledgeBaseSolutions.solutionCode}.
   * @returns A request builder for creating requests to retrieve one `KnowledgeBaseSolutions` entity based on its keys.
   */
  getByKey(
    solutionCode: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<KnowledgeBaseSolutions<T>, T> {
    return new GetByKeyRequestBuilder<KnowledgeBaseSolutions<T>, T>(
      this.entityApi,
      { SolutionCode: solutionCode }
    );
  }

  /**
   * Returns a request builder for querying all `KnowledgeBaseSolutions` entities.
   * @returns A request builder for creating requests to retrieve all `KnowledgeBaseSolutions` entities.
   */
  getAll(): GetAllRequestBuilder<KnowledgeBaseSolutions<T>, T> {
    return new GetAllRequestBuilder<KnowledgeBaseSolutions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `KnowledgeBaseSolutions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `KnowledgeBaseSolutions`.
   */
  create(
    entity: KnowledgeBaseSolutions<T>
  ): CreateRequestBuilder<KnowledgeBaseSolutions<T>, T> {
    return new CreateRequestBuilder<KnowledgeBaseSolutions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `KnowledgeBaseSolutions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `KnowledgeBaseSolutions`.
   */
  update(
    entity: KnowledgeBaseSolutions<T>
  ): UpdateRequestBuilder<KnowledgeBaseSolutions<T>, T> {
    return new UpdateRequestBuilder<KnowledgeBaseSolutions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `KnowledgeBaseSolutions`.
   * @param solutionCode Key property. See {@link KnowledgeBaseSolutions.solutionCode}.
   * @returns A request builder for creating requests that delete an entity of type `KnowledgeBaseSolutions`.
   */
  delete(
    solutionCode: number
  ): DeleteRequestBuilder<KnowledgeBaseSolutions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `KnowledgeBaseSolutions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `KnowledgeBaseSolutions` by taking the entity as a parameter.
   */
  delete(
    entity: KnowledgeBaseSolutions<T>
  ): DeleteRequestBuilder<KnowledgeBaseSolutions<T>, T>;
  delete(
    solutionCodeOrEntity: any
  ): DeleteRequestBuilder<KnowledgeBaseSolutions<T>, T> {
    return new DeleteRequestBuilder<KnowledgeBaseSolutions<T>, T>(
      this.entityApi,
      solutionCodeOrEntity instanceof KnowledgeBaseSolutions
        ? solutionCodeOrEntity
        : { SolutionCode: solutionCodeOrEntity! }
    );
  }
}
