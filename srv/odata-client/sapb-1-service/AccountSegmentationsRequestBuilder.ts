/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { AccountSegmentations } from './AccountSegmentations';

/**
 * Request builder class for operations supported on the [[AccountSegmentations]] entity.
 */
export class AccountSegmentationsRequestBuilder extends RequestBuilder<AccountSegmentations> {
  /**
   * Returns a request builder for retrieving one `AccountSegmentations` entity based on its keys.
   * @param numerator Key property. See [[AccountSegmentations.numerator]].
   * @returns A request builder for creating requests to retrieve one `AccountSegmentations` entity based on its keys.
   */
  getByKey(numerator: number): GetByKeyRequestBuilder<AccountSegmentations> {
    return new GetByKeyRequestBuilder(AccountSegmentations, { Numerator: numerator });
  }

  /**
   * Returns a request builder for querying all `AccountSegmentations` entities.
   * @returns A request builder for creating requests to retrieve all `AccountSegmentations` entities.
   */
  getAll(): GetAllRequestBuilder<AccountSegmentations> {
    return new GetAllRequestBuilder(AccountSegmentations);
  }

  /**
   * Returns a request builder for creating a `AccountSegmentations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccountSegmentations`.
   */
  create(entity: AccountSegmentations): CreateRequestBuilder<AccountSegmentations> {
    return new CreateRequestBuilder(AccountSegmentations, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AccountSegmentations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccountSegmentations`.
   */
  update(entity: AccountSegmentations): UpdateRequestBuilder<AccountSegmentations> {
    return new UpdateRequestBuilder(AccountSegmentations, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AccountSegmentations`.
   * @param numerator Key property. See [[AccountSegmentations.numerator]].
   * @returns A request builder for creating requests that delete an entity of type `AccountSegmentations`.
   */
  delete(numerator: number): DeleteRequestBuilder<AccountSegmentations>;
  /**
   * Returns a request builder for deleting an entity of type `AccountSegmentations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccountSegmentations` by taking the entity as a parameter.
   */
  delete(entity: AccountSegmentations): DeleteRequestBuilder<AccountSegmentations>;
  delete(numeratorOrEntity: any): DeleteRequestBuilder<AccountSegmentations> {
    return new DeleteRequestBuilder(AccountSegmentations, numeratorOrEntity instanceof AccountSegmentations ? numeratorOrEntity : { Numerator: numeratorOrEntity! });
  }
}
