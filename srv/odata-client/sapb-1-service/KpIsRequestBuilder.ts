/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { KpIs } from './KpIs';

/**
 * Request builder class for operations supported on the [[KpIs]] entity.
 */
export class KpIsRequestBuilder extends RequestBuilder<KpIs> {
  /**
   * Returns a request builder for retrieving one `KpIs` entity based on its keys.
   * @param kpiCode Key property. See [[KpIs.kpiCode]].
   * @returns A request builder for creating requests to retrieve one `KpIs` entity based on its keys.
   */
  getByKey(kpiCode: string): GetByKeyRequestBuilder<KpIs> {
    return new GetByKeyRequestBuilder(KpIs, { KPICode: kpiCode });
  }

  /**
   * Returns a request builder for querying all `KpIs` entities.
   * @returns A request builder for creating requests to retrieve all `KpIs` entities.
   */
  getAll(): GetAllRequestBuilder<KpIs> {
    return new GetAllRequestBuilder(KpIs);
  }

  /**
   * Returns a request builder for creating a `KpIs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `KpIs`.
   */
  create(entity: KpIs): CreateRequestBuilder<KpIs> {
    return new CreateRequestBuilder(KpIs, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `KpIs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `KpIs`.
   */
  update(entity: KpIs): UpdateRequestBuilder<KpIs> {
    return new UpdateRequestBuilder(KpIs, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `KpIs`.
   * @param kpiCode Key property. See [[KpIs.kpiCode]].
   * @returns A request builder for creating requests that delete an entity of type `KpIs`.
   */
  delete(kpiCode: string): DeleteRequestBuilder<KpIs>;
  /**
   * Returns a request builder for deleting an entity of type `KpIs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `KpIs` by taking the entity as a parameter.
   */
  delete(entity: KpIs): DeleteRequestBuilder<KpIs>;
  delete(kpiCodeOrEntity: any): DeleteRequestBuilder<KpIs> {
    return new DeleteRequestBuilder(KpIs, kpiCodeOrEntity instanceof KpIs ? kpiCodeOrEntity : { KPICode: kpiCodeOrEntity! });
  }
}
