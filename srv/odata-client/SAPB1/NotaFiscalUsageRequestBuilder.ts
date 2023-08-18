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
import { NotaFiscalUsage } from './NotaFiscalUsage';

/**
 * Request builder class for operations supported on the {@link NotaFiscalUsage} entity.
 */
export class NotaFiscalUsageRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<NotaFiscalUsage<T>, T> {
  /**
   * Returns a request builder for retrieving one `NotaFiscalUsage` entity based on its keys.
   * @param id Key property. See {@link NotaFiscalUsage.id}.
   * @returns A request builder for creating requests to retrieve one `NotaFiscalUsage` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<NotaFiscalUsage<T>, T> {
    return new GetByKeyRequestBuilder<NotaFiscalUsage<T>, T>(this.entityApi, {
      ID: id
    });
  }

  /**
   * Returns a request builder for querying all `NotaFiscalUsage` entities.
   * @returns A request builder for creating requests to retrieve all `NotaFiscalUsage` entities.
   */
  getAll(): GetAllRequestBuilder<NotaFiscalUsage<T>, T> {
    return new GetAllRequestBuilder<NotaFiscalUsage<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `NotaFiscalUsage` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NotaFiscalUsage`.
   */
  create(
    entity: NotaFiscalUsage<T>
  ): CreateRequestBuilder<NotaFiscalUsage<T>, T> {
    return new CreateRequestBuilder<NotaFiscalUsage<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `NotaFiscalUsage`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NotaFiscalUsage`.
   */
  update(
    entity: NotaFiscalUsage<T>
  ): UpdateRequestBuilder<NotaFiscalUsage<T>, T> {
    return new UpdateRequestBuilder<NotaFiscalUsage<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `NotaFiscalUsage`.
   * @param id Key property. See {@link NotaFiscalUsage.id}.
   * @returns A request builder for creating requests that delete an entity of type `NotaFiscalUsage`.
   */
  delete(id: number): DeleteRequestBuilder<NotaFiscalUsage<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `NotaFiscalUsage`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NotaFiscalUsage` by taking the entity as a parameter.
   */
  delete(
    entity: NotaFiscalUsage<T>
  ): DeleteRequestBuilder<NotaFiscalUsage<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<NotaFiscalUsage<T>, T> {
    return new DeleteRequestBuilder<NotaFiscalUsage<T>, T>(
      this.entityApi,
      idOrEntity instanceof NotaFiscalUsage ? idOrEntity : { ID: idOrEntity! }
    );
  }
}
