/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { CreditCards } from './CreditCards';

/**
 * Request builder class for operations supported on the [[CreditCards]] entity.
 */
export class CreditCardsRequestBuilder extends RequestBuilder<CreditCards> {
  /**
   * Returns a request builder for retrieving one `CreditCards` entity based on its keys.
   * @param creditCardCode Key property. See [[CreditCards.creditCardCode]].
   * @returns A request builder for creating requests to retrieve one `CreditCards` entity based on its keys.
   */
  getByKey(creditCardCode: number): GetByKeyRequestBuilder<CreditCards> {
    return new GetByKeyRequestBuilder(CreditCards, { CreditCardCode: creditCardCode });
  }

  /**
   * Returns a request builder for querying all `CreditCards` entities.
   * @returns A request builder for creating requests to retrieve all `CreditCards` entities.
   */
  getAll(): GetAllRequestBuilder<CreditCards> {
    return new GetAllRequestBuilder(CreditCards);
  }

  /**
   * Returns a request builder for creating a `CreditCards` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CreditCards`.
   */
  create(entity: CreditCards): CreateRequestBuilder<CreditCards> {
    return new CreateRequestBuilder(CreditCards, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CreditCards`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CreditCards`.
   */
  update(entity: CreditCards): UpdateRequestBuilder<CreditCards> {
    return new UpdateRequestBuilder(CreditCards, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CreditCards`.
   * @param creditCardCode Key property. See [[CreditCards.creditCardCode]].
   * @returns A request builder for creating requests that delete an entity of type `CreditCards`.
   */
  delete(creditCardCode: number): DeleteRequestBuilder<CreditCards>;
  /**
   * Returns a request builder for deleting an entity of type `CreditCards`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CreditCards` by taking the entity as a parameter.
   */
  delete(entity: CreditCards): DeleteRequestBuilder<CreditCards>;
  delete(creditCardCodeOrEntity: any): DeleteRequestBuilder<CreditCards> {
    return new DeleteRequestBuilder(CreditCards, creditCardCodeOrEntity instanceof CreditCards ? creditCardCodeOrEntity : { CreditCardCode: creditCardCodeOrEntity! });
  }
}
