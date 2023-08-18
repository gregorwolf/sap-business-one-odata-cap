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
import { DistributionRules } from './DistributionRules';

/**
 * Request builder class for operations supported on the {@link DistributionRules} entity.
 */
export class DistributionRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DistributionRules<T>, T> {
  /**
   * Returns a request builder for retrieving one `DistributionRules` entity based on its keys.
   * @param factorCode Key property. See {@link DistributionRules.factorCode}.
   * @returns A request builder for creating requests to retrieve one `DistributionRules` entity based on its keys.
   */
  getByKey(
    factorCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DistributionRules<T>, T> {
    return new GetByKeyRequestBuilder<DistributionRules<T>, T>(this.entityApi, {
      FactorCode: factorCode
    });
  }

  /**
   * Returns a request builder for querying all `DistributionRules` entities.
   * @returns A request builder for creating requests to retrieve all `DistributionRules` entities.
   */
  getAll(): GetAllRequestBuilder<DistributionRules<T>, T> {
    return new GetAllRequestBuilder<DistributionRules<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DistributionRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DistributionRules`.
   */
  create(
    entity: DistributionRules<T>
  ): CreateRequestBuilder<DistributionRules<T>, T> {
    return new CreateRequestBuilder<DistributionRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DistributionRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DistributionRules`.
   */
  update(
    entity: DistributionRules<T>
  ): UpdateRequestBuilder<DistributionRules<T>, T> {
    return new UpdateRequestBuilder<DistributionRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DistributionRules`.
   * @param factorCode Key property. See {@link DistributionRules.factorCode}.
   * @returns A request builder for creating requests that delete an entity of type `DistributionRules`.
   */
  delete(factorCode: string): DeleteRequestBuilder<DistributionRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DistributionRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DistributionRules` by taking the entity as a parameter.
   */
  delete(
    entity: DistributionRules<T>
  ): DeleteRequestBuilder<DistributionRules<T>, T>;
  delete(
    factorCodeOrEntity: any
  ): DeleteRequestBuilder<DistributionRules<T>, T> {
    return new DeleteRequestBuilder<DistributionRules<T>, T>(
      this.entityApi,
      factorCodeOrEntity instanceof DistributionRules
        ? factorCodeOrEntity
        : { FactorCode: factorCodeOrEntity! }
    );
  }
}
