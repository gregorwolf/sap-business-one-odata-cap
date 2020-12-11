/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { DynamicSystemStrings } from './DynamicSystemStrings';

/**
 * Request builder class for operations supported on the [[DynamicSystemStrings]] entity.
 */
export class DynamicSystemStringsRequestBuilder extends RequestBuilder<DynamicSystemStrings> {
  /**
   * Returns a request builder for retrieving one `DynamicSystemStrings` entity based on its keys.
   * @param formId Key property. See [[DynamicSystemStrings.formId]].
   * @param itemId Key property. See [[DynamicSystemStrings.itemId]].
   * @param columnId Key property. See [[DynamicSystemStrings.columnId]].
   * @returns A request builder for creating requests to retrieve one `DynamicSystemStrings` entity based on its keys.
   */
  getByKey(formId: string, itemId: string, columnId: string): GetByKeyRequestBuilderV4<DynamicSystemStrings> {
    return new GetByKeyRequestBuilderV4(DynamicSystemStrings, {
      FormID: formId,
      ItemID: itemId,
      ColumnID: columnId
    });
  }

  /**
   * Returns a request builder for querying all `DynamicSystemStrings` entities.
   * @returns A request builder for creating requests to retrieve all `DynamicSystemStrings` entities.
   */
  getAll(): GetAllRequestBuilderV4<DynamicSystemStrings> {
    return new GetAllRequestBuilderV4(DynamicSystemStrings);
  }

  /**
   * Returns a request builder for creating a `DynamicSystemStrings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DynamicSystemStrings`.
   */
  create(entity: DynamicSystemStrings): CreateRequestBuilderV4<DynamicSystemStrings> {
    return new CreateRequestBuilderV4(DynamicSystemStrings, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `DynamicSystemStrings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DynamicSystemStrings`.
   */
  update(entity: DynamicSystemStrings): UpdateRequestBuilderV4<DynamicSystemStrings> {
    return new UpdateRequestBuilderV4(DynamicSystemStrings, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DynamicSystemStrings`.
   * @param formId Key property. See [[DynamicSystemStrings.formId]].
   * @param itemId Key property. See [[DynamicSystemStrings.itemId]].
   * @param columnId Key property. See [[DynamicSystemStrings.columnId]].
   * @returns A request builder for creating requests that delete an entity of type `DynamicSystemStrings`.
   */
  delete(formId: string, itemId: string, columnId: string): DeleteRequestBuilderV4<DynamicSystemStrings>;
  /**
   * Returns a request builder for deleting an entity of type `DynamicSystemStrings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DynamicSystemStrings` by taking the entity as a parameter.
   */
  delete(entity: DynamicSystemStrings): DeleteRequestBuilderV4<DynamicSystemStrings>;
  delete(formIdOrEntity: any, itemId?: string, columnId?: string): DeleteRequestBuilderV4<DynamicSystemStrings> {
    return new DeleteRequestBuilderV4(DynamicSystemStrings, formIdOrEntity instanceof DynamicSystemStrings ? formIdOrEntity : {
      FormID: formIdOrEntity!,
      ItemID: itemId!,
      ColumnID: columnId!
    });
  }
}
