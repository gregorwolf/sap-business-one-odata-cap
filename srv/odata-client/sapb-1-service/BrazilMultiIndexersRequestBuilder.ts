/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { BrazilMultiIndexers } from './BrazilMultiIndexers';

/**
 * Request builder class for operations supported on the [[BrazilMultiIndexers]] entity.
 */
export class BrazilMultiIndexersRequestBuilder extends RequestBuilder<BrazilMultiIndexers> {
  /**
   * Returns a request builder for retrieving one `BrazilMultiIndexers` entity based on its keys.
   * @param id Key property. See [[BrazilMultiIndexers.id]].
   * @returns A request builder for creating requests to retrieve one `BrazilMultiIndexers` entity based on its keys.
   */
  getByKey(id: number): GetByKeyRequestBuilder<BrazilMultiIndexers> {
    return new GetByKeyRequestBuilder(BrazilMultiIndexers, { ID: id });
  }

  /**
   * Returns a request builder for querying all `BrazilMultiIndexers` entities.
   * @returns A request builder for creating requests to retrieve all `BrazilMultiIndexers` entities.
   */
  getAll(): GetAllRequestBuilder<BrazilMultiIndexers> {
    return new GetAllRequestBuilder(BrazilMultiIndexers);
  }

  /**
   * Returns a request builder for creating a `BrazilMultiIndexers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BrazilMultiIndexers`.
   */
  create(entity: BrazilMultiIndexers): CreateRequestBuilder<BrazilMultiIndexers> {
    return new CreateRequestBuilder(BrazilMultiIndexers, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BrazilMultiIndexers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BrazilMultiIndexers`.
   */
  update(entity: BrazilMultiIndexers): UpdateRequestBuilder<BrazilMultiIndexers> {
    return new UpdateRequestBuilder(BrazilMultiIndexers, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BrazilMultiIndexers`.
   * @param id Key property. See [[BrazilMultiIndexers.id]].
   * @returns A request builder for creating requests that delete an entity of type `BrazilMultiIndexers`.
   */
  delete(id: number): DeleteRequestBuilder<BrazilMultiIndexers>;
  /**
   * Returns a request builder for deleting an entity of type `BrazilMultiIndexers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BrazilMultiIndexers` by taking the entity as a parameter.
   */
  delete(entity: BrazilMultiIndexers): DeleteRequestBuilder<BrazilMultiIndexers>;
  delete(idOrEntity: any): DeleteRequestBuilder<BrazilMultiIndexers> {
    return new DeleteRequestBuilder(BrazilMultiIndexers, idOrEntity instanceof BrazilMultiIndexers ? idOrEntity : { ID: idOrEntity! });
  }
}
