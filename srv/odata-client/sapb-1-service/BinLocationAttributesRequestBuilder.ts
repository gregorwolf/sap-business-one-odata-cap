/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { BinLocationAttributes } from './BinLocationAttributes';

/**
 * Request builder class for operations supported on the [[BinLocationAttributes]] entity.
 */
export class BinLocationAttributesRequestBuilder extends RequestBuilder<BinLocationAttributes> {
  /**
   * Returns a request builder for retrieving one `BinLocationAttributes` entity based on its keys.
   * @param absEntry Key property. See [[BinLocationAttributes.absEntry]].
   * @returns A request builder for creating requests to retrieve one `BinLocationAttributes` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilder<BinLocationAttributes> {
    return new GetByKeyRequestBuilder(BinLocationAttributes, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `BinLocationAttributes` entities.
   * @returns A request builder for creating requests to retrieve all `BinLocationAttributes` entities.
   */
  getAll(): GetAllRequestBuilder<BinLocationAttributes> {
    return new GetAllRequestBuilder(BinLocationAttributes);
  }

  /**
   * Returns a request builder for creating a `BinLocationAttributes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BinLocationAttributes`.
   */
  create(entity: BinLocationAttributes): CreateRequestBuilder<BinLocationAttributes> {
    return new CreateRequestBuilder(BinLocationAttributes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BinLocationAttributes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BinLocationAttributes`.
   */
  update(entity: BinLocationAttributes): UpdateRequestBuilder<BinLocationAttributes> {
    return new UpdateRequestBuilder(BinLocationAttributes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BinLocationAttributes`.
   * @param absEntry Key property. See [[BinLocationAttributes.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `BinLocationAttributes`.
   */
  delete(absEntry: number): DeleteRequestBuilder<BinLocationAttributes>;
  /**
   * Returns a request builder for deleting an entity of type `BinLocationAttributes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BinLocationAttributes` by taking the entity as a parameter.
   */
  delete(entity: BinLocationAttributes): DeleteRequestBuilder<BinLocationAttributes>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<BinLocationAttributes> {
    return new DeleteRequestBuilder(BinLocationAttributes, absEntryOrEntity instanceof BinLocationAttributes ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
