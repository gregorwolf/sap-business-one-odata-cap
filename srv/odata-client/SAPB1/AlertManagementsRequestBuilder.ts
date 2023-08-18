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
import { AlertManagements } from './AlertManagements';

/**
 * Request builder class for operations supported on the {@link AlertManagements} entity.
 */
export class AlertManagementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AlertManagements<T>, T> {
  /**
   * Returns a request builder for retrieving one `AlertManagements` entity based on its keys.
   * @param code Key property. See {@link AlertManagements.code}.
   * @returns A request builder for creating requests to retrieve one `AlertManagements` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<AlertManagements<T>, T> {
    return new GetByKeyRequestBuilder<AlertManagements<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `AlertManagements` entities.
   * @returns A request builder for creating requests to retrieve all `AlertManagements` entities.
   */
  getAll(): GetAllRequestBuilder<AlertManagements<T>, T> {
    return new GetAllRequestBuilder<AlertManagements<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AlertManagements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AlertManagements`.
   */
  create(
    entity: AlertManagements<T>
  ): CreateRequestBuilder<AlertManagements<T>, T> {
    return new CreateRequestBuilder<AlertManagements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AlertManagements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AlertManagements`.
   */
  update(
    entity: AlertManagements<T>
  ): UpdateRequestBuilder<AlertManagements<T>, T> {
    return new UpdateRequestBuilder<AlertManagements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AlertManagements`.
   * @param code Key property. See {@link AlertManagements.code}.
   * @returns A request builder for creating requests that delete an entity of type `AlertManagements`.
   */
  delete(code: number): DeleteRequestBuilder<AlertManagements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AlertManagements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AlertManagements` by taking the entity as a parameter.
   */
  delete(
    entity: AlertManagements<T>
  ): DeleteRequestBuilder<AlertManagements<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<AlertManagements<T>, T> {
    return new DeleteRequestBuilder<AlertManagements<T>, T>(
      this.entityApi,
      codeOrEntity instanceof AlertManagements
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
