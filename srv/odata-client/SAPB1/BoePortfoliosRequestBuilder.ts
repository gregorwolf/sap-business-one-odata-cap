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
import { BoePortfolios } from './BoePortfolios';

/**
 * Request builder class for operations supported on the {@link BoePortfolios} entity.
 */
export class BoePortfoliosRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BoePortfolios<T>, T> {
  /**
   * Returns a request builder for retrieving one `BoePortfolios` entity based on its keys.
   * @param portfolioEntry Key property. See {@link BoePortfolios.portfolioEntry}.
   * @returns A request builder for creating requests to retrieve one `BoePortfolios` entity based on its keys.
   */
  getByKey(
    portfolioEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BoePortfolios<T>, T> {
    return new GetByKeyRequestBuilder<BoePortfolios<T>, T>(this.entityApi, {
      PortfolioEntry: portfolioEntry
    });
  }

  /**
   * Returns a request builder for querying all `BoePortfolios` entities.
   * @returns A request builder for creating requests to retrieve all `BoePortfolios` entities.
   */
  getAll(): GetAllRequestBuilder<BoePortfolios<T>, T> {
    return new GetAllRequestBuilder<BoePortfolios<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BoePortfolios` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BoePortfolios`.
   */
  create(entity: BoePortfolios<T>): CreateRequestBuilder<BoePortfolios<T>, T> {
    return new CreateRequestBuilder<BoePortfolios<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BoePortfolios`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BoePortfolios`.
   */
  update(entity: BoePortfolios<T>): UpdateRequestBuilder<BoePortfolios<T>, T> {
    return new UpdateRequestBuilder<BoePortfolios<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BoePortfolios`.
   * @param portfolioEntry Key property. See {@link BoePortfolios.portfolioEntry}.
   * @returns A request builder for creating requests that delete an entity of type `BoePortfolios`.
   */
  delete(portfolioEntry: number): DeleteRequestBuilder<BoePortfolios<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BoePortfolios`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BoePortfolios` by taking the entity as a parameter.
   */
  delete(entity: BoePortfolios<T>): DeleteRequestBuilder<BoePortfolios<T>, T>;
  delete(
    portfolioEntryOrEntity: any
  ): DeleteRequestBuilder<BoePortfolios<T>, T> {
    return new DeleteRequestBuilder<BoePortfolios<T>, T>(
      this.entityApi,
      portfolioEntryOrEntity instanceof BoePortfolios
        ? portfolioEntryOrEntity
        : { PortfolioEntry: portfolioEntryOrEntity! }
    );
  }
}
