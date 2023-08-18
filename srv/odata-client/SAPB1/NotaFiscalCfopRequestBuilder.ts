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
import { NotaFiscalCfop } from './NotaFiscalCfop';

/**
 * Request builder class for operations supported on the {@link NotaFiscalCfop} entity.
 */
export class NotaFiscalCfopRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<NotaFiscalCfop<T>, T> {
  /**
   * Returns a request builder for retrieving one `NotaFiscalCfop` entity based on its keys.
   * @param id Key property. See {@link NotaFiscalCfop.id}.
   * @returns A request builder for creating requests to retrieve one `NotaFiscalCfop` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<NotaFiscalCfop<T>, T> {
    return new GetByKeyRequestBuilder<NotaFiscalCfop<T>, T>(this.entityApi, {
      ID: id
    });
  }

  /**
   * Returns a request builder for querying all `NotaFiscalCfop` entities.
   * @returns A request builder for creating requests to retrieve all `NotaFiscalCfop` entities.
   */
  getAll(): GetAllRequestBuilder<NotaFiscalCfop<T>, T> {
    return new GetAllRequestBuilder<NotaFiscalCfop<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `NotaFiscalCfop` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NotaFiscalCfop`.
   */
  create(
    entity: NotaFiscalCfop<T>
  ): CreateRequestBuilder<NotaFiscalCfop<T>, T> {
    return new CreateRequestBuilder<NotaFiscalCfop<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `NotaFiscalCfop`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NotaFiscalCfop`.
   */
  update(
    entity: NotaFiscalCfop<T>
  ): UpdateRequestBuilder<NotaFiscalCfop<T>, T> {
    return new UpdateRequestBuilder<NotaFiscalCfop<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `NotaFiscalCfop`.
   * @param id Key property. See {@link NotaFiscalCfop.id}.
   * @returns A request builder for creating requests that delete an entity of type `NotaFiscalCfop`.
   */
  delete(id: number): DeleteRequestBuilder<NotaFiscalCfop<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `NotaFiscalCfop`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NotaFiscalCfop` by taking the entity as a parameter.
   */
  delete(entity: NotaFiscalCfop<T>): DeleteRequestBuilder<NotaFiscalCfop<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<NotaFiscalCfop<T>, T> {
    return new DeleteRequestBuilder<NotaFiscalCfop<T>, T>(
      this.entityApi,
      idOrEntity instanceof NotaFiscalCfop ? idOrEntity : { ID: idOrEntity! }
    );
  }
}
