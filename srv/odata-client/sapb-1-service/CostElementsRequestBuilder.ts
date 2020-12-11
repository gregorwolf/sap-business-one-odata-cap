/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { CostElements } from './CostElements';

/**
 * Request builder class for operations supported on the [[CostElements]] entity.
 */
export class CostElementsRequestBuilder extends RequestBuilder<CostElements> {
  /**
   * Returns a request builder for retrieving one `CostElements` entity based on its keys.
   * @param code Key property. See [[CostElements.code]].
   * @returns A request builder for creating requests to retrieve one `CostElements` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilderV4<CostElements> {
    return new GetByKeyRequestBuilderV4(CostElements, { Code: code });
  }

  /**
   * Returns a request builder for querying all `CostElements` entities.
   * @returns A request builder for creating requests to retrieve all `CostElements` entities.
   */
  getAll(): GetAllRequestBuilderV4<CostElements> {
    return new GetAllRequestBuilderV4(CostElements);
  }

  /**
   * Returns a request builder for creating a `CostElements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostElements`.
   */
  create(entity: CostElements): CreateRequestBuilderV4<CostElements> {
    return new CreateRequestBuilderV4(CostElements, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CostElements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostElements`.
   */
  update(entity: CostElements): UpdateRequestBuilderV4<CostElements> {
    return new UpdateRequestBuilderV4(CostElements, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostElements`.
   * @param code Key property. See [[CostElements.code]].
   * @returns A request builder for creating requests that delete an entity of type `CostElements`.
   */
  delete(code: string): DeleteRequestBuilderV4<CostElements>;
  /**
   * Returns a request builder for deleting an entity of type `CostElements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostElements` by taking the entity as a parameter.
   */
  delete(entity: CostElements): DeleteRequestBuilderV4<CostElements>;
  delete(codeOrEntity: any): DeleteRequestBuilderV4<CostElements> {
    return new DeleteRequestBuilderV4(CostElements, codeOrEntity instanceof CostElements ? codeOrEntity : { Code: codeOrEntity! });
  }
}
