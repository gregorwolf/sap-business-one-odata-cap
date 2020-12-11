/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { BrazilNumericIndexers } from './BrazilNumericIndexers';

/**
 * Request builder class for operations supported on the [[BrazilNumericIndexers]] entity.
 */
export class BrazilNumericIndexersRequestBuilder extends RequestBuilder<BrazilNumericIndexers> {
  /**
   * Returns a request builder for retrieving one `BrazilNumericIndexers` entity based on its keys.
   * @param id Key property. See [[BrazilNumericIndexers.id]].
   * @returns A request builder for creating requests to retrieve one `BrazilNumericIndexers` entity based on its keys.
   */
  getByKey(id: number): GetByKeyRequestBuilderV4<BrazilNumericIndexers> {
    return new GetByKeyRequestBuilderV4(BrazilNumericIndexers, { ID: id });
  }

  /**
   * Returns a request builder for querying all `BrazilNumericIndexers` entities.
   * @returns A request builder for creating requests to retrieve all `BrazilNumericIndexers` entities.
   */
  getAll(): GetAllRequestBuilderV4<BrazilNumericIndexers> {
    return new GetAllRequestBuilderV4(BrazilNumericIndexers);
  }

  /**
   * Returns a request builder for creating a `BrazilNumericIndexers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BrazilNumericIndexers`.
   */
  create(entity: BrazilNumericIndexers): CreateRequestBuilderV4<BrazilNumericIndexers> {
    return new CreateRequestBuilderV4(BrazilNumericIndexers, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BrazilNumericIndexers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BrazilNumericIndexers`.
   */
  update(entity: BrazilNumericIndexers): UpdateRequestBuilderV4<BrazilNumericIndexers> {
    return new UpdateRequestBuilderV4(BrazilNumericIndexers, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BrazilNumericIndexers`.
   * @param id Key property. See [[BrazilNumericIndexers.id]].
   * @returns A request builder for creating requests that delete an entity of type `BrazilNumericIndexers`.
   */
  delete(id: number): DeleteRequestBuilderV4<BrazilNumericIndexers>;
  /**
   * Returns a request builder for deleting an entity of type `BrazilNumericIndexers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BrazilNumericIndexers` by taking the entity as a parameter.
   */
  delete(entity: BrazilNumericIndexers): DeleteRequestBuilderV4<BrazilNumericIndexers>;
  delete(idOrEntity: any): DeleteRequestBuilderV4<BrazilNumericIndexers> {
    return new DeleteRequestBuilderV4(BrazilNumericIndexers, idOrEntity instanceof BrazilNumericIndexers ? idOrEntity : { ID: idOrEntity! });
  }
}
