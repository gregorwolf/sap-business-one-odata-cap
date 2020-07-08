/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Currencies } from './Currencies';

/**
 * Request builder class for operations supported on the [[Currencies]] entity.
 */
export class CurrenciesRequestBuilder extends RequestBuilder<Currencies> {
  /**
   * Returns a request builder for retrieving one `Currencies` entity based on its keys.
   * @param code Key property. See [[Currencies.code]].
   * @returns A request builder for creating requests to retrieve one `Currencies` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilder<Currencies> {
    return new GetByKeyRequestBuilder(Currencies, { Code: code });
  }

  /**
   * Returns a request builder for querying all `Currencies` entities.
   * @returns A request builder for creating requests to retrieve all `Currencies` entities.
   */
  getAll(): GetAllRequestBuilder<Currencies> {
    return new GetAllRequestBuilder(Currencies);
  }

  /**
   * Returns a request builder for creating a `Currencies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Currencies`.
   */
  create(entity: Currencies): CreateRequestBuilder<Currencies> {
    return new CreateRequestBuilder(Currencies, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Currencies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Currencies`.
   */
  update(entity: Currencies): UpdateRequestBuilder<Currencies> {
    return new UpdateRequestBuilder(Currencies, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Currencies`.
   * @param code Key property. See [[Currencies.code]].
   * @returns A request builder for creating requests that delete an entity of type `Currencies`.
   */
  delete(code: string): DeleteRequestBuilder<Currencies>;
  /**
   * Returns a request builder for deleting an entity of type `Currencies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Currencies` by taking the entity as a parameter.
   */
  delete(entity: Currencies): DeleteRequestBuilder<Currencies>;
  delete(codeOrEntity: any): DeleteRequestBuilder<Currencies> {
    return new DeleteRequestBuilder(Currencies, codeOrEntity instanceof Currencies ? codeOrEntity : { Code: codeOrEntity! });
  }
}
