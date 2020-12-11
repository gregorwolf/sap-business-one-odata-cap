/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { FormPreferences } from './FormPreferences';

/**
 * Request builder class for operations supported on the [[FormPreferences]] entity.
 */
export class FormPreferencesRequestBuilder extends RequestBuilder<FormPreferences> {
  /**
   * Returns a request builder for retrieving one `FormPreferences` entity based on its keys.
   * @param user Key property. See [[FormPreferences.user]].
   * @param formId Key property. See [[FormPreferences.formId]].
   * @param itemNumber Key property. See [[FormPreferences.itemNumber]].
   * @param column Key property. See [[FormPreferences.column]].
   * @returns A request builder for creating requests to retrieve one `FormPreferences` entity based on its keys.
   */
  getByKey(user: number, formId: string, itemNumber: string, column: string): GetByKeyRequestBuilderV4<FormPreferences> {
    return new GetByKeyRequestBuilderV4(FormPreferences, {
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
  getAll(): GetAllRequestBuilderV4<FormPreferences> {
    return new GetAllRequestBuilderV4(FormPreferences);
  }

  /**
   * Returns a request builder for creating a `FormPreferences` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FormPreferences`.
   */
  create(entity: FormPreferences): CreateRequestBuilderV4<FormPreferences> {
    return new CreateRequestBuilderV4(FormPreferences, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `FormPreferences`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FormPreferences`.
   */
  update(entity: FormPreferences): UpdateRequestBuilderV4<FormPreferences> {
    return new UpdateRequestBuilderV4(FormPreferences, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FormPreferences`.
   * @param user Key property. See [[FormPreferences.user]].
   * @param formId Key property. See [[FormPreferences.formId]].
   * @param itemNumber Key property. See [[FormPreferences.itemNumber]].
   * @param column Key property. See [[FormPreferences.column]].
   * @returns A request builder for creating requests that delete an entity of type `FormPreferences`.
   */
  delete(user: number, formId: string, itemNumber: string, column: string): DeleteRequestBuilderV4<FormPreferences>;
  /**
   * Returns a request builder for deleting an entity of type `FormPreferences`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FormPreferences` by taking the entity as a parameter.
   */
  delete(entity: FormPreferences): DeleteRequestBuilderV4<FormPreferences>;
  delete(userOrEntity: any, formId?: string, itemNumber?: string, column?: string): DeleteRequestBuilderV4<FormPreferences> {
    return new DeleteRequestBuilderV4(FormPreferences, userOrEntity instanceof FormPreferences ? userOrEntity : {
      User: userOrEntity!,
      FormID: formId!,
      ItemNumber: itemNumber!,
      Column: column!
    });
  }
}
