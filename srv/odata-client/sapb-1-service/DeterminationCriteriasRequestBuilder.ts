/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { DeterminationCriterias } from './DeterminationCriterias';

/**
 * Request builder class for operations supported on the [[DeterminationCriterias]] entity.
 */
export class DeterminationCriteriasRequestBuilder extends RequestBuilder<DeterminationCriterias> {
  /**
   * Returns a request builder for retrieving one `DeterminationCriterias` entity based on its keys.
   * @param dmcId Key property. See [[DeterminationCriterias.dmcId]].
   * @returns A request builder for creating requests to retrieve one `DeterminationCriterias` entity based on its keys.
   */
  getByKey(dmcId: number): GetByKeyRequestBuilder<DeterminationCriterias> {
    return new GetByKeyRequestBuilder(DeterminationCriterias, { DmcId: dmcId });
  }

  /**
   * Returns a request builder for querying all `DeterminationCriterias` entities.
   * @returns A request builder for creating requests to retrieve all `DeterminationCriterias` entities.
   */
  getAll(): GetAllRequestBuilder<DeterminationCriterias> {
    return new GetAllRequestBuilder(DeterminationCriterias);
  }

  /**
   * Returns a request builder for creating a `DeterminationCriterias` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DeterminationCriterias`.
   */
  create(entity: DeterminationCriterias): CreateRequestBuilder<DeterminationCriterias> {
    return new CreateRequestBuilder(DeterminationCriterias, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `DeterminationCriterias`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DeterminationCriterias`.
   */
  update(entity: DeterminationCriterias): UpdateRequestBuilder<DeterminationCriterias> {
    return new UpdateRequestBuilder(DeterminationCriterias, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DeterminationCriterias`.
   * @param dmcId Key property. See [[DeterminationCriterias.dmcId]].
   * @returns A request builder for creating requests that delete an entity of type `DeterminationCriterias`.
   */
  delete(dmcId: number): DeleteRequestBuilder<DeterminationCriterias>;
  /**
   * Returns a request builder for deleting an entity of type `DeterminationCriterias`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DeterminationCriterias` by taking the entity as a parameter.
   */
  delete(entity: DeterminationCriterias): DeleteRequestBuilder<DeterminationCriterias>;
  delete(dmcIdOrEntity: any): DeleteRequestBuilder<DeterminationCriterias> {
    return new DeleteRequestBuilder(DeterminationCriterias, dmcIdOrEntity instanceof DeterminationCriterias ? dmcIdOrEntity : { DmcId: dmcIdOrEntity! });
  }
}
