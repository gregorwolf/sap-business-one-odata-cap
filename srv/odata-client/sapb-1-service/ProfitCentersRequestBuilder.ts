/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ProfitCenters } from './ProfitCenters';

/**
 * Request builder class for operations supported on the [[ProfitCenters]] entity.
 */
export class ProfitCentersRequestBuilder extends RequestBuilder<ProfitCenters> {
  /**
   * Returns a request builder for retrieving one `ProfitCenters` entity based on its keys.
   * @param centerCode Key property. See [[ProfitCenters.centerCode]].
   * @returns A request builder for creating requests to retrieve one `ProfitCenters` entity based on its keys.
   */
  getByKey(centerCode: string): GetByKeyRequestBuilder<ProfitCenters> {
    return new GetByKeyRequestBuilder(ProfitCenters, { CenterCode: centerCode });
  }

  /**
   * Returns a request builder for querying all `ProfitCenters` entities.
   * @returns A request builder for creating requests to retrieve all `ProfitCenters` entities.
   */
  getAll(): GetAllRequestBuilder<ProfitCenters> {
    return new GetAllRequestBuilder(ProfitCenters);
  }

  /**
   * Returns a request builder for creating a `ProfitCenters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProfitCenters`.
   */
  create(entity: ProfitCenters): CreateRequestBuilder<ProfitCenters> {
    return new CreateRequestBuilder(ProfitCenters, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ProfitCenters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProfitCenters`.
   */
  update(entity: ProfitCenters): UpdateRequestBuilder<ProfitCenters> {
    return new UpdateRequestBuilder(ProfitCenters, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProfitCenters`.
   * @param centerCode Key property. See [[ProfitCenters.centerCode]].
   * @returns A request builder for creating requests that delete an entity of type `ProfitCenters`.
   */
  delete(centerCode: string): DeleteRequestBuilder<ProfitCenters>;
  /**
   * Returns a request builder for deleting an entity of type `ProfitCenters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProfitCenters` by taking the entity as a parameter.
   */
  delete(entity: ProfitCenters): DeleteRequestBuilder<ProfitCenters>;
  delete(centerCodeOrEntity: any): DeleteRequestBuilder<ProfitCenters> {
    return new DeleteRequestBuilder(ProfitCenters, centerCodeOrEntity instanceof ProfitCenters ? centerCodeOrEntity : { CenterCode: centerCodeOrEntity! });
  }
}
