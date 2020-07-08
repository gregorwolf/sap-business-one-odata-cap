/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
  getByKey(code: string): GetByKeyRequestBuilder<CostElements> {
    return new GetByKeyRequestBuilder(CostElements, { Code: code });
  }

  /**
   * Returns a request builder for querying all `CostElements` entities.
   * @returns A request builder for creating requests to retrieve all `CostElements` entities.
   */
  getAll(): GetAllRequestBuilder<CostElements> {
    return new GetAllRequestBuilder(CostElements);
  }

  /**
   * Returns a request builder for creating a `CostElements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostElements`.
   */
  create(entity: CostElements): CreateRequestBuilder<CostElements> {
    return new CreateRequestBuilder(CostElements, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CostElements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostElements`.
   */
  update(entity: CostElements): UpdateRequestBuilder<CostElements> {
    return new UpdateRequestBuilder(CostElements, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostElements`.
   * @param code Key property. See [[CostElements.code]].
   * @returns A request builder for creating requests that delete an entity of type `CostElements`.
   */
  delete(code: string): DeleteRequestBuilder<CostElements>;
  /**
   * Returns a request builder for deleting an entity of type `CostElements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostElements` by taking the entity as a parameter.
   */
  delete(entity: CostElements): DeleteRequestBuilder<CostElements>;
  delete(codeOrEntity: any): DeleteRequestBuilder<CostElements> {
    return new DeleteRequestBuilder(CostElements, codeOrEntity instanceof CostElements ? codeOrEntity : { Code: codeOrEntity! });
  }
}
