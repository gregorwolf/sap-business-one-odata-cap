/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { BoePortfolios } from './BoePortfolios';

/**
 * Request builder class for operations supported on the [[BoePortfolios]] entity.
 */
export class BoePortfoliosRequestBuilder extends RequestBuilder<BoePortfolios> {
  /**
   * Returns a request builder for retrieving one `BoePortfolios` entity based on its keys.
   * @param portfolioEntry Key property. See [[BoePortfolios.portfolioEntry]].
   * @returns A request builder for creating requests to retrieve one `BoePortfolios` entity based on its keys.
   */
  getByKey(portfolioEntry: number): GetByKeyRequestBuilder<BoePortfolios> {
    return new GetByKeyRequestBuilder(BoePortfolios, { PortfolioEntry: portfolioEntry });
  }

  /**
   * Returns a request builder for querying all `BoePortfolios` entities.
   * @returns A request builder for creating requests to retrieve all `BoePortfolios` entities.
   */
  getAll(): GetAllRequestBuilder<BoePortfolios> {
    return new GetAllRequestBuilder(BoePortfolios);
  }

  /**
   * Returns a request builder for creating a `BoePortfolios` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BoePortfolios`.
   */
  create(entity: BoePortfolios): CreateRequestBuilder<BoePortfolios> {
    return new CreateRequestBuilder(BoePortfolios, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BoePortfolios`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BoePortfolios`.
   */
  update(entity: BoePortfolios): UpdateRequestBuilder<BoePortfolios> {
    return new UpdateRequestBuilder(BoePortfolios, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BoePortfolios`.
   * @param portfolioEntry Key property. See [[BoePortfolios.portfolioEntry]].
   * @returns A request builder for creating requests that delete an entity of type `BoePortfolios`.
   */
  delete(portfolioEntry: number): DeleteRequestBuilder<BoePortfolios>;
  /**
   * Returns a request builder for deleting an entity of type `BoePortfolios`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BoePortfolios` by taking the entity as a parameter.
   */
  delete(entity: BoePortfolios): DeleteRequestBuilder<BoePortfolios>;
  delete(portfolioEntryOrEntity: any): DeleteRequestBuilder<BoePortfolios> {
    return new DeleteRequestBuilder(BoePortfolios, portfolioEntryOrEntity instanceof BoePortfolios ? portfolioEntryOrEntity : { PortfolioEntry: portfolioEntryOrEntity! });
  }
}
