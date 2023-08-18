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
import { TaxReplStateSubs } from './TaxReplStateSubs';

/**
 * Request builder class for operations supported on the {@link TaxReplStateSubs} entity.
 */
export class TaxReplStateSubsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxReplStateSubs<T>, T> {
  /**
   * Returns a request builder for retrieving one `TaxReplStateSubs` entity based on its keys.
   * @param state Key property. See {@link TaxReplStateSubs.state}.
   * @returns A request builder for creating requests to retrieve one `TaxReplStateSubs` entity based on its keys.
   */
  getByKey(
    state: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxReplStateSubs<T>, T> {
    return new GetByKeyRequestBuilder<TaxReplStateSubs<T>, T>(this.entityApi, {
      State: state
    });
  }

  /**
   * Returns a request builder for querying all `TaxReplStateSubs` entities.
   * @returns A request builder for creating requests to retrieve all `TaxReplStateSubs` entities.
   */
  getAll(): GetAllRequestBuilder<TaxReplStateSubs<T>, T> {
    return new GetAllRequestBuilder<TaxReplStateSubs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxReplStateSubs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxReplStateSubs`.
   */
  create(
    entity: TaxReplStateSubs<T>
  ): CreateRequestBuilder<TaxReplStateSubs<T>, T> {
    return new CreateRequestBuilder<TaxReplStateSubs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxReplStateSubs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxReplStateSubs`.
   */
  update(
    entity: TaxReplStateSubs<T>
  ): UpdateRequestBuilder<TaxReplStateSubs<T>, T> {
    return new UpdateRequestBuilder<TaxReplStateSubs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxReplStateSubs`.
   * @param state Key property. See {@link TaxReplStateSubs.state}.
   * @returns A request builder for creating requests that delete an entity of type `TaxReplStateSubs`.
   */
  delete(state: string): DeleteRequestBuilder<TaxReplStateSubs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxReplStateSubs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxReplStateSubs` by taking the entity as a parameter.
   */
  delete(
    entity: TaxReplStateSubs<T>
  ): DeleteRequestBuilder<TaxReplStateSubs<T>, T>;
  delete(stateOrEntity: any): DeleteRequestBuilder<TaxReplStateSubs<T>, T> {
    return new DeleteRequestBuilder<TaxReplStateSubs<T>, T>(
      this.entityApi,
      stateOrEntity instanceof TaxReplStateSubs
        ? stateOrEntity
        : { State: stateOrEntity! }
    );
  }
}
