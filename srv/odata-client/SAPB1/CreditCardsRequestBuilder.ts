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
import { CreditCards } from './CreditCards';

/**
 * Request builder class for operations supported on the {@link CreditCards} entity.
 */
export class CreditCardsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CreditCards<T>, T> {
  /**
   * Returns a request builder for retrieving one `CreditCards` entity based on its keys.
   * @param creditCardCode Key property. See {@link CreditCards.creditCardCode}.
   * @returns A request builder for creating requests to retrieve one `CreditCards` entity based on its keys.
   */
  getByKey(
    creditCardCode: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<CreditCards<T>, T> {
    return new GetByKeyRequestBuilder<CreditCards<T>, T>(this.entityApi, {
      CreditCardCode: creditCardCode
    });
  }

  /**
   * Returns a request builder for querying all `CreditCards` entities.
   * @returns A request builder for creating requests to retrieve all `CreditCards` entities.
   */
  getAll(): GetAllRequestBuilder<CreditCards<T>, T> {
    return new GetAllRequestBuilder<CreditCards<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CreditCards` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CreditCards`.
   */
  create(entity: CreditCards<T>): CreateRequestBuilder<CreditCards<T>, T> {
    return new CreateRequestBuilder<CreditCards<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CreditCards`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CreditCards`.
   */
  update(entity: CreditCards<T>): UpdateRequestBuilder<CreditCards<T>, T> {
    return new UpdateRequestBuilder<CreditCards<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CreditCards`.
   * @param creditCardCode Key property. See {@link CreditCards.creditCardCode}.
   * @returns A request builder for creating requests that delete an entity of type `CreditCards`.
   */
  delete(creditCardCode: number): DeleteRequestBuilder<CreditCards<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CreditCards`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CreditCards` by taking the entity as a parameter.
   */
  delete(entity: CreditCards<T>): DeleteRequestBuilder<CreditCards<T>, T>;
  delete(creditCardCodeOrEntity: any): DeleteRequestBuilder<CreditCards<T>, T> {
    return new DeleteRequestBuilder<CreditCards<T>, T>(
      this.entityApi,
      creditCardCodeOrEntity instanceof CreditCards
        ? creditCardCodeOrEntity
        : { CreditCardCode: creditCardCodeOrEntity! }
    );
  }
}
