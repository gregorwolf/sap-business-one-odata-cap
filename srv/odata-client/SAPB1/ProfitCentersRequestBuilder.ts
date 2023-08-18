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
import { ProfitCenters } from './ProfitCenters';

/**
 * Request builder class for operations supported on the {@link ProfitCenters} entity.
 */
export class ProfitCentersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProfitCenters<T>, T> {
  /**
   * Returns a request builder for retrieving one `ProfitCenters` entity based on its keys.
   * @param centerCode Key property. See {@link ProfitCenters.centerCode}.
   * @returns A request builder for creating requests to retrieve one `ProfitCenters` entity based on its keys.
   */
  getByKey(
    centerCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProfitCenters<T>, T> {
    return new GetByKeyRequestBuilder<ProfitCenters<T>, T>(this.entityApi, {
      CenterCode: centerCode
    });
  }

  /**
   * Returns a request builder for querying all `ProfitCenters` entities.
   * @returns A request builder for creating requests to retrieve all `ProfitCenters` entities.
   */
  getAll(): GetAllRequestBuilder<ProfitCenters<T>, T> {
    return new GetAllRequestBuilder<ProfitCenters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProfitCenters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProfitCenters`.
   */
  create(entity: ProfitCenters<T>): CreateRequestBuilder<ProfitCenters<T>, T> {
    return new CreateRequestBuilder<ProfitCenters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProfitCenters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProfitCenters`.
   */
  update(entity: ProfitCenters<T>): UpdateRequestBuilder<ProfitCenters<T>, T> {
    return new UpdateRequestBuilder<ProfitCenters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProfitCenters`.
   * @param centerCode Key property. See {@link ProfitCenters.centerCode}.
   * @returns A request builder for creating requests that delete an entity of type `ProfitCenters`.
   */
  delete(centerCode: string): DeleteRequestBuilder<ProfitCenters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProfitCenters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProfitCenters` by taking the entity as a parameter.
   */
  delete(entity: ProfitCenters<T>): DeleteRequestBuilder<ProfitCenters<T>, T>;
  delete(centerCodeOrEntity: any): DeleteRequestBuilder<ProfitCenters<T>, T> {
    return new DeleteRequestBuilder<ProfitCenters<T>, T>(
      this.entityApi,
      centerCodeOrEntity instanceof ProfitCenters
        ? centerCodeOrEntity
        : { CenterCode: centerCodeOrEntity! }
    );
  }
}
