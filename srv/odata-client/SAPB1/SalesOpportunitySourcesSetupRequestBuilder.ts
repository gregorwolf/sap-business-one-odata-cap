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
import { SalesOpportunitySourcesSetup } from './SalesOpportunitySourcesSetup';

/**
 * Request builder class for operations supported on the {@link SalesOpportunitySourcesSetup} entity.
 */
export class SalesOpportunitySourcesSetupRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOpportunitySourcesSetup<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOpportunitySourcesSetup` entity based on its keys.
   * @param sequenceNo Key property. See {@link SalesOpportunitySourcesSetup.sequenceNo}.
   * @returns A request builder for creating requests to retrieve one `SalesOpportunitySourcesSetup` entity based on its keys.
   */
  getByKey(
    sequenceNo: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<SalesOpportunitySourcesSetup<T>, T> {
    return new GetByKeyRequestBuilder<SalesOpportunitySourcesSetup<T>, T>(
      this.entityApi,
      { SequenceNo: sequenceNo }
    );
  }

  /**
   * Returns a request builder for querying all `SalesOpportunitySourcesSetup` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOpportunitySourcesSetup` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOpportunitySourcesSetup<T>, T> {
    return new GetAllRequestBuilder<SalesOpportunitySourcesSetup<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesOpportunitySourcesSetup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOpportunitySourcesSetup`.
   */
  create(
    entity: SalesOpportunitySourcesSetup<T>
  ): CreateRequestBuilder<SalesOpportunitySourcesSetup<T>, T> {
    return new CreateRequestBuilder<SalesOpportunitySourcesSetup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOpportunitySourcesSetup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOpportunitySourcesSetup`.
   */
  update(
    entity: SalesOpportunitySourcesSetup<T>
  ): UpdateRequestBuilder<SalesOpportunitySourcesSetup<T>, T> {
    return new UpdateRequestBuilder<SalesOpportunitySourcesSetup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOpportunitySourcesSetup`.
   * @param sequenceNo Key property. See {@link SalesOpportunitySourcesSetup.sequenceNo}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOpportunitySourcesSetup`.
   */
  delete(
    sequenceNo: number
  ): DeleteRequestBuilder<SalesOpportunitySourcesSetup<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOpportunitySourcesSetup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOpportunitySourcesSetup` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOpportunitySourcesSetup<T>
  ): DeleteRequestBuilder<SalesOpportunitySourcesSetup<T>, T>;
  delete(
    sequenceNoOrEntity: any
  ): DeleteRequestBuilder<SalesOpportunitySourcesSetup<T>, T> {
    return new DeleteRequestBuilder<SalesOpportunitySourcesSetup<T>, T>(
      this.entityApi,
      sequenceNoOrEntity instanceof SalesOpportunitySourcesSetup
        ? sequenceNoOrEntity
        : { SequenceNo: sequenceNoOrEntity! }
    );
  }
}
