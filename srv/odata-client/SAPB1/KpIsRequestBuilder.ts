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
import { KpIs } from './KpIs';

/**
 * Request builder class for operations supported on the {@link KpIs} entity.
 */
export class KpIsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<KpIs<T>, T> {
  /**
   * Returns a request builder for retrieving one `KpIs` entity based on its keys.
   * @param kpiCode Key property. See {@link KpIs.kpiCode}.
   * @returns A request builder for creating requests to retrieve one `KpIs` entity based on its keys.
   */
  getByKey(
    kpiCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<KpIs<T>, T> {
    return new GetByKeyRequestBuilder<KpIs<T>, T>(this.entityApi, {
      KPICode: kpiCode
    });
  }

  /**
   * Returns a request builder for querying all `KpIs` entities.
   * @returns A request builder for creating requests to retrieve all `KpIs` entities.
   */
  getAll(): GetAllRequestBuilder<KpIs<T>, T> {
    return new GetAllRequestBuilder<KpIs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `KpIs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `KpIs`.
   */
  create(entity: KpIs<T>): CreateRequestBuilder<KpIs<T>, T> {
    return new CreateRequestBuilder<KpIs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `KpIs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `KpIs`.
   */
  update(entity: KpIs<T>): UpdateRequestBuilder<KpIs<T>, T> {
    return new UpdateRequestBuilder<KpIs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `KpIs`.
   * @param kpiCode Key property. See {@link KpIs.kpiCode}.
   * @returns A request builder for creating requests that delete an entity of type `KpIs`.
   */
  delete(kpiCode: string): DeleteRequestBuilder<KpIs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `KpIs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `KpIs` by taking the entity as a parameter.
   */
  delete(entity: KpIs<T>): DeleteRequestBuilder<KpIs<T>, T>;
  delete(kpiCodeOrEntity: any): DeleteRequestBuilder<KpIs<T>, T> {
    return new DeleteRequestBuilder<KpIs<T>, T>(
      this.entityApi,
      kpiCodeOrEntity instanceof KpIs
        ? kpiCodeOrEntity
        : { KPICode: kpiCodeOrEntity! }
    );
  }
}
