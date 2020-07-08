/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { BrazilStringIndexers } from './BrazilStringIndexers';

/**
 * Request builder class for operations supported on the [[BrazilStringIndexers]] entity.
 */
export class BrazilStringIndexersRequestBuilder extends RequestBuilder<BrazilStringIndexers> {
  /**
   * Returns a request builder for retrieving one `BrazilStringIndexers` entity based on its keys.
   * @param id Key property. See [[BrazilStringIndexers.id]].
   * @returns A request builder for creating requests to retrieve one `BrazilStringIndexers` entity based on its keys.
   */
  getByKey(id: number): GetByKeyRequestBuilder<BrazilStringIndexers> {
    return new GetByKeyRequestBuilder(BrazilStringIndexers, { ID: id });
  }

  /**
   * Returns a request builder for querying all `BrazilStringIndexers` entities.
   * @returns A request builder for creating requests to retrieve all `BrazilStringIndexers` entities.
   */
  getAll(): GetAllRequestBuilder<BrazilStringIndexers> {
    return new GetAllRequestBuilder(BrazilStringIndexers);
  }

  /**
   * Returns a request builder for creating a `BrazilStringIndexers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BrazilStringIndexers`.
   */
  create(entity: BrazilStringIndexers): CreateRequestBuilder<BrazilStringIndexers> {
    return new CreateRequestBuilder(BrazilStringIndexers, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BrazilStringIndexers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BrazilStringIndexers`.
   */
  update(entity: BrazilStringIndexers): UpdateRequestBuilder<BrazilStringIndexers> {
    return new UpdateRequestBuilder(BrazilStringIndexers, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BrazilStringIndexers`.
   * @param id Key property. See [[BrazilStringIndexers.id]].
   * @returns A request builder for creating requests that delete an entity of type `BrazilStringIndexers`.
   */
  delete(id: number): DeleteRequestBuilder<BrazilStringIndexers>;
  /**
   * Returns a request builder for deleting an entity of type `BrazilStringIndexers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BrazilStringIndexers` by taking the entity as a parameter.
   */
  delete(entity: BrazilStringIndexers): DeleteRequestBuilder<BrazilStringIndexers>;
  delete(idOrEntity: any): DeleteRequestBuilder<BrazilStringIndexers> {
    return new DeleteRequestBuilder(BrazilStringIndexers, idOrEntity instanceof BrazilStringIndexers ? idOrEntity : { ID: idOrEntity! });
  }
}
