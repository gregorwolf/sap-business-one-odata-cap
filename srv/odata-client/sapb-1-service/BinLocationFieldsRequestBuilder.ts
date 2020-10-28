/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { BinLocationFields } from './BinLocationFields';

/**
 * Request builder class for operations supported on the [[BinLocationFields]] entity.
 */
export class BinLocationFieldsRequestBuilder extends RequestBuilder<BinLocationFields> {
  /**
   * Returns a request builder for retrieving one `BinLocationFields` entity based on its keys.
   * @param absEntry Key property. See [[BinLocationFields.absEntry]].
   * @returns A request builder for creating requests to retrieve one `BinLocationFields` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilder<BinLocationFields> {
    return new GetByKeyRequestBuilder(BinLocationFields, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `BinLocationFields` entities.
   * @returns A request builder for creating requests to retrieve all `BinLocationFields` entities.
   */
  getAll(): GetAllRequestBuilder<BinLocationFields> {
    return new GetAllRequestBuilder(BinLocationFields);
  }

  /**
   * Returns a request builder for creating a `BinLocationFields` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BinLocationFields`.
   */
  create(entity: BinLocationFields): CreateRequestBuilder<BinLocationFields> {
    return new CreateRequestBuilder(BinLocationFields, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BinLocationFields`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BinLocationFields`.
   */
  update(entity: BinLocationFields): UpdateRequestBuilder<BinLocationFields> {
    return new UpdateRequestBuilder(BinLocationFields, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BinLocationFields`.
   * @param absEntry Key property. See [[BinLocationFields.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `BinLocationFields`.
   */
  delete(absEntry: number): DeleteRequestBuilder<BinLocationFields>;
  /**
   * Returns a request builder for deleting an entity of type `BinLocationFields`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BinLocationFields` by taking the entity as a parameter.
   */
  delete(entity: BinLocationFields): DeleteRequestBuilder<BinLocationFields>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<BinLocationFields> {
    return new DeleteRequestBuilder(BinLocationFields, absEntryOrEntity instanceof BinLocationFields ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}