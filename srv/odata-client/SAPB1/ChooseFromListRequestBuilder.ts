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
import { ChooseFromList } from './ChooseFromList';

/**
 * Request builder class for operations supported on the {@link ChooseFromList} entity.
 */
export class ChooseFromListRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ChooseFromList<T>, T> {
  /**
   * Returns a request builder for retrieving one `ChooseFromList` entity based on its keys.
   * @param objectName Key property. See {@link ChooseFromList.objectName}.
   * @returns A request builder for creating requests to retrieve one `ChooseFromList` entity based on its keys.
   */
  getByKey(
    objectName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ChooseFromList<T>, T> {
    return new GetByKeyRequestBuilder<ChooseFromList<T>, T>(this.entityApi, {
      ObjectName: objectName
    });
  }

  /**
   * Returns a request builder for querying all `ChooseFromList` entities.
   * @returns A request builder for creating requests to retrieve all `ChooseFromList` entities.
   */
  getAll(): GetAllRequestBuilder<ChooseFromList<T>, T> {
    return new GetAllRequestBuilder<ChooseFromList<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ChooseFromList` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ChooseFromList`.
   */
  create(
    entity: ChooseFromList<T>
  ): CreateRequestBuilder<ChooseFromList<T>, T> {
    return new CreateRequestBuilder<ChooseFromList<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ChooseFromList`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ChooseFromList`.
   */
  update(
    entity: ChooseFromList<T>
  ): UpdateRequestBuilder<ChooseFromList<T>, T> {
    return new UpdateRequestBuilder<ChooseFromList<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ChooseFromList`.
   * @param objectName Key property. See {@link ChooseFromList.objectName}.
   * @returns A request builder for creating requests that delete an entity of type `ChooseFromList`.
   */
  delete(objectName: string): DeleteRequestBuilder<ChooseFromList<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ChooseFromList`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ChooseFromList` by taking the entity as a parameter.
   */
  delete(entity: ChooseFromList<T>): DeleteRequestBuilder<ChooseFromList<T>, T>;
  delete(objectNameOrEntity: any): DeleteRequestBuilder<ChooseFromList<T>, T> {
    return new DeleteRequestBuilder<ChooseFromList<T>, T>(
      this.entityApi,
      objectNameOrEntity instanceof ChooseFromList
        ? objectNameOrEntity
        : { ObjectName: objectNameOrEntity! }
    );
  }
}
