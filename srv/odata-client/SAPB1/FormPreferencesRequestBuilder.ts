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
import { FormPreferences } from './FormPreferences';

/**
 * Request builder class for operations supported on the {@link FormPreferences} entity.
 */
export class FormPreferencesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FormPreferences<T>, T> {
  /**
   * Returns a request builder for retrieving one `FormPreferences` entity based on its keys.
   * @param user Key property. See {@link FormPreferences.user}.
   * @param formId Key property. See {@link FormPreferences.formId}.
   * @param itemNumber Key property. See {@link FormPreferences.itemNumber}.
   * @param column Key property. See {@link FormPreferences.column}.
   * @returns A request builder for creating requests to retrieve one `FormPreferences` entity based on its keys.
   */
  getByKey(
    user: DeserializedType<T, 'Edm.Int32'>,
    formId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    column: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FormPreferences<T>, T> {
    return new GetByKeyRequestBuilder<FormPreferences<T>, T>(this.entityApi, {
      User: user,
      FormID: formId,
      ItemNumber: itemNumber,
      Column: column
    });
  }

  /**
   * Returns a request builder for querying all `FormPreferences` entities.
   * @returns A request builder for creating requests to retrieve all `FormPreferences` entities.
   */
  getAll(): GetAllRequestBuilder<FormPreferences<T>, T> {
    return new GetAllRequestBuilder<FormPreferences<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FormPreferences` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FormPreferences`.
   */
  create(
    entity: FormPreferences<T>
  ): CreateRequestBuilder<FormPreferences<T>, T> {
    return new CreateRequestBuilder<FormPreferences<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FormPreferences`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FormPreferences`.
   */
  update(
    entity: FormPreferences<T>
  ): UpdateRequestBuilder<FormPreferences<T>, T> {
    return new UpdateRequestBuilder<FormPreferences<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FormPreferences`.
   * @param user Key property. See {@link FormPreferences.user}.
   * @param formId Key property. See {@link FormPreferences.formId}.
   * @param itemNumber Key property. See {@link FormPreferences.itemNumber}.
   * @param column Key property. See {@link FormPreferences.column}.
   * @returns A request builder for creating requests that delete an entity of type `FormPreferences`.
   */
  delete(
    user: number,
    formId: string,
    itemNumber: string,
    column: string
  ): DeleteRequestBuilder<FormPreferences<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FormPreferences`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FormPreferences` by taking the entity as a parameter.
   */
  delete(
    entity: FormPreferences<T>
  ): DeleteRequestBuilder<FormPreferences<T>, T>;
  delete(
    userOrEntity: any,
    formId?: string,
    itemNumber?: string,
    column?: string
  ): DeleteRequestBuilder<FormPreferences<T>, T> {
    return new DeleteRequestBuilder<FormPreferences<T>, T>(
      this.entityApi,
      userOrEntity instanceof FormPreferences
        ? userOrEntity
        : {
            User: userOrEntity!,
            FormID: formId!,
            ItemNumber: itemNumber!,
            Column: column!
          }
    );
  }
}
