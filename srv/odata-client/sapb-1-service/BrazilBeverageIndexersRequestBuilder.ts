/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { BrazilBeverageIndexers } from './BrazilBeverageIndexers';

/**
 * Request builder class for operations supported on the [[BrazilBeverageIndexers]] entity.
 */
export class BrazilBeverageIndexersRequestBuilder extends RequestBuilder<BrazilBeverageIndexers> {
  /**
   * Returns a request builder for retrieving one `BrazilBeverageIndexers` entity based on its keys.
   * @param beverageId Key property. See [[BrazilBeverageIndexers.beverageId]].
   * @returns A request builder for creating requests to retrieve one `BrazilBeverageIndexers` entity based on its keys.
   */
  getByKey(beverageId: number): GetByKeyRequestBuilder<BrazilBeverageIndexers> {
    return new GetByKeyRequestBuilder(BrazilBeverageIndexers, { BeverageID: beverageId });
  }

  /**
   * Returns a request builder for querying all `BrazilBeverageIndexers` entities.
   * @returns A request builder for creating requests to retrieve all `BrazilBeverageIndexers` entities.
   */
  getAll(): GetAllRequestBuilder<BrazilBeverageIndexers> {
    return new GetAllRequestBuilder(BrazilBeverageIndexers);
  }

  /**
   * Returns a request builder for creating a `BrazilBeverageIndexers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BrazilBeverageIndexers`.
   */
  create(entity: BrazilBeverageIndexers): CreateRequestBuilder<BrazilBeverageIndexers> {
    return new CreateRequestBuilder(BrazilBeverageIndexers, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BrazilBeverageIndexers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BrazilBeverageIndexers`.
   */
  update(entity: BrazilBeverageIndexers): UpdateRequestBuilder<BrazilBeverageIndexers> {
    return new UpdateRequestBuilder(BrazilBeverageIndexers, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BrazilBeverageIndexers`.
   * @param beverageId Key property. See [[BrazilBeverageIndexers.beverageId]].
   * @returns A request builder for creating requests that delete an entity of type `BrazilBeverageIndexers`.
   */
  delete(beverageId: number): DeleteRequestBuilder<BrazilBeverageIndexers>;
  /**
   * Returns a request builder for deleting an entity of type `BrazilBeverageIndexers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BrazilBeverageIndexers` by taking the entity as a parameter.
   */
  delete(entity: BrazilBeverageIndexers): DeleteRequestBuilder<BrazilBeverageIndexers>;
  delete(beverageIdOrEntity: any): DeleteRequestBuilder<BrazilBeverageIndexers> {
    return new DeleteRequestBuilder(BrazilBeverageIndexers, beverageIdOrEntity instanceof BrazilBeverageIndexers ? beverageIdOrEntity : { BeverageID: beverageIdOrEntity! });
  }
}
