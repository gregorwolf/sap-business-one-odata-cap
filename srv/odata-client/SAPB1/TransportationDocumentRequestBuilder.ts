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
import { TransportationDocument } from './TransportationDocument';

/**
 * Request builder class for operations supported on the {@link TransportationDocument} entity.
 */
export class TransportationDocumentRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransportationDocument<T>, T> {
  /**
   * Returns a request builder for retrieving one `TransportationDocument` entity based on its keys.
   * @param transpDocNumber Key property. See {@link TransportationDocument.transpDocNumber}.
   * @returns A request builder for creating requests to retrieve one `TransportationDocument` entity based on its keys.
   */
  getByKey(
    transpDocNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<TransportationDocument<T>, T> {
    return new GetByKeyRequestBuilder<TransportationDocument<T>, T>(
      this.entityApi,
      { TranspDocNumber: transpDocNumber }
    );
  }

  /**
   * Returns a request builder for querying all `TransportationDocument` entities.
   * @returns A request builder for creating requests to retrieve all `TransportationDocument` entities.
   */
  getAll(): GetAllRequestBuilder<TransportationDocument<T>, T> {
    return new GetAllRequestBuilder<TransportationDocument<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TransportationDocument` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransportationDocument`.
   */
  create(
    entity: TransportationDocument<T>
  ): CreateRequestBuilder<TransportationDocument<T>, T> {
    return new CreateRequestBuilder<TransportationDocument<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransportationDocument`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransportationDocument`.
   */
  update(
    entity: TransportationDocument<T>
  ): UpdateRequestBuilder<TransportationDocument<T>, T> {
    return new UpdateRequestBuilder<TransportationDocument<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransportationDocument`.
   * @param transpDocNumber Key property. See {@link TransportationDocument.transpDocNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TransportationDocument`.
   */
  delete(
    transpDocNumber: number
  ): DeleteRequestBuilder<TransportationDocument<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransportationDocument`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransportationDocument` by taking the entity as a parameter.
   */
  delete(
    entity: TransportationDocument<T>
  ): DeleteRequestBuilder<TransportationDocument<T>, T>;
  delete(
    transpDocNumberOrEntity: any
  ): DeleteRequestBuilder<TransportationDocument<T>, T> {
    return new DeleteRequestBuilder<TransportationDocument<T>, T>(
      this.entityApi,
      transpDocNumberOrEntity instanceof TransportationDocument
        ? transpDocNumberOrEntity
        : { TranspDocNumber: transpDocNumberOrEntity! }
    );
  }
}
