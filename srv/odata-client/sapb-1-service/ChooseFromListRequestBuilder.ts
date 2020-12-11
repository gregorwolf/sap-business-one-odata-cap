/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ChooseFromList } from './ChooseFromList';

/**
 * Request builder class for operations supported on the [[ChooseFromList]] entity.
 */
export class ChooseFromListRequestBuilder extends RequestBuilder<ChooseFromList> {
  /**
   * Returns a request builder for retrieving one `ChooseFromList` entity based on its keys.
   * @param objectName Key property. See [[ChooseFromList.objectName]].
   * @returns A request builder for creating requests to retrieve one `ChooseFromList` entity based on its keys.
   */
  getByKey(objectName: string): GetByKeyRequestBuilderV4<ChooseFromList> {
    return new GetByKeyRequestBuilderV4(ChooseFromList, { ObjectName: objectName });
  }

  /**
   * Returns a request builder for querying all `ChooseFromList` entities.
   * @returns A request builder for creating requests to retrieve all `ChooseFromList` entities.
   */
  getAll(): GetAllRequestBuilderV4<ChooseFromList> {
    return new GetAllRequestBuilderV4(ChooseFromList);
  }

  /**
   * Returns a request builder for creating a `ChooseFromList` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ChooseFromList`.
   */
  create(entity: ChooseFromList): CreateRequestBuilderV4<ChooseFromList> {
    return new CreateRequestBuilderV4(ChooseFromList, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ChooseFromList`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ChooseFromList`.
   */
  update(entity: ChooseFromList): UpdateRequestBuilderV4<ChooseFromList> {
    return new UpdateRequestBuilderV4(ChooseFromList, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ChooseFromList`.
   * @param objectName Key property. See [[ChooseFromList.objectName]].
   * @returns A request builder for creating requests that delete an entity of type `ChooseFromList`.
   */
  delete(objectName: string): DeleteRequestBuilderV4<ChooseFromList>;
  /**
   * Returns a request builder for deleting an entity of type `ChooseFromList`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ChooseFromList` by taking the entity as a parameter.
   */
  delete(entity: ChooseFromList): DeleteRequestBuilderV4<ChooseFromList>;
  delete(objectNameOrEntity: any): DeleteRequestBuilderV4<ChooseFromList> {
    return new DeleteRequestBuilderV4(ChooseFromList, objectNameOrEntity instanceof ChooseFromList ? objectNameOrEntity : { ObjectName: objectNameOrEntity! });
  }
}
