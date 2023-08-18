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
import { NotaFiscalCst } from './NotaFiscalCst';

/**
 * Request builder class for operations supported on the {@link NotaFiscalCst} entity.
 */
export class NotaFiscalCstRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<NotaFiscalCst<T>, T> {
  /**
   * Returns a request builder for retrieving one `NotaFiscalCst` entity based on its keys.
   * @param id Key property. See {@link NotaFiscalCst.id}.
   * @returns A request builder for creating requests to retrieve one `NotaFiscalCst` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<NotaFiscalCst<T>, T> {
    return new GetByKeyRequestBuilder<NotaFiscalCst<T>, T>(this.entityApi, {
      ID: id
    });
  }

  /**
   * Returns a request builder for querying all `NotaFiscalCst` entities.
   * @returns A request builder for creating requests to retrieve all `NotaFiscalCst` entities.
   */
  getAll(): GetAllRequestBuilder<NotaFiscalCst<T>, T> {
    return new GetAllRequestBuilder<NotaFiscalCst<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `NotaFiscalCst` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NotaFiscalCst`.
   */
  create(entity: NotaFiscalCst<T>): CreateRequestBuilder<NotaFiscalCst<T>, T> {
    return new CreateRequestBuilder<NotaFiscalCst<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `NotaFiscalCst`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NotaFiscalCst`.
   */
  update(entity: NotaFiscalCst<T>): UpdateRequestBuilder<NotaFiscalCst<T>, T> {
    return new UpdateRequestBuilder<NotaFiscalCst<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `NotaFiscalCst`.
   * @param id Key property. See {@link NotaFiscalCst.id}.
   * @returns A request builder for creating requests that delete an entity of type `NotaFiscalCst`.
   */
  delete(id: number): DeleteRequestBuilder<NotaFiscalCst<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `NotaFiscalCst`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NotaFiscalCst` by taking the entity as a parameter.
   */
  delete(entity: NotaFiscalCst<T>): DeleteRequestBuilder<NotaFiscalCst<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<NotaFiscalCst<T>, T> {
    return new DeleteRequestBuilder<NotaFiscalCst<T>, T>(
      this.entityApi,
      idOrEntity instanceof NotaFiscalCst ? idOrEntity : { ID: idOrEntity! }
    );
  }
}
