/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(numerator: number): GetByKeyRequestBuilderV4<AccountSegmentations> {
    return new GetByKeyRequestBuilderV4(AccountSegmentations, { Numerator: numerator });
  }

  /**
   * Returns a request builder for querying all `AccountSegmentations` entities.
   * @returns A request builder for creating requests to retrieve all `AccountSegmentations` entities.
   */
  getAll(): GetAllRequestBuilderV4<AccountSegmentations> {
    return new GetAllRequestBuilderV4(AccountSegmentations);
  }

  /**
   * Returns a request builder for creating a `AccountSegmentations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccountSegmentations`.
   */
  create(entity: AccountSegmentations): CreateRequestBuilderV4<AccountSegmentations> {
    return new CreateRequestBuilderV4(AccountSegmentations, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AccountSegmentations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccountSegmentations`.
   */
  update(entity: AccountSegmentations): UpdateRequestBuilderV4<AccountSegmentations> {
    return new UpdateRequestBuilderV4(AccountSegmentations, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AccountSegmentations`.
   * @param numerator Key property. See [[AccountSegmentations.numerator]].
   * @returns A request builder for creating requests that delete an entity of type `AccountSegmentations`.
   */
  delete(numerator: number): DeleteRequestBuilderV4<AccountSegmentations>;
  /**
   * Returns a request builder for deleting an entity of type `AccountSegmentations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccountSegmentations` by taking the entity as a parameter.
   */
  delete(entity: AccountSegmentations): DeleteRequestBuilderV4<AccountSegmentations>;
  delete(numeratorOrEntity: any): DeleteRequestBuilderV4<AccountSegmentations> {
    return new DeleteRequestBuilderV4(AccountSegmentations, numeratorOrEntity instanceof AccountSegmentations ? numeratorOrEntity : { Numerator: numeratorOrEntity! });
  }
}
