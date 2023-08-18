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
import { FactoringIndicators } from './FactoringIndicators';

/**
 * Request builder class for operations supported on the {@link FactoringIndicators} entity.
 */
export class FactoringIndicatorsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FactoringIndicators<T>, T> {
  /**
   * Returns a request builder for retrieving one `FactoringIndicators` entity based on its keys.
   * @param indicatorCode Key property. See {@link FactoringIndicators.indicatorCode}.
   * @returns A request builder for creating requests to retrieve one `FactoringIndicators` entity based on its keys.
   */
  getByKey(
    indicatorCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FactoringIndicators<T>, T> {
    return new GetByKeyRequestBuilder<FactoringIndicators<T>, T>(
      this.entityApi,
      { IndicatorCode: indicatorCode }
    );
  }

  /**
   * Returns a request builder for querying all `FactoringIndicators` entities.
   * @returns A request builder for creating requests to retrieve all `FactoringIndicators` entities.
   */
  getAll(): GetAllRequestBuilder<FactoringIndicators<T>, T> {
    return new GetAllRequestBuilder<FactoringIndicators<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FactoringIndicators` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FactoringIndicators`.
   */
  create(
    entity: FactoringIndicators<T>
  ): CreateRequestBuilder<FactoringIndicators<T>, T> {
    return new CreateRequestBuilder<FactoringIndicators<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FactoringIndicators`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FactoringIndicators`.
   */
  update(
    entity: FactoringIndicators<T>
  ): UpdateRequestBuilder<FactoringIndicators<T>, T> {
    return new UpdateRequestBuilder<FactoringIndicators<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FactoringIndicators`.
   * @param indicatorCode Key property. See {@link FactoringIndicators.indicatorCode}.
   * @returns A request builder for creating requests that delete an entity of type `FactoringIndicators`.
   */
  delete(
    indicatorCode: string
  ): DeleteRequestBuilder<FactoringIndicators<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FactoringIndicators`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FactoringIndicators` by taking the entity as a parameter.
   */
  delete(
    entity: FactoringIndicators<T>
  ): DeleteRequestBuilder<FactoringIndicators<T>, T>;
  delete(
    indicatorCodeOrEntity: any
  ): DeleteRequestBuilder<FactoringIndicators<T>, T> {
    return new DeleteRequestBuilder<FactoringIndicators<T>, T>(
      this.entityApi,
      indicatorCodeOrEntity instanceof FactoringIndicators
        ? indicatorCodeOrEntity
        : { IndicatorCode: indicatorCodeOrEntity! }
    );
  }
}
