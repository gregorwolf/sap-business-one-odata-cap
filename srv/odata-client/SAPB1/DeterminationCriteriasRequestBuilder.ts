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
import { DeterminationCriterias } from './DeterminationCriterias';

/**
 * Request builder class for operations supported on the {@link DeterminationCriterias} entity.
 */
export class DeterminationCriteriasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DeterminationCriterias<T>, T> {
  /**
   * Returns a request builder for retrieving one `DeterminationCriterias` entity based on its keys.
   * @param dmcId Key property. See {@link DeterminationCriterias.dmcId}.
   * @returns A request builder for creating requests to retrieve one `DeterminationCriterias` entity based on its keys.
   */
  getByKey(
    dmcId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<DeterminationCriterias<T>, T> {
    return new GetByKeyRequestBuilder<DeterminationCriterias<T>, T>(
      this.entityApi,
      { DmcId: dmcId }
    );
  }

  /**
   * Returns a request builder for querying all `DeterminationCriterias` entities.
   * @returns A request builder for creating requests to retrieve all `DeterminationCriterias` entities.
   */
  getAll(): GetAllRequestBuilder<DeterminationCriterias<T>, T> {
    return new GetAllRequestBuilder<DeterminationCriterias<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DeterminationCriterias` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DeterminationCriterias`.
   */
  create(
    entity: DeterminationCriterias<T>
  ): CreateRequestBuilder<DeterminationCriterias<T>, T> {
    return new CreateRequestBuilder<DeterminationCriterias<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DeterminationCriterias`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DeterminationCriterias`.
   */
  update(
    entity: DeterminationCriterias<T>
  ): UpdateRequestBuilder<DeterminationCriterias<T>, T> {
    return new UpdateRequestBuilder<DeterminationCriterias<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DeterminationCriterias`.
   * @param dmcId Key property. See {@link DeterminationCriterias.dmcId}.
   * @returns A request builder for creating requests that delete an entity of type `DeterminationCriterias`.
   */
  delete(dmcId: number): DeleteRequestBuilder<DeterminationCriterias<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DeterminationCriterias`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DeterminationCriterias` by taking the entity as a parameter.
   */
  delete(
    entity: DeterminationCriterias<T>
  ): DeleteRequestBuilder<DeterminationCriterias<T>, T>;
  delete(
    dmcIdOrEntity: any
  ): DeleteRequestBuilder<DeterminationCriterias<T>, T> {
    return new DeleteRequestBuilder<DeterminationCriterias<T>, T>(
      this.entityApi,
      dmcIdOrEntity instanceof DeterminationCriterias
        ? dmcIdOrEntity
        : { DmcId: dmcIdOrEntity! }
    );
  }
}
