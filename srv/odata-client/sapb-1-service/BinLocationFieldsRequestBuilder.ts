/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(absEntry: number): GetByKeyRequestBuilderV4<BinLocationFields> {
    return new GetByKeyRequestBuilderV4(BinLocationFields, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `BinLocationFields` entities.
   * @returns A request builder for creating requests to retrieve all `BinLocationFields` entities.
   */
  getAll(): GetAllRequestBuilderV4<BinLocationFields> {
    return new GetAllRequestBuilderV4(BinLocationFields);
  }

  /**
   * Returns a request builder for creating a `BinLocationFields` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BinLocationFields`.
   */
  create(entity: BinLocationFields): CreateRequestBuilderV4<BinLocationFields> {
    return new CreateRequestBuilderV4(BinLocationFields, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BinLocationFields`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BinLocationFields`.
   */
  update(entity: BinLocationFields): UpdateRequestBuilderV4<BinLocationFields> {
    return new UpdateRequestBuilderV4(BinLocationFields, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BinLocationFields`.
   * @param absEntry Key property. See [[BinLocationFields.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `BinLocationFields`.
   */
  delete(absEntry: number): DeleteRequestBuilderV4<BinLocationFields>;
  /**
   * Returns a request builder for deleting an entity of type `BinLocationFields`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BinLocationFields` by taking the entity as a parameter.
   */
  delete(entity: BinLocationFields): DeleteRequestBuilderV4<BinLocationFields>;
  delete(absEntryOrEntity: any): DeleteRequestBuilderV4<BinLocationFields> {
    return new DeleteRequestBuilderV4(BinLocationFields, absEntryOrEntity instanceof BinLocationFields ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
