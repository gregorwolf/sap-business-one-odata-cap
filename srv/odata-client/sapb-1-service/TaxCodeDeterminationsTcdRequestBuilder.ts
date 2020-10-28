/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { TaxCodeDeterminationsTcd } from './TaxCodeDeterminationsTcd';

/**
 * Request builder class for operations supported on the [[TaxCodeDeterminationsTcd]] entity.
 */
export class TaxCodeDeterminationsTcdRequestBuilder extends RequestBuilder<TaxCodeDeterminationsTcd> {
  /**
   * Returns a request builder for retrieving one `TaxCodeDeterminationsTcd` entity based on its keys.
   * @param absId Key property. See [[TaxCodeDeterminationsTcd.absId]].
   * @returns A request builder for creating requests to retrieve one `TaxCodeDeterminationsTcd` entity based on its keys.
   */
  getByKey(absId: number): GetByKeyRequestBuilder<TaxCodeDeterminationsTcd> {
    return new GetByKeyRequestBuilder(TaxCodeDeterminationsTcd, { AbsId: absId });
  }

  /**
   * Returns a request builder for querying all `TaxCodeDeterminationsTcd` entities.
   * @returns A request builder for creating requests to retrieve all `TaxCodeDeterminationsTcd` entities.
   */
  getAll(): GetAllRequestBuilder<TaxCodeDeterminationsTcd> {
    return new GetAllRequestBuilder(TaxCodeDeterminationsTcd);
  }

  /**
   * Returns a request builder for creating a `TaxCodeDeterminationsTcd` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxCodeDeterminationsTcd`.
   */
  create(entity: TaxCodeDeterminationsTcd): CreateRequestBuilder<TaxCodeDeterminationsTcd> {
    return new CreateRequestBuilder(TaxCodeDeterminationsTcd, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `TaxCodeDeterminationsTcd`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxCodeDeterminationsTcd`.
   */
  update(entity: TaxCodeDeterminationsTcd): UpdateRequestBuilder<TaxCodeDeterminationsTcd> {
    return new UpdateRequestBuilder(TaxCodeDeterminationsTcd, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxCodeDeterminationsTcd`.
   * @param absId Key property. See [[TaxCodeDeterminationsTcd.absId]].
   * @returns A request builder for creating requests that delete an entity of type `TaxCodeDeterminationsTcd`.
   */
  delete(absId: number): DeleteRequestBuilder<TaxCodeDeterminationsTcd>;
  /**
   * Returns a request builder for deleting an entity of type `TaxCodeDeterminationsTcd`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxCodeDeterminationsTcd` by taking the entity as a parameter.
   */
  delete(entity: TaxCodeDeterminationsTcd): DeleteRequestBuilder<TaxCodeDeterminationsTcd>;
  delete(absIdOrEntity: any): DeleteRequestBuilder<TaxCodeDeterminationsTcd> {
    return new DeleteRequestBuilder(TaxCodeDeterminationsTcd, absIdOrEntity instanceof TaxCodeDeterminationsTcd ? absIdOrEntity : { AbsId: absIdOrEntity! });
  }
}