/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  CreateRequestBuilder,
  UpdateRequestBuilder,
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { DynamicSystemStrings } from './DynamicSystemStrings';

/**
 * Request builder class for operations supported on the {@link DynamicSystemStrings} entity.
 */
export class DynamicSystemStringsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DynamicSystemStrings<T>, T> {
  /**
   * Returns a request builder for retrieving one `DynamicSystemStrings` entity based on its keys.
   * @param formId Key property. See {@link DynamicSystemStrings.formId}.
   * @param itemId Key property. See {@link DynamicSystemStrings.itemId}.
   * @param columnId Key property. See {@link DynamicSystemStrings.columnId}.
   * @returns A request builder for creating requests to retrieve one `DynamicSystemStrings` entity based on its keys.
   */
  getByKey(
    formId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    columnId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DynamicSystemStrings<T>, T> {
    return new GetByKeyRequestBuilder<DynamicSystemStrings<T>, T>(
      this.entityApi,
      {
        FormID: formId,
        ItemID: itemId,
        ColumnID: columnId
      }
    );
  }

  /**
   * Returns a request builder for querying all `DynamicSystemStrings` entities.
   * @returns A request builder for creating requests to retrieve all `DynamicSystemStrings` entities.
   */
  getAll(): GetAllRequestBuilder<DynamicSystemStrings<T>, T> {
    return new GetAllRequestBuilder<DynamicSystemStrings<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DynamicSystemStrings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DynamicSystemStrings`.
   */
  create(
    entity: DynamicSystemStrings<T>
  ): CreateRequestBuilder<DynamicSystemStrings<T>, T> {
    return new CreateRequestBuilder<DynamicSystemStrings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DynamicSystemStrings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DynamicSystemStrings`.
   */
  update(
    entity: DynamicSystemStrings<T>
  ): UpdateRequestBuilder<DynamicSystemStrings<T>, T> {
    return new UpdateRequestBuilder<DynamicSystemStrings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DynamicSystemStrings`.
   * @param formId Key property. See {@link DynamicSystemStrings.formId}.
   * @param itemId Key property. See {@link DynamicSystemStrings.itemId}.
   * @param columnId Key property. See {@link DynamicSystemStrings.columnId}.
   * @returns A request builder for creating requests that delete an entity of type `DynamicSystemStrings`.
   */
  delete(
    formId: string,
    itemId: string,
    columnId: string
  ): DeleteRequestBuilder<DynamicSystemStrings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DynamicSystemStrings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DynamicSystemStrings` by taking the entity as a parameter.
   */
  delete(
    entity: DynamicSystemStrings<T>
  ): DeleteRequestBuilder<DynamicSystemStrings<T>, T>;
  delete(
    formIdOrEntity: any,
    itemId?: string,
    columnId?: string
  ): DeleteRequestBuilder<DynamicSystemStrings<T>, T> {
    return new DeleteRequestBuilder<DynamicSystemStrings<T>, T>(
      this.entityApi,
      formIdOrEntity instanceof DynamicSystemStrings
        ? formIdOrEntity
        : {
            FormID: formIdOrEntity!,
            ItemID: itemId!,
            ColumnID: columnId!
          }
    );
  }
}
