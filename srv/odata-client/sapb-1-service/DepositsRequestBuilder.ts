/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Deposits } from './Deposits';

/**
 * Request builder class for operations supported on the [[Deposits]] entity.
 */
export class DepositsRequestBuilder extends RequestBuilder<Deposits> {
  /**
   * Returns a request builder for retrieving one `Deposits` entity based on its keys.
   * @param absEntry Key property. See [[Deposits.absEntry]].
   * @returns A request builder for creating requests to retrieve one `Deposits` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilder<Deposits> {
    return new GetByKeyRequestBuilder(Deposits, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `Deposits` entities.
   * @returns A request builder for creating requests to retrieve all `Deposits` entities.
   */
  getAll(): GetAllRequestBuilder<Deposits> {
    return new GetAllRequestBuilder(Deposits);
  }

  /**
   * Returns a request builder for creating a `Deposits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Deposits`.
   */
  create(entity: Deposits): CreateRequestBuilder<Deposits> {
    return new CreateRequestBuilder(Deposits, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Deposits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Deposits`.
   */
  update(entity: Deposits): UpdateRequestBuilder<Deposits> {
    return new UpdateRequestBuilder(Deposits, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Deposits`.
   * @param absEntry Key property. See [[Deposits.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `Deposits`.
   */
  delete(absEntry: number): DeleteRequestBuilder<Deposits>;
  /**
   * Returns a request builder for deleting an entity of type `Deposits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Deposits` by taking the entity as a parameter.
   */
  delete(entity: Deposits): DeleteRequestBuilder<Deposits>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<Deposits> {
    return new DeleteRequestBuilder(Deposits, absEntryOrEntity instanceof Deposits ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
