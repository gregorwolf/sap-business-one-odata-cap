/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { WitholdingTaxDefinition } from './WitholdingTaxDefinition';

/**
 * Request builder class for operations supported on the [[WitholdingTaxDefinition]] entity.
 */
export class WitholdingTaxDefinitionRequestBuilder extends RequestBuilder<WitholdingTaxDefinition> {
  /**
   * Returns a request builder for retrieving one `WitholdingTaxDefinition` entity based on its keys.
   * @param absEntry Key property. See [[WitholdingTaxDefinition.absEntry]].
   * @returns A request builder for creating requests to retrieve one `WitholdingTaxDefinition` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilder<WitholdingTaxDefinition> {
    return new GetByKeyRequestBuilder(WitholdingTaxDefinition, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `WitholdingTaxDefinition` entities.
   * @returns A request builder for creating requests to retrieve all `WitholdingTaxDefinition` entities.
   */
  getAll(): GetAllRequestBuilder<WitholdingTaxDefinition> {
    return new GetAllRequestBuilder(WitholdingTaxDefinition);
  }

  /**
   * Returns a request builder for creating a `WitholdingTaxDefinition` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WitholdingTaxDefinition`.
   */
  create(entity: WitholdingTaxDefinition): CreateRequestBuilder<WitholdingTaxDefinition> {
    return new CreateRequestBuilder(WitholdingTaxDefinition, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `WitholdingTaxDefinition`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WitholdingTaxDefinition`.
   */
  update(entity: WitholdingTaxDefinition): UpdateRequestBuilder<WitholdingTaxDefinition> {
    return new UpdateRequestBuilder(WitholdingTaxDefinition, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WitholdingTaxDefinition`.
   * @param absEntry Key property. See [[WitholdingTaxDefinition.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `WitholdingTaxDefinition`.
   */
  delete(absEntry: number): DeleteRequestBuilder<WitholdingTaxDefinition>;
  /**
   * Returns a request builder for deleting an entity of type `WitholdingTaxDefinition`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WitholdingTaxDefinition` by taking the entity as a parameter.
   */
  delete(entity: WitholdingTaxDefinition): DeleteRequestBuilder<WitholdingTaxDefinition>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<WitholdingTaxDefinition> {
    return new DeleteRequestBuilder(WitholdingTaxDefinition, absEntryOrEntity instanceof WitholdingTaxDefinition ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
