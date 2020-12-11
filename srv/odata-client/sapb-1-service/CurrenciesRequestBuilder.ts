/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(code: string): GetByKeyRequestBuilderV4<Currencies> {
    return new GetByKeyRequestBuilderV4(Currencies, { Code: code });
  }

  /**
   * Returns a request builder for querying all `Currencies` entities.
   * @returns A request builder for creating requests to retrieve all `Currencies` entities.
   */
  getAll(): GetAllRequestBuilderV4<Currencies> {
    return new GetAllRequestBuilderV4(Currencies);
  }

  /**
   * Returns a request builder for creating a `Currencies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Currencies`.
   */
  create(entity: Currencies): CreateRequestBuilderV4<Currencies> {
    return new CreateRequestBuilderV4(Currencies, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Currencies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Currencies`.
   */
  update(entity: Currencies): UpdateRequestBuilderV4<Currencies> {
    return new UpdateRequestBuilderV4(Currencies, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Currencies`.
   * @param code Key property. See [[Currencies.code]].
   * @returns A request builder for creating requests that delete an entity of type `Currencies`.
   */
  delete(code: string): DeleteRequestBuilderV4<Currencies>;
  /**
   * Returns a request builder for deleting an entity of type `Currencies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Currencies` by taking the entity as a parameter.
   */
  delete(entity: Currencies): DeleteRequestBuilderV4<Currencies>;
  delete(codeOrEntity: any): DeleteRequestBuilderV4<Currencies> {
    return new DeleteRequestBuilderV4(Currencies, codeOrEntity instanceof Currencies ? codeOrEntity : { Code: codeOrEntity! });
  }
}
