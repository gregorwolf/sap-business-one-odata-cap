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
import { WitholdingTaxDefinition } from './WitholdingTaxDefinition';

/**
 * Request builder class for operations supported on the {@link WitholdingTaxDefinition} entity.
 */
export class WitholdingTaxDefinitionRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WitholdingTaxDefinition<T>, T> {
  /**
   * Returns a request builder for retrieving one `WitholdingTaxDefinition` entity based on its keys.
   * @param absEntry Key property. See {@link WitholdingTaxDefinition.absEntry}.
   * @returns A request builder for creating requests to retrieve one `WitholdingTaxDefinition` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<WitholdingTaxDefinition<T>, T> {
    return new GetByKeyRequestBuilder<WitholdingTaxDefinition<T>, T>(
      this.entityApi,
      { AbsEntry: absEntry }
    );
  }

  /**
   * Returns a request builder for querying all `WitholdingTaxDefinition` entities.
   * @returns A request builder for creating requests to retrieve all `WitholdingTaxDefinition` entities.
   */
  getAll(): GetAllRequestBuilder<WitholdingTaxDefinition<T>, T> {
    return new GetAllRequestBuilder<WitholdingTaxDefinition<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WitholdingTaxDefinition` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WitholdingTaxDefinition`.
   */
  create(
    entity: WitholdingTaxDefinition<T>
  ): CreateRequestBuilder<WitholdingTaxDefinition<T>, T> {
    return new CreateRequestBuilder<WitholdingTaxDefinition<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WitholdingTaxDefinition`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WitholdingTaxDefinition`.
   */
  update(
    entity: WitholdingTaxDefinition<T>
  ): UpdateRequestBuilder<WitholdingTaxDefinition<T>, T> {
    return new UpdateRequestBuilder<WitholdingTaxDefinition<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WitholdingTaxDefinition`.
   * @param absEntry Key property. See {@link WitholdingTaxDefinition.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `WitholdingTaxDefinition`.
   */
  delete(absEntry: number): DeleteRequestBuilder<WitholdingTaxDefinition<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WitholdingTaxDefinition`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WitholdingTaxDefinition` by taking the entity as a parameter.
   */
  delete(
    entity: WitholdingTaxDefinition<T>
  ): DeleteRequestBuilder<WitholdingTaxDefinition<T>, T>;
  delete(
    absEntryOrEntity: any
  ): DeleteRequestBuilder<WitholdingTaxDefinition<T>, T> {
    return new DeleteRequestBuilder<WitholdingTaxDefinition<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof WitholdingTaxDefinition
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
